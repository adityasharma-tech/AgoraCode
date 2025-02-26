import React, { useState } from "react";
import Header from "../components/header";
import { WorkspaceItemPropT } from "../lib/types";
import { demoWorkspaces } from "../lib/constants";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const [checkedTab, setCheckedTab] = useState<"workspaces" | "shared">(
    "workspaces"
  );

  return (
    <main className="h-screen p-10 w-screen bg-neutral-100 dark:bg-neutral-950 overflow-y-auto">
      <Header />
      <div className="flex gap-x-10 w-full px-6 mt-10">
        <div className="w-[70%]">
          <div className="flex font-medium text-neutral-100">
            <button
              onClick={() =>
                checkedTab === "workspaces" ? null : setCheckedTab("workspaces")
              }
              aria-checked={checkedTab === "workspaces" ? "true" : "false"}
              className="bg-neutral-800 px-5 py-2 text-sm hover:bg-neutral-700 cursor-pointer aria-checked:bg-neutral-900"
            >
              Workspaces
            </button>
            {/* <button
              onClick={() =>
                checkedTab === "shared" ? null : setCheckedTab("shared")
              }
              aria-checked={checkedTab === "shared" ? "true" : "false"}
              className="bg-neutral-800 px-5 py-2 text-sm hover:bg-neutral-700 cursor-pointer aria-checked:bg-neutral-900"
            >
              Shared
            </button> */}
          </div>
          <div className="min-h-[50vh] bg-neutral-900">
            {checkedTab === "workspaces" ? (
              <WorkspacesTab />
            ) : checkedTab === "shared" ? (
              <SharedTab />
            ) : null}
          </div>
        </div>
        <div className="w-[30%]">
          <div className="bg-neutral-900 px-3 font-medium py-2 text-sm text-neutral-100">
            Invitations
          </div>
          <div className="min-h-[50vh] bg-neutral-900 flex justify-center items-center">
            <span className="text-neutral-600">No invitations yet</span>
          </div>
        </div>
      </div>
    </main>
  );
}

function WorkspacesTab() {
  return (
    <React.Fragment>
      {demoWorkspaces.map((value, idx) => (
        <WorkspaceItem key={idx} {...value} />
      ))}
    </React.Fragment>
  );
}

function WorkspaceItem(props: WorkspaceItemPropT) {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Click Me"
      onClick={() => navigate(`/workspace/${props._id}`)}
      className="px-3 py-3 flex w-full justify-between items-center border-b last:border-none border-neutral-600 hover:bg-neutral-800 cursor-pointer"
    >
      <div className="text-sm flex flex-col">
        <span>{props.title}</span>
        <span className="text-xs text-neutral-400">{`By user ${
          props.cid
        } \t Modified at: ${new Date(
          props.createdAt
        ).toLocaleDateString()}`}</span>
      </div>
      <div>
        <button className="hover:bg-neutral-700 p-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="size-6 text-neutral-400"
          >
            <path
              d="M9 11.5h6M10.5 15.5h3M19.5 5.5l-1 16.5h-13l-1-16.5M2 5.5h6m14 0h-6m0 0L14.5 2h-5L8 5.5m8 0H8"
              className="stroke-neutral-400"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function SharedTab() {
  return <React.Fragment></React.Fragment>;
}
