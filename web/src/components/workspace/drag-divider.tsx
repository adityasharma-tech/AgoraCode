import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function DragDivider(props: {
    element1: React.ReactNode;
    element2: React.ReactNode;
    className?: string;
    defaultPosition?: number; 
}) {

  const [dividerPosition, setDividerPosition] = useState(props.defaultPosition ?? window.innerWidth / 5);
  const [mouseX, setMouseX] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    const dragger = document.getElementById("dragger");
    if (!dragger) return;
    dragger.addEventListener(
      "mousedown",
      () => {
        setMouseDown(true);
      },
      {
        signal: controller.signal,
      }
    );

    dragger.addEventListener("mouseup", () => {
      setMouseDown(false);
    }, {
        signal: controller.signal
    });
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (mouseDown) setDividerPosition(mouseX);
  }, [mouseX, mouseDown, props]);

  return (
    <div
      onMouseMove={(ev) => {
        setMouseX(ev.clientX);
      }}
      className={cn("w-full h-full flex", props.className)}
    >
      <div
        style={{
          width: dividerPosition,
        }}
        className="h-full"
      >
        {props.element1}
      </div>
      <div id="dragger" className="h-full w-1 cursor-col-resize relative group">
        <div
          role="span"
          aria-checked={mouseDown ? "true" : "false"}
          className="absolute z-10 top-0 left-1/2 right-1/2 bottom-0 -translate-x-1/2 w-0.5 bg-[#263147] group-hover:w-1 transition-all group-hover:bg-amber-300 aria-checked:bg-amber-300"
        />
      </div>
      <div
        style={{
          width: window.innerWidth - dividerPosition,
        }}
        className="h-full"
      >
        {props.element2}
      </div>
    </div>
  );
}
