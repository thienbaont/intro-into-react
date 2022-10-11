import React from "react";
import { Square } from "./square.component";
import "./board.component.css";

/** ---------------------------------------------------------------------------
 * Component Props
 * ----------------------------------------------------------------------------
 */
interface BoardProps {
    squares: string[],
    onClick: (i: number) => void
}

/** ---------------------------------------------------------------------------
 * Component States
 * ----------------------------------------------------------------------------
 */
interface BoardState {
}

/** ---------------------------------------------------------------------------
 * Component
 * ----------------------------------------------------------------------------
 */
export class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
    }

    /**
     * 
     * @param i 
     * @returns 
     */
    renderSquare(i: number) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    /**
     * 
     * @returns 
     */
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div >
        );
    }
}