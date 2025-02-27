import { useState } from "react";
import { demoFilesData } from "../../lib/constants";
import { FileItemPropT } from "../../lib/types";

interface DirectorySectionPropT {
  workspaceTitle: string;
}

export default function DirectorySection(props: DirectorySectionPropT) {
  return (
    <section className="group">
      <div className="text-xs py-3 px-4 font-medium uppercase text-neutral-400">
        explorer
      </div>
      <div className="text-xs border-neutral-800 bg-[#171a20] border-y pl-4 font-medium uppercase text-neutral-400 flex items-center justify-between">
        <span>{props.workspaceTitle}</span>
        <div>
          <button className="p-2 hover:bg-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-4 fill-none text-neutral-400"
            >
              <path
                d="M4 12.0005L4 14.5446C4 17.7896 4 19.4122 4.88607 20.5111C5.06508 20.7331 5.26731 20.9354 5.48933 21.1144C6.58831 22.0005 8.21082 22.0005 11.4558 22.0005C12.1614 22.0005 12.5141 22.0005 12.8372 21.8865C12.9044 21.8627 12.9702 21.8355 13.0345 21.8047C13.3436 21.6569 13.593 21.4075 14.0919 20.9086L18.8284 16.172C19.4065 15.594 19.6955 15.3049 19.8478 14.9374C20 14.5699 20 14.1611 20 13.3436V10.0005C20 6.22922 20 4.34361 18.8284 3.17203C17.7693 2.11287 16.1265 2.01125 13.0345 2.0015M13 21.5005V21.0005C13 18.172 13 16.7578 13.8787 15.8791C14.7574 15.0005 16.1716 15.0005 19 15.0005H19.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5.99954H4M8 1.99954V9.99954"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 py-2">
        {demoFilesData.map((file, idx) => (
          <FileItem key={idx} {...file} />
        ))}
      </div>
    </section>
  );
}

function FileItem(props: FileItemPropT) {
  const [editing, setEditing] = useState(false);
  const [filepath, setFilePath] = useState(props.filepath);

  const handleSubmit = function(){
    try {
      setEditing(false);
    } catch (error) {
      console.error(`Some error occured: ${error}`);
    }
  }

  return (
    <button
      data-expanded={"false"}
      className="flex border px-2 py-0.5 border-transparent focus:border-blue-950 gap-x-2 items-center data-[expanded='true']:bg-[#171b24] hover:bg-[#171b24]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-4 fill-none text-neutral-300"
      >
        <path
          d="M8 7L16 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11L12 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 21.5V21C13 18.1716 13 16.7574 13.8787 15.8787C14.7574 15 16.1716 15 19 15H19.5M20 13.3431V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22877 2 6.34315 2 5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14.5442C4 17.7892 4 19.4117 4.88607 20.5107C5.06508 20.7327 5.26731 20.9349 5.48933 21.1139C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.886C12.9044 21.8623 12.9702 21.835 13.0345 21.8043C13.3436 21.6564 13.593 21.407 14.0919 20.9081L18.8284 16.1716C19.4065 15.5935 19.6955 15.3045 19.8478 14.9369C20 14.5694 20 14.1606 20 13.3431Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {editing ? <input onBlur={handleSubmit} value={filepath} onChange={(e)=>setFilePath(e.target.value)} autoFocus onKeyDown={(e)=>{
        if(e.key === "Enter") handleSubmit()
      }} className="h-5 focus:outline-none text-[13px] border-b border-neutral-500"/> :(<span onDoubleClick={()=>setEditing(!editing)} className="text-neutral-200 text-[13px]">{filepath}</span>)}
    </button>
  );
}
