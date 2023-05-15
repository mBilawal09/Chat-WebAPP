// import React, { useContext } from "react";
// import rPhoto from "../images/rPhoto.png";
// import x from "../images/x.png";
// import line from "../images/line.png";
// import { SidebarContext } from "../context/SidebarContext";

// function Right() {
//   const { Open, handleClose } = useContext(SidebarContext);

//   // const [Open, setOpen] = useState(true);

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

//   return (
//     <div
//       className={`fixed top-[57px] ${
//         Open ? "right-0" : "-right-full"
//       }  bg-white w-[280px] h-[650px]  shadow-md border-r-1 border-primary-light shadow-right-elevated   xl:max-w-[280px] transition-all  z-20 px-4 lg:px-[35px] `}
//     >
//       <div className="flex box-border flex-row items-center p-0 ">
//         <div className="absolute flex flex-row top-[16px] left-[24px]">
//           <img src={rPhoto} alt="" />
//           <div className="absolute top-0 justify-between left-[32px]  flex flex-row ">
//             Caeser
//           </div>
//           <div
//             className={`${
//               Open ? "right-0" : "-right-full"
//             } relative left-[200px]  text-gray-400`}
//           >
//             <img
//               onClick={handleClose}
//               className="cursor-pointer justify-center items-center flex fill-orange-600 "
//               src={x}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[56px] w-[232px] items-center justify-center left-[24px]">
//         <img src={line} alt="" />
//       </div>
//       <div class="absolute left-[24px] top-[73px] box-border flex flex-col items-start p-0  w-[232px] h-[48px]">
//         <h1 className="font-bold">Username</h1>
//         <p className="relative flex flex-col top-[8px]">@Caeser</p>
//       </div>
//       <div class="absolute left-[24px] top-[137px] box-border flex flex-col items-start p-0  w-[232px] h-[48px]">
//         <h1 className="font-bold">Bio</h1>
//         <p className="relative flex flex-col top-[8px]">I like talk shows</p>
//       </div>
//       <div className="absolute top-[201px] w-[232px] items-center justify-center left-[24px]">
//         <img src={line} alt="" />
//       </div>
//       <div class="absolute flex flex-row left-[24px] items-center top-[218px] gap-[16px] w-[232px] h-[20px]">
//         <p className="font-bold w-[188px]"> Notifications</p>
//         <div class="relative inline-block top-2 w-8 mr-2 align-middle select-none transition duration-200 ease-in">
//           <input
//             type="checkbox"
//             name="toggle"
//             id="toggle"
//             class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer"
//           />
//           <label
//             for="toggle"
//             class="toggle-label block overflow-hidden h-4 rounded-full bg-blue-700 cursor-pointer"
//           ></label>
//         </div>
//       </div>
//       <div className="absolute top-[254px] w-[232px] items-center justify-center left-[24px]">
//         <img src={line} alt="" />
//       </div>
//       <div class="text-blue-600 absolute left-[24px] top-[271px] box-border flex flex-col items-start p-0  w-[232px] h-[48px]">
//         <p>Block User</p>
//         <p className="relative flex flex-col top-[12px]">Clear History</p>
//         <p className="relative flex flex-col top-[24px]">
//           Delete Conversation{" "}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Right;
