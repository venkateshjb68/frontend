const {createServer} = require( "http");
const {Server} = require( "socket.io");
const {v4: uuidv4} = require( "uuid");
//const cors=require('cors')

const httpServer=createServer();
const io = new Server(httpServer,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        "type": "module",
        
    },
});

io.use((socket,next)=>{
    const username = socket.handshake.auth.username;

    console.log(username)
    if(!username){
        return next(new Error("Invalid username"))
    }
    socket.username=username;
    socket.userId=uuidv4();
    next();
})

io.on("connection",(socket)=>{
    const users=[]
    for(let [id,socket] of io.of("/").sockets){
        users.push({
            userId: id,
            username:socket.username,
            
        })
    }
    //all user event
    socket.emit("users", users);
    //connected user details event
    socket.emit("session", {
        userId: socket.userId, 
        username:socket.username })
        
        socket.broadcast.emit("user Connected",{
            userId: socket.userId, 
            username:socket.username
        })
        socket.on("new message",(message)=>{
            console.log("msg",message,socket)
            io.emit("new message",{
              userId:socket.userId,
              username: socket.username,
              message
          })
        })
        socket.on("disconnect", () => {
            console.log(`${socket.username} disconnected`);
            // Optionally broadcast to others
            socket.broadcast.emit("user-disconnected", {
              userId: socket.userId,
              username: socket.username
            });
          });
});

console.log("listening to port...");

// httpServer.listen(process.env.PORT || 4000);

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
    console.log(`Socket.IO server listening on port ${PORT}`);
});