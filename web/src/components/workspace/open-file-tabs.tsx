import { demoOpenFiles } from "../../lib/constants";
import { FileItemPropT } from "../../lib/types";

export default function OpenFileTabs() {
  return (
    <div className="w-full flex">
      {demoOpenFiles.map((data, idx) => (
        <OpenTab {...data} key={idx} />
      ))}
    </div>
  );
}

function OpenTab(props: FileItemPropT) {
  return (
    <div
      onClick={() => console.log("div")}
      role="button"
      tabIndex={0}
      data-active="true"
      className="flex items-center cursor-pointer pl-5 pr-3 group py-2 border-b border-transparent first:data-[active='true']:bg-[#0e131d] first:data-[active='true']:border-amber-300"
    >
      <span className="text-sm">
        {props.filepath.split("/")[props.filepath.split("/").length - 1]}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("btn");
        }}
        className="px-0.5 invisible group-hover:visible h-5 hover:bg-blue-950/50 ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="size-4 text-amber-300 fill-none"
        >
          <path
            d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
