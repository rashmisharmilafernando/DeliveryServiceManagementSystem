import React from 'react'

interface Props {
    type: string,
    name: string,
    placeholder?: string, //?-optional
    label: string,
    optional: boolean,
    callBack: Function
}

class Input extends React.Component<Props, any> {
    handleInput = (e: object): void => {
        console.log()
    }
    render(): React.ReactNode {
        return (
            <div className={'m-2'}>
                <label htmlFor={this.props.name} className={'block'}>{this.props.label}{!this.props.optional ? <span className="text-red-600">*</span> : null}</label>
                <input
                    type={this.props.type}
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    className={'block border border-[#D9D9D9] outline-none focus:border-[#68B984] h-10  w-full rounded-lg'}
                    onChange={e=>this.props.callBack(e,this.props.name)}
                />
            </div>
        );

    }

}

export default Input