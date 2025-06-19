"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Send } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import EmptyState from "../_components/EmptyState";
import { on } from "events";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams } from "next/navigation";

type messages = {
  content: string;
  role: string;
  type: string;
};

function AiChat() {
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [messageList, setMessageList] = useState<messages[]>([]);
  const { chatid } = useParams();
  console.log("chatid", chatid);

  const onSend = async () => {
    setLoading(true);
    setMessageList((prev) => [
      ...prev,
      {
        content: userInput,
        role: "user",
        type: "text",
      },
    ]);
    setUserInput("");
    const result = await axios.post("/api/ai-career-chat-agent", {
      userInput: userInput,
    });
    console.log(result.data);
    setMessageList((prev) => [...prev, result.data]);
    setLoading(false);
  };

  console.log("messageList", messageList);

  useEffect(() => {
    // Save message into Database
  }, [messageList]);

  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48 h-[75vh] overflow-auto">
      <div className="flex flex-center justify-between gap-8">
        <div>
          <h2 className="font-bold text-lg">AI Career Q/A Chat</h2>
          <p>
            Smarter career descisions start here - get tailored advice,
            real-time market insights.
          </p>
        </div>
        <Button>+ New Chat</Button>
      </div>
      <div className="flex flex-col h-[75vh]">
        <div className="mt-5">
          {messageList?.length <= 0 && (
            <EmptyState
              selectedQuestion={(question: string) => setUserInput(question)}
            />
          )}
        </div>
        <div className="flex-1">
          {messageList?.map((message, index) => (
            <div>
              <div
                key={index}
                className={`flex mb-2 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg gap-2 ${
                    message.role === "user"
                      ? "bg-gray-200 text-black rounded-lg"
                      : "bg-gray-50 text-black"
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
              {loading && messageList.length - 1 === index && (
                <div className="flex justify-start p-3 rounded-lg gap-2 bg-gray-50 text-black mb-2">
                  <LoaderCircle className="animate-spin" /> Thinking ...
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-6 absolute bottom-5 w-[50%]">
          {/* Input Field */}
          <Input
            placeholder="Type here"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button onClick={onSend} disabled={loading}>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AiChat;
