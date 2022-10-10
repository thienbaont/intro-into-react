import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Board} from "./board.component";

type Props = {
}

type State = {
}

class Game extends React.Component<Props, State> {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<Game />);

