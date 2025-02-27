import React, { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function DragDivider(props: {
  element1: React.ReactNode;
  element2: React.ReactNode;
  className?: string;
  defaultPosition?: number;
  horizontal?: boolean;
}) {
  const [draggerId] = useState(`dragger-${props.horizontal ? 'h' : 'v'}-${Math.floor(Math.random() * 10000)}`)
  const [dividerPosition, setDividerPosition] = useState(
    props.defaultPosition ?? props.horizontal
      ? window.innerHeight - (window.innerHeight / 3)
      : window.innerWidth / 5
  );
  const [mouseX, setMouseX] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    const dragger = document.getElementById(draggerId);
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

    dragger.addEventListener(
      "mouseup",
      () => {
        setMouseDown(false);
      },
      {
        signal: controller.signal,
      }
    );
    return () => {
      controller.abort();
    };
  }, [draggerId]);

  useEffect(() => {
    if (mouseDown) setDividerPosition(mouseX);
  }, [mouseX, mouseDown, props]);

  return (
    <div
      onMouseMove={(ev) => {
        setMouseX(props.horizontal ? ev.clientY : ev.clientX);
      }}
      className={cn(
        `w-full h-full flex ${props.horizontal ? "flex-col" : null}`,
        props.className
      )}
    >
      <div
        style={{
          width: props.horizontal ? "100%" : dividerPosition,
          height: props.horizontal ? dividerPosition : "100%",
        }}
      >
        {props.element1}
      </div>
      <div
        id={draggerId}
        className={`${
          props.horizontal ? "w-auto h-1 cursor-row-resize" : "h-full w-1 cursor-col-resize"
        } relative group`}
      >
        <div
          role="span"
          aria-checked={mouseDown ? "true" : "false"}
          className={`${props.horizontal ? "top-1/2 left-0 right-0 bottom-1/2 -translate-y-1/2 h-0.5 group-hover:h-1" : 'top-0 left-1/2 right-1/2 bottom-0 -translate-x-1/2 w-0.5 group-hover:w-1'} absolute z-10  bg-[#263147] transition-all group-hover:bg-amber-300 aria-checked:bg-amber-300`}
        />
      </div>
      <div
        style={{
          width: props.horizontal
            ? "w-full"
            : window.innerWidth - dividerPosition,
          height: props.horizontal
            ? window.innerHeight - dividerPosition
            : "h-full",
        }}
      >
        {props.element2}
      </div>
    </div>
  );
}
