import { Component } from "react";

export default class Tab extends Component {
    render() {
        if (this.props.isSelected) {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }
        return null;
    }
}