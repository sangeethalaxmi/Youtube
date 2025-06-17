import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 shadow-md p-2 w-full">
      <img
        className="rounded-[50%] h-6 w-6"
        src="https://yt4.ggpht.com/ytc/AIdro_l1zU22StKNf871dicTQBDk4x19Yspedvo2dT3lgfSr6SUuLOsP9TA7e55SMaN_kxlqmQ=s32-c-k-c0x00ffffff-no-rj"
        alt="user"
        loading="lazy"
      ></img>
      <span className="font-semibold">{name}</span>
      <p className="break-words overflow-hidden whitespace-normal">{message}</p>
    </div>
  );
};

export default ChatMessage;
