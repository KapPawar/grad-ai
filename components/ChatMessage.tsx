import { useUser } from "@clerk/nextjs";
import { Message } from "ai";
import Image from "next/image";
import React from "react";

const ChatMessage = ({
  message: { role, content },
}: {
  message: Pick<Message, "role" | "content">;
}) => {
  const { user } = useUser();
  const isAIMessage = role === "assistant";
  return (
    <div className="flex flex-col gap-0">
      <div className="flex gap-2">
        {isAIMessage && (
          <div className="flex flex-row">
            <p className="text-sm font-extrabold text-gray-800">gradAI</p>
            <span className="text-sm font-extrabold text-sky-600">.</span>
          </div>
        )}
        {!isAIMessage && user?.imageUrl && (
          <>
            <Image
              src={user?.imageUrl}
              alt="userImage"
              width={25}
              height={25}
              className="rounded-full border border-gray-700"
            />
            <p className="text-gray-600 font-semibold ">You</p>
          </>
        )}
      </div>
      <div className="flex mx-6">
        <p className="text-sm font-medium bg-transparent text-gray-800 px-3 mb-7 rounded-md whitespace-break-spaces">
          {content === "Thinking..." ? (
            <div className="flex space-x-1 justify-center items-center bg-transparent mt-2 dark:invert">
              <span className="sr-only">Loading...</span>
              <div className="h-1 w-1 bg-gray-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-1 w-1 bg-gray-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-1 w-1 bg-gray-800 rounded-full animate-bounce"></div>
            </div>
          ) : (
            content
          )}
        </p>
      </div>
    </div>
    // <div className="flex items-center justify-start">
    //   {isAIMessage && <Bot className="mr-1 shrink-0" />}

    //   {!isAIMessage && user?.imageUrl && (
    //     <Image
    //       src={user?.imageUrl}
    //       alt="userImage"
    //       width={30}
    //       height={30}
    //       className="rounded-full border border-gray-200"
    //     />
    //   )}
    //   <p className="text-sm bg-transparent text-gray-200 px-3 py-3 rounded-md">
    //     {content}
    //   </p>
    // </div>
  );
};

export default ChatMessage;
