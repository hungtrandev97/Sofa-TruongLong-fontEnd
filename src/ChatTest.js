import React, { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;
export default function ChatTest() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPONT = "localhost:4000";
  useEffect(() => {
    setName("hung");
    setRoom("chat");
    socket = io("http://localhost:4000");
    console.log(socket);
    socket.emit("join", { name, room });
  });
  return (
    <>
      <h1>Chat</h1>
    </>
  );
}
