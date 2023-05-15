import React, { useEffect, useState, useRef, useContext } from "react";
import { uniqBy } from "lodash";
import Contact from "../Contact";
import { UserContext } from "../context/UserContext";
import Eletter from "../images/Eletter.png";
import Oletter from "../images/Oletter.png";
import Vector from "../images/i-Icon/Vector.svg";
import dots from "../images/dots.svg";
import avat from "../images/avat.svg";
import send from "../images/send.png";
import mic from "../images/mic.png";
import attach from "../images/attach.png";
import rPhoto from "../images/rPhoto.png";
import x from "../images/x.png";
import line from "../images/line.png";
import shutdown from "../images/shutdown.png";
import axios from "axios";
const Home = () => {
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeople] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { username, id, setId, setUsername } = useContext(UserContext);
  const [newMessageText, setNewMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const [offlinePeople, setOfflinePeople] = useState({});

  const divUnderMessages = useRef();

  useEffect(() => {
    connectToWs();
  }, [selectedUserId]);
  function connectToWs() {
    const ws = new WebSocket("ws://localhost:4040");
    setWs(ws);
    ws.addEventListener("message", handleMessage);
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect.");
        connectToWs();
      }, 1000);
    });
  }

  function showOnlinePeople(peopleArray) {
    const people = {};
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username;
    });
    setOnlinePeople(people);
  }
  function handleMessage(ev) {
    const messageData = JSON.parse(ev.data);
    console.log({ ev, messageData });
    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    } else if ("text" in messageData) {
      if (messageData.sender === selectedUserId) {
        setMessages((prev) => [...prev, { ...messageData }]);
      } else {
        // Add this else branch to update the state only if the received message is not from the selected user
        setMessages((prev) => [...prev, { ...messageData }]);
      }
    }
  }

  function sendMessage(ev) {
    ev.preventDefault();
    ws.send(
      JSON.stringify({
        recipient: selectedUserId,
        text: newMessageText,
      })
    );

    setNewMessageText("");
    setMessages((prev) => [
      ...prev,
      {
        text: newMessageText,
        sender: id,
        recipient: selectedUserId,
        _id: Date.now(),
      },
    ]);
  }

  function logout() {
    axios.post("/logout").then(() => {
      setWs(null);
      setId(null);
      setUsername(null);
    });
  }
  useEffect(() => {
    const div = divUnderMessages.current;
    if (div) {
      div.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  useEffect(() => {
    axios.get("/people").then((res) => {
      const offlinePeopleArr = res.data
        .filter((p) => p._id !== id)
        .filter((p) => !Object.keys(onlinePeople).includes(p._id));
      const offlinePeople = {};
      offlinePeopleArr.forEach((p) => {
        offlinePeople[p._id] = p;
      });
      setOfflinePeople(offlinePeople);
    });
  }, [onlinePeople]);

  useEffect(() => {
    if (selectedUserId) {
      axios.get("/messages/" + selectedUserId).then((res) => {
        setMessages(res.data);
      });
    }
  }, [selectedUserId]);

  const onlinePeopleExclOurUser = { ...onlinePeople };
  delete onlinePeopleExclOurUser[id];
  console.log({ onlinePeopleExclOurUser });

  const messagesWithoutDupes = uniqBy(messages, "_id");

  return (
    <div>
      <nav className="flex flex-row justify-between items-start px-4 py-3 gap-64 isolate absolute top-0 left-0 right-0 h-14 bg-white shadow-md">
        <div className="absolute left-[24px] top-[14.98px] bottom-[13.73px] mx-3">
          <img src={Eletter} alt="" />
        </div>
        <div className="absolute left-[24px] top-[14.98px] bottom-[13.73px] ">
          <img src={Oletter} alt="" />
        </div>

        <div className="absolute left-[72px] top-[12px] bottom-[12px] font-semibold font-plus-jakarta-sans text-xl text-light-text-title flex items-center">
          E-Message
        </div>

        <div className=" absolute left-[320px] top-[16px] bottom-[20px] text-sm text-light-text-primary items-center">
          <span className="font-bold"> Caesar</span>
          <span className="text-gray-400 ml-1 font-light">
            last seen 5 min ago
          </span>
        </div>

        <div
          onClick={logout}
          className="absolute cursor-pointer h-6 w-6 left-[1289.5px] top-[17.96px] bottom-[17.96px] bg-light-icon-action"
        >
          <img src={shutdown} alt="" />
        </div>
        <div className="absolute left-[1338.88px] top-[16px] bottom-[16px] bg-light-icon-action">
          <img src={dots} alt="" />
        </div>
        <div className="absolute left-[1372px] top-[0px] bottom-[0px]">
          <img src={avat} alt="" />
        </div>
      </nav>

      <div className="box-border flex flex-col items-end absolute  h-[637px] left-0 top-[57px] bottom-0  bg-white shadow-md border-r-1 border-primary-light shadow-right-elevated">
        <div className="bg-white w-[319px]">
          {Object.keys(onlinePeopleExclOurUser).map((userId) => (
            <Contact
              key={userId}
              id={userId}
              online={true}
              username={onlinePeopleExclOurUser[userId]}
              onClick={() => {
                setSelectedUserId(userId);
                console.log({ userId });
              }}
              selected={userId === selectedUserId}
            />
          ))}
          {Object.keys(offlinePeople).map((userId) => (
            <Contact
              key={userId}
              id={userId}
              online={false}
              username={offlinePeople[userId].username}
              onClick={() => setSelectedUserId(userId)}
              selected={userId === selectedUserId}
            />
          ))}
        </div>
        <div className="bg-white flex flex-col w-[920px] left-[320px] h-[525px] absolute   xl:max-w-[1200px]  z-20 px-4 lg:px-[35px] chat-container">
          <div className="flex-grow">
            {!selectedUserId && (
              <div className="flex h-full flex-grow items-center justify-center">
                <div className="text-gray-500">
                  &larr; Select a person from the sidebar
                </div>
              </div>
            )}
            {!!selectedUserId && (
              <div className="relative h-full">
                <div className="overflow-y-scroll absolute inset-0 ">
                  {messagesWithoutDupes.map((message) => (
                    <div
                      key={message._id}
                      className={
                        message.sender === id ? "text-right" : "text-left"
                      }
                    >
                      <div
                        className={
                          "text-left   inline-block mx-6 p-3 my-2  text-sm " +
                          (message.sender === id
                            ? "bg-green-500 rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl text-white"
                            : "bg-gray-500 rounded-tr-2xl rounded-br-2xl rounded-tl-2xl text-white")
                        }
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  <div ref={divUnderMessages}></div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!!selectedUserId && (
          <div className="flex absolute left-[480px] flex-col bottom-[60px] px-8 py-2 gap-8 w-[520px] h-[48px] rounded-tl-xl rounded-bl-0 rounded-tr-2xl border border-gray-300 outline-none">
            <form className="flex gap-2" onSubmit={sendMessage}>
              <input
                type="text"
                value={newMessageText}
                onChange={(ev) => setNewMessageText(ev.target.value)}
                placeholder="Type your message here"
                className="outline-none my-2"
              />
              <div class="absolute items-center right-0 top-[47px] py-3 w-[519px] h-[48px] rounded-tl-0 rounded-bl-xl rounded-tr-0 rounded-br-xl border bg-slate-100 border-gray-300 outline-none ">
                <img
                  className="absolute bottom-2 left-[10px]"
                  src={mic}
                  alt=""
                />
                <img
                  className="absolute bottom-2 left-[50px]"
                  src={attach}
                  alt=""
                />
                <button
                  type="submit"
                  className=" p-1 text-black rounded-sm absolute bottom-2 right-[20px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
        {!!selectedUserId && (
          <div className="bg-white absolute w-[280px] h-[637px] left-[1235px]  shadow-md border-r-1 border-primary-light shadow-right-elevated   xl:max-w-[280px] transition-all  z-20 px-4 lg:px-[35px]">
            <div className="flex box-border flex-row items-center p-0 ">
              <div className="absolute flex flex-row top-[16px] left-[24px]">
                <img src={rPhoto} alt="" />
                <div className="absolute top-0 justify-between left-[32px]  flex flex-row ">
                  Caeser
                </div>
                <div className="relative left-[200px]  text-gray-400`">
                  <img
                    className="cursor-pointer justify-center items-center flex fill-orange-600 "
                    src={x}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[56px] w-[232px]  items-center justify-center left-[24px]">
              <img src={line} alt="" />
            </div>
            <div class="absolute left-[24px] top-[73px] box-border flex flex-col items-start p-0  w-[232px] h-[48px]">
              <h1 className="font-bold">Username</h1>
              <p className="relative flex flex-col top-[8px]">@Caeser</p>
            </div>
            <div class="absolute left-[24px] top-[137px] box-border flex flex-col items-start p-0  w-[232px] h-[48px]">
              <h1 className="font-bold">Bio</h1>
              <p className="relative flex flex-col top-[8px]">
                I like talk shows
              </p>
            </div>
            <div className="absolute top-[201px] w-[232px] items-center justify-center left-[24px]">
              <img src={line} alt="" />
            </div>
            <div class="absolute flex flex-row left-[24px] items-center top-[218px] gap-[16px] w-[232px] h-[20px]">
              <p className="font-bold w-[188px]"> Notifications</p>
              <div class="relative inline-block top-2 w-8 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  for="toggle"
                  class="toggle-label block overflow-hidden h-4 rounded-full bg-blue-700 cursor-pointer"
                ></label>
              </div>
            </div>
            <div className="absolute top-[254px] w-[232px] items-center justify-center left-[24px]">
              <img src={line} alt="" />
            </div>
            <div class="text-blue-600 absolute left-[24px] top-[271px] box-border flex flex-col items-start p-0  w-[232px] h-[48px]">
              <p>Block User</p>
              <p className="relative flex flex-col top-[12px]">Clear History</p>
              <p className="relative flex flex-col top-[24px]">
                Delete Conversation{" "}
              </p>
            </div>
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default Home;
