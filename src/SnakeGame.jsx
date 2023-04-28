import { useCallback, useEffect, useRef } from "react";

const SnakeGame = () => {
  const canvas = useRef(null);
  const ctxRef = useRef(null);
  const snakeX = useRef(0);
  const snakeY = useRef(0);
  const speedX = useRef(0);
  const speedY = useRef(0);
  const foodX = useRef(0);
  const foodY = useRef(0);
  const snakeSize = useRef([]);
  const total = useRef(0);
  const size = 15;

  useEffect(() => {
    if (canvas.current.getContext) ctxRef.current = canvas.current.getContext("2d");
  }, []);

  const foodDraw = useCallback(() => {
    const ctx = ctxRef.current;
    ctx.fillStyle = "red";
    ctx.fillRect(foodX.current, foodY.current, size, size);
  }, []);

  const snakeDraw = useCallback(() => {
    const ctx = ctxRef.current;
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    snakeSize.current.forEach((item) => {
      ctx.fillRect(item.x, item.y, size, size);
    });
    ctx.fillRect(snakeX.current, snakeY.current, size, size);
  }, []);

  const updateFoodLocation = useCallback(() => {
    foodX.current = (Math.round(Math.random() * Math.floor((canvas.current.width - size) / size)) || 1) * size;
    foodY.current = (Math.round(Math.random() * Math.floor((canvas.current.height - size) / size)) || 1) * size;
  }, []);

  const updateSnakeLocation = useCallback(() => {
    snakeSize.current[total.current - 1] = { x: snakeX.current, y: snakeY.current };

    for (let i = 0; i < snakeSize.current.length - 1; i++) {
      snakeSize.current[i] = snakeSize.current[i + 1];
    }

    snakeY.current += speedY.current;
    snakeX.current += speedX.current;
    if (snakeY.current > canvas.current.height) snakeY.current = 0;
    else if (snakeY.current < 0) snakeY.current = canvas.current.height;
    if (snakeX.current > canvas.current.width) snakeX.current = 0;
    else if (snakeX.current < 0) snakeX.current = canvas.current.width;
  }, []);

  const updateSnakeDirection = useCallback((value) => {
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

  const eatFood = useCallback(() => {
    if (foodX.current || foodY.current) {
      if (snakeX.current === foodX.current && snakeY.current === foodY.current) {
        updateFoodLocation();
        total.current += 1;
      }
    }
  }, [updateFoodLocation]);

  useEffect(() => {
    updateFoodLocation();
    snakeDraw();
    foodDraw();
    document.addEventListener("keydown", (e) => {
      updateSnakeDirection(e.key);
    });

    const myInterval = setInterval(() => {
      updateSnakeLocation();
      eatFood();
      snakeDraw();
      foodDraw();
    }, 200);
    return () => clearInterval(myInterval);
  }, [snakeDraw, updateSnakeLocation, updateSnakeDirection, foodDraw, updateFoodLocation, eatFood]);

  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <canvas className="bg-gray-300" width={300} height={300} ref={canvas}></canvas>
    </div>
  );
};

export default SnakeGame;
