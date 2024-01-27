import React, { Component } from 'react';

//prop type for the dropdown component
interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
    color: string,
    value:string
}

//state type for the dropdown component
interface DropdownState {
    isOpen: boolean;
    selectedOption: string | null;

}

class Dropdown extends Component<DropdownProps, DropdownState> {
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
        let color: string;
        if (option === 'Active') {
            color = 'text-green-500';
        } else if (option === 'Non-Active') {
            color = 'text-red-500';
        } else {
            color = 'text-gray-500';
        }
        // Update the component's state with the selected option and color
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
            selectedOption: option,
            color,
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
        const { options, color } = this.props;
        const { isOpen, selectedOption } = this.state;

        return (
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        onClick={() => this.setState((prevState) => ({ isOpen: !prevState.isOpen }))}
                        className={`inline-flex justify-center w-full rounded-md border 
                            ${isOpen ? 'border-gray-500' : 'border-gray-300'} 
                                shadow-sm px-5 py-1 bg-white text-sm font-medium 
                            ${isOpen ? 'text-gray-500' : 'text-gray-700'} 
                                hover:bg-gray-50 ${color || ''}`}
                    >
                        {selectedOption || 'Select'}
                    </button>
                </div>

                {isOpen && (
                    <div
                        className=" absolute right-10  mt-2 w-[150px] rounded-md  bg-white ring-1 ring-black ring-opacity-5 "
                    >
                        <div className="py-1">
                            {options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => this.handleSelect(option)}
                                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
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
export default Dropdown;