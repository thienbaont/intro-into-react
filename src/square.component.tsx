import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

type Props = {
    value: any,
    onClick: any
}

type State = {
}

export class Square extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}