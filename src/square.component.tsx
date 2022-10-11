import React from "react";
import "./square.component.css";

/** ---------------------------------------------------------------------------
 * Component Props
 * ----------------------------------------------------------------------------
 */
interface SquareProps {
    value: string,
    onClick: () => void
}

/** ---------------------------------------------------------------------------
 * Component State
 * ----------------------------------------------------------------------------
 */
interface SquareState {
}

/** ---------------------------------------------------------------------------
 * Component
 * ----------------------------------------------------------------------------
 */
export class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props);
    }

    render() {
        return (
            <button
                className="square"
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        );
    }
}