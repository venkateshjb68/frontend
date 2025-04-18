// import {io} from "socket.io";
import { io } from 'socket.io-client';
import Main from "./components/Main";
const socket=io(process.env.ser)

function App() { 
  return (
    <>
     <Main socket={socket}/>
     </>
  );
}
export default App;
