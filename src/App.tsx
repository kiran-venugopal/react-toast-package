import { ToastRoot, addToast } from "react-toast";
import "./styles.css";
import Message from "./component/Message/Message";

export default function App() {
  const handleClick = () => {
    addToast(Message);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>add</button>
      <ToastRoot timeOutDuration={5000} position="bottom-right" />
    </div>
  );
}
