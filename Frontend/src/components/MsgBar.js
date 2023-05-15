// import React, { useState, useContext } from "react";
// import Photo from "../images/Photo.png";
// import Vector from "../images/Vector.png";
// import Right from "./Right";
// import Chatt from "./Chatt";

// import { SidebarContext } from "../context/SidebarContext";

// function MsgBar() {
//   const [showRight, setShowRight] = useState(false);
//   const [showChatt, setShowChatt] = useState(false);
//   const { Open, setOpen } = useContext(SidebarContext);

//   function handleMsgClick() {
//     setShowRight(true);
//     setShowChatt(true);
//   }

//   return (
//     <div>
//       <div className="box-border flex flex-col items-end absolute w-[319px] h-[650px] left-0 top-[57px] bottom-0  bg-white shadow-md border-r-1 border-primary-light shadow-right-elevated">
//         <input
//           className="absolute block w-[271px] h-[32px] top-[12px] right-[24px] rounded-lg pl-10 pr-3 py-2 text-sm border-primary-light shadow-right-elevated border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light focus:z-10 sm:text-sm sm:leading-5"
//           type="text"
//           placeholder="Search"
//         />
//         <div
//           name="chat"
//           className="absolute flex flex-row items-start top-[68px] left-[25px] w-[319px] h-[74px]"
//           onClick={handleMsgClick}
//         >
//           <div className="cursor-pointer " onClick={() => setOpen(!Open)}>
//             <div className="h-[40px] w-[40px]">
//               <img src={Photo} alt="" />
//             </div>
//           </div>

//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       {showRight && showChatt && (
//         <>
//           <Right />
//           <Chatt />
//         </>
//       )}
//     </div>
//   );
// }

// export default MsgBar;

// ***************************************************************************************************************
// ***************************************************************************************************************
// import React, { useState, useContext } from "react";
// import Photo from "../images/Photo.png";
// import Vector from "../images/Vector.png";
// import Right from "./Right";
// import Chatt from "./Chatt";

// import { SidebarContext } from "../context/SidebarContext";

// import { Link } from "react-router-dom";

// function MsgBar() {
//   const [showRight, setShowRight] = useState(false);
//   const { Open, setOpen } = useContext(SidebarContext);
//   // const [Openn, setOpenn] = useContext(ChattContext);

//   function handleMsgClick() {
//     setShowRight(true);
//   }
//   return (
//     <div>
//       <div className="box-border flex flex-col items-end absolute w-[319px] h-[800px] left-0 top-[57px] bottom-0  bg-white shadow-md border-r-1 border-primary-light shadow-right-elevated">
//         <input
//           className="absolute block w-[271px] h-[32px] top-[12px] right-[24px] rounded-lg pl-10 pr-3 py-2 text-sm border-primary-light shadow-right-elevated border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light focus:z-10 sm:text-sm sm:leading-5"
//           type="text"
//           placeholder="Search"
//         />
//         <div
//           name="chat"
//           className="absolute flex flex-row items-start top-[68px] left-[25px] w-[319px] h-[74px]"
//           onClick={handleMsgClick}
//         >
//           <div className="cursor-pointer " onClick={() => setOpen(!Open)}>
//             <div className="h-[40px] w-[40px]">
//               <img src={Photo} alt="" />
//             </div>
//           </div>

//           {/* <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div> */}
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* <div
//         className="container mx-auto flex
//     justify-between items-center h-12 px-4"
//       >
//         <Link to={"/"}>
//           <div>
//             <img className="w-[80px] text-white" src={Logo} alt="" />
//           </div>
//         </Link>
//         <div className="text-white">Header</div>
//         <div
//           className="cursor-pointer flex relative max-w-[50px"
//           onClick={() => setOpen(!Open)}
//         >
//           <AiOutlineShoppingCart className="w-6 h-6   " />
//           <div
//             className="bg-orange-500 absolute -right-2 -bottom-2 text-[12px]
//         w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"
//           >
//             {itemAmount}
//           </div>
//         </div>
//       </div> */}
//       </div>
//       {showRight && <Right />}
//     </div>
//   );
// }
// export default MsgBar;

// =======================================================================================================================
// {/* <div className="absolute flex flex-row items-start top-[142px] left-[25px] w-[319px] h-[74px]">
//           <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div>
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* ===================================================================================================================== */}
//         <div className="absolute flex flex-row items-start top-[216px] left-[25px] w-[319px] h-[74px]">
//           <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div>
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* =============================================================================================================== */}
//         <div className="absolute flex flex-row items-start top-[290px] left-[25px] w-[319px] h-[74px]">
//           <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div>
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* =============================================================================================================== */}
//         <div className="absolute flex flex-row items-start top-[364px] left-[25px] w-[319px] h-[74px]">
//           <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div>
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* ============================================================================================================= */}
//         <div className="absolute flex flex-row items-start top-[438px] left-[25px] w-[319px] h-[74px]">
//           <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div>
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* =========================================================================================================== */}
//         <div className="absolute flex flex-row items-start top-[512px] left-[25px] w-[319px] h-[74px]">
//           <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div>
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//         {/* ============================================================================================================= */}
//         <div className="absolute flex flex-row items-start top-[586px] left-[25px] w-[319px] h-[74px]">
//           <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div>
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div> */}
{
  /* <div className="flex flex-row items-start p-4  gap-2 w-[319px] h-[74px]">
          <div className="absolute h-[40px] w-[40px] top-[68px] left-[25px]">
            <img src={Photo} alt="" />
          </div>
          <div className="absolute left-[73px] h-[40px] w-[40px] top-[68px]">
            <h1>Zackfox</h1>
          </div>
        </div> */
}

// ==================================================================================================================================
// export default MsgBar;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Photo from "../images/Photo.png";
// import Vector from "../images/Vector.png";
// import Chatt from "./Chatt";
// import Right from "./Right";

// function MsgBar() {
//   const [showChatt, setShowChatt] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     setShowChatt(true);
//     navigate("/Right");
//   };

//   return (
//     <div>
//       <div className="box-border flex flex-col items-end absolute w-[319px] h-[800px] left-0 top-[57px] bottom-0  bg-white shadow-md border-r-1 border-primary-light shadow-right-elevated">
//         <input
//           className="absolute block w-[271px] h-[32px] top-[12px] right-[24px] rounded-lg pl-10 pr-3 py-2 text-sm border-primary-light shadow-right-elevated border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light focus:z-10 sm:text-sm sm:leading-5"
//           type="text"
//           placeholder="Search"
//         />
//         <div
//           onClick={handleClick}
//           className="flex flex-row items-start top-[68px] left-[25px] w-[319px] h-[74px]"
//         >
//           <div className="h-[40px] w-[40px]">
//             <img src={Photo} alt="" />
//           </div>
//           <div className="relative justify-between left-[8px]  flex flex-row ">
//             <div className="font-bold">
//               <h1>Zackfox</h1>
//             </div>
//             <div className="relative left-[111px] text-sm text-gray-400">
//               <p>10:49 AM</p>
//             </div>
//           </div>

//           {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}
//           <div className="absolute top-[20px] left-[48px] flex flex-row ">
//             <div className="text-sm text-gray-400">
//               <p>Have you ever heard of...</p>
//             </div>
//             <div className="relative h-[16.63px] w-[16.64px] left-[52px] text-sm text-gray-400">
//               <img src={Vector} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       {showChatt && <Right />}
//     </div>
//   );
// }
