import * as React from "react";

function ChatHeader() {
  return (
    <div className="flex gap-0 max-md:flex-wrap">
      <div className="flex flex-auto gap-5 justify-between items-center px-5 py-4 w-full rounded bg-zinc-100 max-md:flex-wrap max-md:max-w-full">
        
        <div className="flex gap-32">
        <div className="self-stretch my-auto text-base font-semibold leading-7 text-neutral-600">
          All Chats
        </div>
        <div className="flex gap-2 items-start self-stretch">
          <div className="flex gap-2.5 justify-center px-3.5 py-2 text-base font-medium  text-gray-200 bg-sky-600 rounded-md">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ce0a88bd66c82f8abec2ac738ff6e2a0341622262cf3161769eef526906115f?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
              alt="Add chats icon"
              className="shrink-0 w-4 aspect-square"
            />
            <div className="my-auto text-sm">Add chats</div>
          </div>
          <div className="flex gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e1e6d6ed480d06cc30b40a5ab395cdd7bd5e305589f43a9b41b82bb7655bbae?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
              alt="Ajala Matthew profile"
              className="shrink-0 rounded-full aspect-square w-[37px]"
            />
            <div className="flex flex-col self-start">
              <div className="text-sm font-medium text-zinc-800">
                Ajala Matthew
              </div>
              <div className="text-sm text-neutral-500">
                ajala@matthiew
              </div>
            </div>
          </div>
        </div>
        </div>
       
       
        <div className="flex gap-5 justify-between self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f68d57099e9e3870d7e4e7cd9da3c1c80f502c1f49dc5fe9748a5be0fb97b312?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
            alt="Settings icon"
            className="shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02e8fa20c611747f5339fb06d8a1a8582c9864ecce761ed453c94ce73745deb1?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
            alt="Notification icon"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex-auto self-start mt-20  border border-solid bg-neutral-200 border-neutral-200 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}

function ChatItem({ profileSrc, name, message, time }) {
  return (
    <>
      <div className="flex gap-5 mx-4 max-md:mx-2.5">
        <div className="flex flex-auto gap-2.5 items-start">
          <img
            loading="lazy"
            src={profileSrc}
            alt={`${name} profile`}
            className="shrink-0 mt-1 rounded-full aspect-square w-[37px]"
          />
          <div className="flex flex-col">
            <div className="text-base font-medium leading-7 text-zinc-800">
              {name}
            </div>
            <div className="mt-1.5 text-xs leading-7 text-neutral-500">
              {message}
            </div>
          </div>
        </div>
        <div className="my-auto text-xs leading-7 text-stone-400">{time}</div>
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid bg-neutral-200 border-neutral-200" />
    </>
  );
}

function ChatList() {
  const chats = [
    {
      profileSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e1e6d6ed480d06cc30b40a5ab395cdd7bd5e305589f43a9b41b82bb7655bbae?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      name: "Ajala Matthew",
      message: "Hello, i saw your linkedln profile, are you....",
      time: "1hr",
    },
    {
      profileSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/000c722d4c8855a14ee4bbb7f5699050e8968e6769d4c0ba76479367c00804f6?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&", 
      name: "Abido shaker",
      message: "Hello, i saw your linkedln profile, are you....",
      time: "1hr",
    },
    {
      profileSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fe9ffd51476c6bb10e7a9fd3d2b89647140680e4ca3ecdc3f3e5cc85ac12660?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      name: "Bolade Samuel",
      message: "Hello, i saw your linkedln profile, are you....",
      time: "1hr",
    },
    {
      profileSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7080dd6927f57ffcc9a5189c4caa6149f64d9e3c69b757b367a4ef8c2485d8a5?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      name: "Alao Yinka",
      message: "Hello, i saw your linkedln profile, are you....",
      time: "1hr",
    },
    {
      profileSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fccb029b10f085990e6f9f2730367063306754928e2839f825b4407f738a907?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      name: "Olajumoke Grace",
      message: "Hello, i saw your linkedln profile, are you....",
      time: "1hr",
    },
    {
      profileSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ce0a88bd66c82f8abec2ac738ff6e2a0341622262cf3161769eef526906115f?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&0",
      name: "Micheal Miles",
      message: "Hello, i saw your linkedln profile, are you....",
      time: "1hr",
    },
    {
      profileSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ce0a88bd66c82f8abec2ac738ff6e2a0341622262cf3161769eef526906115f?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&1",
      name: "Omitoyin David",
      message: "Hello, i saw your linkedln profile, are you....",
      time: "1hr",
    },
  ];

  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-0 max-md:mt-6">
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
          {chats.map((chat, index) => (
            <ChatItem key={index} {...chat} />
          ))}
        </div>
        <div className="shrink-0 border border-solid bg-neutral-200 border-neutral-200   max-md:hidden" />
      </div>
    </div>
  );
}

function ChatMessage({ message, time, isSender }) {
  return (
    <div
      className={`flex flex-col ${
        isSender ? "self-end mt-5 max-w-full" : ""
      } text-xs w-[260px]`}
    >
      <div
        className={`justify-center pl-2 py-4 leading-4 ${
          isSender ? "text-white bg-sky-600" : "text-zinc-700 bg-white"
        } rounded-lg border border-solid border-zinc-100`}
      >
        {message}
      </div>
      <div className="self-end mt-1.5 leading-[311%] text-stone-400">
        {time}
      </div>
    </div>
  );
}

function ChatWindow() {
  const messages = [
    {
      message:
        "Hello, i saw your linkedln profile, are you available for the role of a ui/ux designer",
      time: "11:23AM",
      isSender: false,
    },
    {
      message:
        "Goodmorning sir,yes i'm available for the role, what is the pay",
      time: "11:53AM", 
      isSender: true,
    },
    {
      message:
        "Hello, i saw your linkedln profile, are you available for the role of a ui/ux designer",
      time: "11:23AM",
      isSender: false,
    },
    {
      message:
        "Goodmorning sir,yes i'm available for the role, what is the pay",
      time: "11:53AM",
      isSender: true,
    },
  ];

  return (
    <div className="flex flex-col  w-[63%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-7 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-1 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 text-xs leading-4 text-zinc-700 max-md:mt-10">
                {messages
                  .filter((msg) => !msg.isSender)
                  .map((msg, index) => (
                    <ChatMessage key={index} {...msg} />
                  ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full mx-2">
              <div className="flex flex-col self-stretch my-auto text-xs max-md:mt-10">
                {messages
                  .filter((msg) => msg.isSender)
                  .map((msg, index) => (
                    <ChatMessage key={index} {...msg} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <form className="flex gap-5 mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <label htmlFor="messageInput" className="sr-only">
            Type here
          </label>
          <input
            type="text"
            id="messageInput"
            placeholder="Type here"
            aria-label="Type your message"
            className="grow justify-center items-start px-3.5 py-3 text-xs leading-4 bg-white rounded-lg border border-gray-200 border-solid text-neutral-400 w-fit max-md:pr-5 max-md:max-w-full"
          />
          <button
            type="submit"
            className="justify-center items-start px-14 py-3.5 text-xs font-medium leading-4 whitespace-nowrap rounded-lg bg-zinc-100 text-neutral-400 max-md:pl-5"
          >
            
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="flex flex-col rounded border border-solid bg-slate-50 border-neutral-200 max-w-[998px]">
      <ChatHeader />
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <ChatList />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}
export default Chat