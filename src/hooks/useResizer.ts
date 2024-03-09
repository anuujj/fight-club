import { useState } from "react";

interface IUseResizerProps {
  initWidth: number | string;
}
export default function useResizer({ initWidth }: IUseResizerProps) {
  const [position, setPosition] = useState<string | number>(initWidth);
  const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let newX = event.clientX;
    if (newX < window.innerWidth * 0.25 || newX > window.innerWidth * 0.75) {
      return; // If newX is outside the allowed range, return without updating the position
    }
    setPosition(newX);
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    document.body.style.cursor = "col-resize";
    const img = new Image();
    img.src = "";
    e.dataTransfer.setDragImage(img, 0, 0);
  };
  const onDragEnd = () => {
    document.body.style.cursor = "default";
  };
  return {
    position,
    dragProps: { onDragStart, onDrag, onDragEnd, draggable: true },
  };
}
