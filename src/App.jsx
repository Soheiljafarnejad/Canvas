import { Link } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <ul>
        {routes.map((item) => {
          return (
            <li key={item.path}>
              <Link className="text-blue-500 text-2xl" to={item.path}>
                {item.path.replace("/", "")}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
