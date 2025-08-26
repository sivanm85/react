import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ChatMessages from "./ChatMessages";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  console.log("messages >>->", messages);
  useEffect(() => {
    const setTimerPolling = () => {
      // Polling logic here
      console.log("Polling...");
      dispatch(
        addMessage({
          name: generateName(),
          message: generateRandomString(30),
        })
      );
    };
    const timer = setInterval(setTimerPolling, 1000000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="text-xs border w-full h-[530px] ml-2 p-4 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {messages
          .slice()
          .reverse()
          .map((c, index) => (
            <ChatMessages key={index} name={c.name} message={c.message} />
          ))}
      </div>
      <form
        className="w-full ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "You",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[362px] p-2 border border-gray-300 rounded-l-md focus:outline-none"
          type="text"
          value={liveMessage}
          placeholder="Type your message here..."
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
