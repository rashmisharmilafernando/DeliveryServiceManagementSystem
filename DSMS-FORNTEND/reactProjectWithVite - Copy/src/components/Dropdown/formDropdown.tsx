import React, { Component } from 'react';

//prop type for the dropdown component
interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
    label: string,
    value:string

}

//state type for the dropdown component
interface DropdownState {
    isOpen: boolean;
    selectedOption: string | null;


}

class FormDropdown extends Component<DropdownProps, DropdownState> {
    //Constructor to initialize the component's state
    constructor(props: DropdownProps) {
        super(props);
        this.state = {
            isOpen: false, //false==closed & true==open
            selectedOption: props.value || null,

        };
    }
    // function to handle the selection of an option

    handleSelect = (option: string) => {

        // Update the component's state with the selected option and color
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
            selectedOption: option,

        }));
        this.props.onSelect(option);
    };

    componentDidUpdate(prevProps: DropdownProps) {
        if (prevProps.value !== this.props.value) {
          this.setState({
            selectedOption: this.props.value || null,
          });
        }
      }
    render() {
        const { options, label } = this.props;
        const { isOpen, selectedOption } = this.state;

        return (
            <div className=" text-left">
                <div>
                    <label className={'block text-xs'}>{label}{<span className="text-red-600">*</span>}</label>
                    <button
                        type="button"

                        onClick={() => this.setState((prevState) => ({ isOpen: !prevState.isOpen }))}
                        className={`inline-flex border-2 border-gray-400 px-2 py-2 m-2 w-full text-xs  focus:border-green-400 placeholder-gray-400
                            ${isOpen ? 'border-gray-500' : 'border-gray-300'} 
                                  py-1 bg-white text-sm font-medium 
                            ${isOpen ? 'text-gray-500' : 'text-gray-700'} 
                                hover:bg-gray-50`}
                    >
                        {selectedOption || 'Select'}
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="absolute  w-50 origin-top-right divide-y divide-gray-100   bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">

                        <div className="py-1 w-[250px] ">
                            {options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => this.handleSelect(option)}
                                    className="w-[250px] px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                                >
                                    {option}

                                </button>


                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

}
export default FormDropdown;