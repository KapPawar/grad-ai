"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";
import ChatBox from "./ChatBox";
import { useChat } from "ai/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Drawer from "./Drawer";
import { Textarea } from "./ui/textarea";

const Header = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat(); // /api/chat
  return (
    <section className=" h-full w-full flex flex-row items-start justify-center overflow-hidden">
      {/* <h2 className="text-2xl font-semibold text-gray-800">
        {chatBoxOpen ? "" : "How may I help you today?"}
      </h2> */}
      {openDrawer && <Drawer />}
      <div className="h-full flex items-center justify-center">
        <Button
          onClick={() => setOpenDrawer(!openDrawer)}
          className="hidden md:block bg-transparent hover:bg-transparent px-0"
        >
          {openDrawer ? (
            <ChevronLeft className="text-gray-800" />
          ) : (
            <ChevronRight className="text-gray-800" />
          )}
        </Button>
      </div>
      <div className="relative w-full h-full max-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 absolute bottom-7 flex flex-row items-center justify-center px-2"
        >
          <Input
            className="rounded-xl w-full bg-gray-100
          text-gray-800 placeholder:text-gray-950/75
          focus:!outline-none focus:!ring-0 border-2 border-gray-400/45 z-10  focus:!ring-offset-0 mx-2 lg:ml-0 placeholder:italic"
            placeholder="Give me a prompt..."
            onChange={handleInputChange}
            value={input}
          />
          {/* <div
            className="input-box rounded-xl w-full text-sm bg-gray-100 min-h-10
            text-gray-800 placeholder:text-gray-950/75
            focus:!outline-none focus:!ring-0 border-2 border-gray-400/45 z-10  focus:!ring-offset-0 mx-3 px-3 pt-2 placeholder:italic"
            contentEditable="true"
            data-text="Give me a prompt..."
            onChange={handleInputChange}
            value={input}
          ></div> */}
          {/* <textarea
            rows={2}
            className="rounded-full w-full bg-gray-100 min-h-[30px]
          text-gray-800 placeholder:text-gray-950/75
          focus:!outline-none focus:!ring-0 border-2 border-gray-400/45 z-10 focus:!ring-offset-0 mx-2 placeholder:italic text-sm pl-3 no-scrollbar resize-y pt-3"
            placeholder="Give me a prompt..."
            onChange={handleInputChange}
            value={input}
          /> */}
          <Button
            type="submit"
            className={`focus:!outline-none focus:!ring-0 focus:!ring-offset-0 group text-2xl font-bold rounded-full z-10 hover:bg-transparent bg-transparent overflow-hidden -ml-4 ${
              chatBoxOpen ? "" : "text-gray-800"
            }}`}
          >
            <BsArrowRight className="group-hover:translate-x-1 text-gray-800/70  transition-all" />
          </Button>
        </form>

        <ChatBox
          open={true}
          onClose={() => setChatBoxOpen(false)}
          messages={messages}
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setMessages={setMessages}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </section>
  );
};

export default Header;
