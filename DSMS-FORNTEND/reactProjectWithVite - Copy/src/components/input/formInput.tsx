import React from 'react'

interface Props {
    type: string,
    name: string,
    placeholder?: string, //?-optional
    label: string,
    optional: boolean,
     callBack: Function,
     value:string
}

class FormInput extends React.Component<Props, any> {
    handleInput = (e: object): void => {
        console.log()
    }
    render(): React.ReactNode {
        return (
            <div className={'m-2'}>
                <label htmlFor={this.props.name} className={'block text-xs'}>{this.props.label}{!this.props.optional ? <span className="text-red-600">*</span> : null}</label>
                <input
                    type={this.props.type}
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    className={'py-2 m-2 w-full text-xs border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none'}
                    onChange={e=>this.props.callBack(e,this.props.name)}
                    value={this.props.value}
                />
            </div>
        );

    }

}

export default FormInput