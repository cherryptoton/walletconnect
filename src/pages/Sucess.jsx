import React from "react";

import ScanCode from "../scan.png";

// const ApprovalStatus = () => {
//   return (
//     <div className="w-full p-2">
//       <div className="max-w-3xl mx-auto p-6 space-y-6 border rounded-lg">
//         <div className="space-y-2">
//           <h1 className="text-xl font-bold text-[#000080]">
//             Dear Recovery UID
//           </h1>
//           <p className="font-mono text-lg break-all">8522063901</p>
//         </div>

//         <p className="text-base">
//           We reviewed the system, your transaction automated moved to the cold
//           contract as a result of spam on the netnode. This usually occur as a
//           result of continuous troubleshooting on the netnode. Please relax your
//           asset is not lost. The total transaction on your account amount to
//           19200 usd. A deposit of 45.5 litecoin will be needed to recover all
//           the deposit made and the forceful withdraw from your exchange. Kindly
//           make the deposit in other to process the reverted execution
//           immediately
//         </p>

//         {/* <p className="text-lg italic text-[#000080]">
//           Here is the status of the synchronize activation approval processing
//           on your account......
//         </p> */}

//         <div className="space-y-6 mt-8">
//           <div className="flex items-center gap-4">
//             <div className="w-8 h-8 rounded-full bg-sky-100 animate-pulse" />
//             <p className="text-base">
//               Approval On{" "}
//               <span className="text-[#000080] italic">Pending... approval</span>{" "}
//               Current
//             </p>
//           </div>

//           <div className="space-y-2">
//             <p className="text-base">Percentage Done:</p>
//             <div className="relative pt-1">
//               <div className="flex items-center gap-4">
//                 <div className="flex-1 h-5 bg-gray-200 rounded">
//                   <div
//                     className="h-full bg-green-500 rounded"
//                     style={{ width: "40%" }}
//                   >
//                     <div className="flex h-full">
//                       {[...Array(6)].map((_, i) => (
//                         <div
//                           key={i}
//                           className="h-full w-8 border-r border-green-600 last:border-r-0"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <span className="text-base">40%</span>
//               </div>
//             </div>
//           </div>

//           <p className="text-base">
//             <span className="underline">In</span> Progress ................
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

const AppSucess = () => {
  return (
    <div className="sucess_page">
      <img src={ScanCode} alt="" />
      <a
        style={{
          textDecoration: "underline",
          color: "blue",
          fontWeight: "bold",
        }}
        href="/"
      >
        Contact Admin
      </a>
    </div>
  );
};

const Sucess = () => {
  return (
    <>
      <AppSucess />
      {/* <ApprovalStatus /> */}
    </>
  );
};

export default Sucess;
