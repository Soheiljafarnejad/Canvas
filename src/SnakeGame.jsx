import { useEffect, useRef, useState } from "react";

const SnakeGame = () => {
  const canvas = useRef(null);
  const ctxRef = useRef(null);
  const scaleX = useRef(0);
  const scaleY = useRef(0);
  const direction = useRef("");
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (canvas.current.getContext) ctxRef.current = canvas.current.getContext("2d");
  }, []);

  useEffect(() => {
    const ctx = ctxRef.current;

    ctx.fillStyle = "black";
    const width = canvas.current.width;
    const height = canvas.current.height;
    ctx.fillRect(scaleX.current, scaleY.current, 20, 20);

    switch (value) {
      case "up":
        scaleY.current -= 20;
        direction.current = "-Y";
        break;
      case "down":
        scaleY.current += 20;
        direction.current = "+Y";
        break;
      case "left":
        scaleX.current -= 20;
        direction.current = "-X";

        break;
      case "right":
        scaleX.current += 20;
        direction.current = "+X";

        break;
      default:
        return;
    }

    if (value) {
      const interval = setInterval(() => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillRect(scaleX.current, scaleY.current, 20, 20);
        if (direction.current.includes("X")) {
          if (scaleX.current > width) scaleX.current = 0;
          else if (scaleX.current < 0) scaleX.current = width;
          else direction.current === "+X" ? (scaleX.current += 20) : (scaleX.current -= 20);
        }
        if (direction.current.includes("Y")) {
          if (scaleY.current > height) scaleY.current = 0;
          else if (scaleY.current < 0) scaleY.current = height;
          else direction.current === "+Y" ? (scaleY.current += 20) : (scaleY.current -= 20);
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [value]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") setValue("up");
      else if (e.key === "ArrowDown") setValue("down");
      else if (e.key === "ArrowLeft") setValue("left");
      else if (e.key === "ArrowRight") setValue("right");
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <canvas className="bg-gray-300" width={400} height={400} ref={canvas}></canvas>
    </div>
  );
};

export default SnakeGame;
