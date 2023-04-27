import { useCallback, useEffect, useRef } from "react";

const SnakeGame = () => {
  const canvas = useRef(null);
  const ctxRef = useRef(null);
  const scaleX = useRef(0);
  const scaleY = useRef(0);
  const speedX = useRef(0);
  const speedY = useRef(0);
  const size = 20;

  useEffect(() => {
    if (canvas.current.getContext) ctxRef.current = canvas.current.getContext("2d");
  }, []);

  const snakeDraw = useCallback(() => {
    const ctx = ctxRef.current;
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.fillRect(scaleX.current, scaleY.current, size, size);
  }, []);

  const updateLocation = useCallback(() => {
    scaleY.current += speedY.current;
    scaleX.current += speedX.current;

    if (scaleY.current > canvas.current.height) scaleY.current = 0;
    else if (scaleY.current < 0) scaleY.current = canvas.current.height;
    if (scaleX.current > canvas.current.width) scaleX.current = 0;
    else if (scaleX.current < 0) scaleX.current = canvas.current.width;
  }, []);

  const updateDirection = useCallback((value) => {
    switch (value) {
      case "ArrowUp":
        speedX.current = 0;
        speedY.current = -size;
        break;
      case "ArrowDown":
        speedX.current = 0;
        speedY.current = size;
        break;
      case "ArrowLeft":
        speedY.current = 0;
        speedX.current = -size;
        break;
      case "ArrowRight":
        speedY.current = 0;
        speedX.current = size;
        break;
      default:
        return;
    }
  }, []);

  useEffect(() => {
    snakeDraw();
    const myInterval = setInterval(() => {
      updateLocation();
      snakeDraw();
    }, 200);

    document.addEventListener("keydown", (e) => {
      updateDirection(e.key);
    });

    return () => clearInterval(myInterval);
  }, [snakeDraw, updateLocation, updateDirection]);

  useEffect(() => {}, []);

  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <canvas className="bg-gray-300" width={400} height={300} ref={canvas}></canvas>
    </div>
  );
};

export default SnakeGame;
