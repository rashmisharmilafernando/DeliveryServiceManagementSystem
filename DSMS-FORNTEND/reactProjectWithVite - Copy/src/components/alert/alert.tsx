import React, { Component, ReactNode } from 'react';


interface Props{
    type :'success' | 'error' | 'info';
    message:ReactNode;
}
interface State {
    isVisible: boolean;
  }

class Alert extends Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state={
            isVisible:true,
        };
    }

    closeAlert=()=>{
        this.setState({isVisible:false});
    };

    render(): React.ReactNode {
       const {type,message}=this.props;
       const{isVisible}=this.state;

       return(
        isVisible && 
        <div className={`alert ${type === 'success' ? 'bg-[#C0FFD4]  border-none text-[#043A15]' : type === 'error' ? 'bg-[#FFC5C5] border-none text-[#680B0B]' : 'bg-[#A7CDFF] border-none text-[#072F63]'} text-white p-4 mb-4 w-[350px] flex justify-between border ml-4`}>
                    <p>{message}</p>
                    <button className='close-btn ml-2 text-black' onClick={this.closeAlert}>
                        <b>X</b>
                    </button>
                </div>
       )
    }
}
export default Alert;