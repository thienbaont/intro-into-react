import ReactDOM from "react-dom/client";
import "./index.css";
import { Game } from "./game.component";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<Game />);