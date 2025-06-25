import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";
import Icons from "./Icons";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [chatInput, setChatInput] = useState("");
  // pooling
  useEffect(() => {
    // api pooling calling api every 1000 seconds to generate live chat
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(20),
        })
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleChange = (e) => {
    if (e.target.value.trim() !== "") {
      setChatInput(e.target.value);
    }
  };
  return (
    <>
      <div className="ml-2 p-2 w-[95%]  h-[600px]  text-textPrimary overflow-y-scroll flex flex-col-reverse">
        {messages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!chatInput) return false;
          dispatch(
            addMessage({ name: generateRandomName(), message: chatInput })
          );
          setChatInput("");
        }}
        className="flex items-center gap-2  w-[95%] cursor-pointer ml-2 p-2 border border-gray-300   rounded-lg "
      >
        <img
          className="rounded-[50%] h-6 w-6"
          src="https://yt4.ggpht.com/ytc/AIdro_l1zU22StKNf871dicTQBDk4x19Yspedvo2dT3lgfSr6SUuLOsP9TA7e55SMaN_kxlqmQ=s32-c-k-c0x00ffffff-no-rj"
          alt="user"
        ></img>
        <input
          type="text"
          className="border border-textSecondary px-2 w-full rounded-full bg-tertiary focus:border-textSecondary outline-none"
          placeholder="Chat..."
          value={chatInput}
          onChange={handleChange}
        ></input>
        {chatInput && (
          <button>
            <Icons name="send" size={24} />
          </button>
        )}
      </form>
    </>
  );
};

export default LiveChat;
