import React, { useCallback, useEffect, useRef } from "react";
import Canvas from "../../common/Canvas";

const Clock = () => {
  const canvas = useRef(null);
  const ctxRef = useRef(null);

  const second = useRef({ width: 0, height: 0 });
  const ArrowDeg = 10;

  const drawArrow = useCallback((size) => {
    const width = canvas.current.width;
    const height = canvas.current.height;
    const ctx = ctxRef.current;
    const origin = width / 2;
    const originDynamic = origin + 150;
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "red";
    // body
    ctx.moveTo(origin, height / 2);
    ctx.lineTo(originDynamic, size);
    // arrowLeft
    ctx.lineTo(originDynamic - ArrowDeg, size);
    // arrowRight;
    // ctx.moveTo(width / 2, width / 2 + size);
    // ctx.lineTo(width / 2 + ArrowDeg, width / 2 + size + ArrowDeg);
    ctx.stroke();
  }, []);

  useEffect(() => {
    drawArrow(150);
    const myInterval = setInterval(() => {}, 1000);
    return () => clearInterval(myInterval);
  }, [drawArrow]);

  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <Canvas canvasRef={canvas} ctxRef={ctxRef} />
    </div>
  );
};

export default Clock;
