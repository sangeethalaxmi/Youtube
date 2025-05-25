import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [chatInput, setChatInput] = useState("");
  // pooling
  useEffect(() => {
    dispatch(
      addMessage({
        name: generateRandomName(),
        message: generateRandomText(20),
      })
    );
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
      <div className="ml-2 p-2 w-full max-w-[400px] h-[600px] border border-gray-300 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
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
        className="flex items-center gap-2 cursor-pointer ml-2 p-2 border border-gray-300 w-full max-w-[400px] rounded-lg border-t-0"
      >
        <img
          className="rounded-[50%] h-6 w-6"
          src="https://yt4.ggpht.com/ytc/AIdro_l1zU22StKNf871dicTQBDk4x19Yspedvo2dT3lgfSr6SUuLOsP9TA7e55SMaN_kxlqmQ=s32-c-k-c0x00ffffff-no-rj"
          alt="user"
        ></img>
        <input
          type="text"
          className="border border-gray-200 px-2 w-full rounded-full bg-gray-100 focus:border-gray-200 outline-none"
          placeholder="Chat..."
          value={chatInput}
          onChange={handleChange}
        ></input>
        {chatInput && (
          <button>
            <img
              className="w-5 h-5 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlgUm4VE-KgHJuuXG1E94m0Ah1X1w6c_1GA&s"
              alt="send"
            ></img>
          </button>
        )}
      </form>
    </>
  );
};

export default LiveChat;
