import App from "./App";
import Rect from "./components/Rect";
import SnakeGame from "./components/example/SnakeGame";
import Stroke from "./components/Stroke";
import Clock from "./components/example/Clock";

const routes = [
  { path: "/", element: <App /> },
  { path: "/rect", element: <Rect /> },
  { path: "/snake_game", element: <SnakeGame /> },
  { path: "/stroke", element: <Stroke /> },
  { path: "/clock", element: <Clock /> },
];

export default routes;
