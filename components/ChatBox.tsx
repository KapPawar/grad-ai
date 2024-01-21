import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { IoCreate } from "react-icons/io5";
import { motion, useAnimationControls } from "framer-motion";
import { Message, useChat } from "ai/react";
import { ChatRequestOptions } from "ai";
import ChatMessage from "./ChatMessage";

type ChatBoxProps = {
  open: boolean;
  onClose: () => void;
  messages: Message[];
  input: string;
  handleInputChange: (e: any) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  setMessages: (messages: Message[]) => void;
  isLoading: boolean;
  error: Error | undefined;
};

const ChatBox = ({
  open,
  onClose,
  messages,
  input,
  handleInputChange,
  handleSubmit,
  setMessages,
  isLoading,
  error,
}: ChatBoxProps) => {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween" },
    },
  };

  const controls = useAnimationControls();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <motion.div
      // variants={wrapperVariants}
      // initial="hidden"
      // animate={open ? "visible" : "hidden"}
      // className={
      //   open
      //     ? "fixed w-2/3 lg:w-1/2 h-auto top-14 bottom-5 px-2 lg:px-0 "
      //     : "hidden"
      // }
      className={
        open ? "w-full lg:w-2/3 h-full pb-20 md:pb-5 px-2 lg:px-0" : "hidden"
      }
    >
      <div className="h-full bg-gray-100 rounded-xl border-2 overflow-hidden border-gray-400/45">
        {/* <Button
          onClick={onClose}
          className="text-lg fixed text-gray-200/75 bg-transparent hover:bg-transparent"
        >
          <IoCreate />
        </Button> */}

        <div
          className="mt-3 h-full overflow-y-auto px-3 no-scrollbar pb-20 md:pb-20"
          ref={scrollRef}
        >
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Something went wrong. Pleas try again.",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex h-full items-center justify-center gap-3 text-gray-800 text-sm italic">
              Ask me anything about a career in tech...
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBox;
