import React from "react";

interface Props {
    title?: string;
    count?: number|string;
}

class Card extends React.Component<Props, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div className={'w-[250px] h-[110px] p-5 border-solid border-2 m-5'}>
                <h1 className={'text-xl font-bold text-center ' }>{this.props.title}</h1>
                <p className={'my-5 text-center text-xl'}>{this.props.count}</p>
            </div>
        );
    }
}

export default Card;