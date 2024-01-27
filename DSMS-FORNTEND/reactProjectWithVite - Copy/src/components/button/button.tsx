import React from 'react'

interface Props {
    style: any,
    children: any,
}

class Button extends React.Component<Props, any> {
    render(): React.ReactNode {
        return (
            <button style={this.state.style}>
                {this.state.children}
            </button>
        );
    }
}

export default Button;