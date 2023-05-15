// import React, { useContext } from "react";
// import send from "../images/send.png";
// import mic from "../images/mic.png";
// import attach from "../images/attach.png";

// import { SidebarContext } from "../context/SidebarContext";

// function Chatt() {
//   const { Open, setOpen } = useContext(SidebarContext);

//   return (
//     <div>
//       <div
//         className={`fixed top-[57px] ${
//           Open ? "right-0" : "-right-full"
//         } bg-white w-[1178px] h-[764px] shadow-md border-r-1 border-primary-light shadow-right-elevated  xl:max-w-[1200px] transition-all z-20 px-4 lg:px-[35px] chat-container`}
//         style={{ overflowY: "scroll" }}
//       >
//         {/* chat content */}

//         {/* // "box-border absolute w-[1120px] h-[800px] left-[320px] top-[57px] bottom-0  bg-white " */}

//         {/* <div className="absolute flex top-[8px] text-green-500 left-[144px] items-center font-medium font-plus-jakarta-sans text-base ">
//           Caeser */}
//         {/* <div
//             className="flex absolute flex-row top-[34px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl  items-center bg-slate-100 p-4 w-[420px] h-[40px]"
//             style={{ maxWidth: "490px", wordWrap: "break-word" }}
//           >
//             <p className="text-gray-800 font-light">
//               lad like you. There must be some special food you like
//             </p>
//           </div>
//           {/* <div className="absolute text-[12px] box-border font-light top-[92px] text-slate-400 items-center font-sm font-plus-jakarta-sans text-base">
//             10:36 PM
//           </div> */}
//         {/* <div
//             className="absolute  text-[12px] box-border  font-light top-[92px] text-slate-400 items-center font-sm font-plus-jakarta-sans text-base"
//             style={{ whiteSpace: "nowrap" }}
//           >
//             10:36 PM
//           </div> */}
//         {/* </div> */}
//         {/* ============================================================================================================================================== */}
//         {/* <div
//           className="flex absolute flex-col top-[132px] font-light left-[144px] p-4  h-[56px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl  bg-slate-100"
//           style={{
//             maxWidth: "490px",
//             maxHeight: "none",
//             height: "auto",
//             wordWrap: "break-word",
//           }}
//         >
//           Come on, what’s the name?Come on, what’s the name?Come on, what’s the
//           name?Come on, what’s the name?vvvvCome on, what’s the name?
//         </div>

//         <div className="absolute text-[12px] box-border left-[144px] font-light top-[190px] text-slate-400 items-center font-sm font-plus-jakarta-sans text-base">
//           10:36 PM
//         </div> */}
//         {/* ================================================================================================================================================== */}
//         {/* <div
//           className="flex absolute flex-col p-3 left-[280px] font-light top-[230px]  h-[104px] rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl  shadow-sm  border bg-blue-100 "
//           style={{
//             maxWidth: "490px",
//             maxHeight: "none",
//             height: "auto",
//             wordWrap: "break-word",
//           }}
//         >
//           Well, there is this one dish. I’ve had a on ever since I can remember.
//           But I’m pretty sure didn’t know I was alive until the reaping. Well,
//           there is this one dish. I’ve had a on ever since I can remember. But
//           I’m pretty sure didn’t know I was alive until the reaping.
//           <div className="relative text-[12px] box-border font-light text-slate-400 items-center font-sm font-plus-jakarta-sans text-base">
//             10:36 PM
//           </div>
//         </div> */}

//         {/* ======================================================================================================================================================= */}
//         {/* <div className="flex absolute flex-row justify-center text-white left-[385px] font-light text-sm top-[376px] border bg-gray-400 items-center rounded-full gap-4 p-2 md:p-8 w-[70px] h-[24px]">
//           4 march
//         </div> */}
//         {/* ======================================================================================================================================================= */}
//         {/* <div className="absolute flex top-[300px] text-green-500 left-[144px] items-center font-medium font-plus-jakarta-sans text-base ">
//           Caeser
//           <div
//             className="flex absolute flex-row top-[30px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl  items-center bg-slate-100 p-4 w-[420px] "
//             style={{
//               maxWidth: "490px",
//               maxHeight: "none",
//               height: "auto",
//               wordWrap: "break-word",
//             }}
//           >
//             <p className="text-gray-800 font-light">
//               lad like you. There must be some special food you like lad like
//               you. There must be some special food you like lad like you. There
//               must be some special food you like lad like you. There must be
//               some special food you like
//             </p>
//           </div>
//           <div className="absolute text-[12px] box-border font-light top-[80px] text-slate-400 items-center font-sm font-plus-jakarta-sans text-base">
//             10:36 PM
//           </div> */}
//         <div className="absolute items-start flex flex-col top-[280px] text-green-500 left-[144px]  font-medium font-plus-jakarta-sans text-base ">
//           Caeser
//           <div
//             className="relative flex top-[5px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-slate-100 p-4 w-[420px] max-w-full"
//             style={{
//               overflowWrap: "break-word",
//             }}
//           >
//             <p className="text-gray-800 font-light">
//               lad like you. There must be some special food you like lad like
//               you.
//             </p>
//             <div className="absolute bottom-[-20px] left-2 right-0 text-[12px] box-border font-light text-slate-400">
//               10:36 PM
//             </div>
//           </div>
//         </div>

//         {/* ========================================================================================================================================================================== */}

//         <div
//           className="relative flex top-[420px] left-[280px] rounded-tl-2xl rounded-br-2xl rounded-bl-2xl border bg-blue-100 p-4 w-[420px] max-w-full"
//           style={{
//             overflowWrap: "break-word",
//           }}
//         >
//           <p className="text-gray-800 font-light">
//             lad like you. There must be some special food...............lad like
//             you.
//           </p>
//           <div className="absolute bottom-[-20px]  right-[10px] text-[12px] box-border font-light text-slate-400">
//             10:36 PM
//           </div>
//         </div>
//         {/* <div>
//           <div
//             className="flex absolute flex-col p-3 left-[280px] font-light bottom-[260px] rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl  shadow-sm  border bg-blue-100 "
//             style={{
//               maxWidth: "490px",
//               maxHeight: "none",
//               height: "auto",
//               wordWrap: "break-word",
//             }}
//           >
//             I don’t know, but a lot of people like it. I don’t know, but a lot
//             of people like it . I don’t know, but a lot of people like it
//           </div>
//           <div className="absolute text-[12px] box-border left-[714px] font-light bottom-[230px] text-slate-400 items-center font-sm font-plus-jakarta-sans text-base">
//             10:36 PM
//           </div>
//         </div> */}
//         {/* ======================================================================================================================= */}
//         <div class="flex absolute left-[160px] flex-col bottom-[180px] px-8 py-2 gap-8 w-[520px] h-[48px] rounded-tl-xl rounded-bl-0 rounded-tr-2xl border border-gray-300 outline-none">
//           <input
//             className=" outline-none"
//             type="text"
//             placeholder="Write message..."
//           />
//   <div class="absolute items-center right-0 top-[47px] py-3 w-[519px] h-[48px] rounded-tl-0 rounded-bl-xl rounded-tr-0 rounded-br-xl border bg-slate-100 border-gray-300 outline-none ">
//     <img className="absolute bottom-2 left-[10px]" src={mic} alt="" />
//     <img
//       className="absolute bottom-2 left-[50px]"
//       src={attach}
//       alt=""
//     />
//     <img className="absolute bottom-2 right-[20px]" src={send} alt="" />
//   </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chatt;
