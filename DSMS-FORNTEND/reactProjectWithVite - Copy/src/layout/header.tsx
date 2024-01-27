
import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component<any, any> {
    constructor(props: any) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }
  handleMenuToggle = () => {
    this.setState((prevState: any) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return (
      <header>
        <nav className={'flex justify-between items-center shadow-xl p-5'}>
          <img src="src\assets\logo.png" title="logo" alt="logo" className={'w-[100px]'} />
          <ul className={'flex gap-[4vw]'}>
            <li className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#17A247] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"><Link to="/Home">Home</Link></li>
            <li className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#17A247] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"><Link to="/branch">Branch</Link></li>
            <li className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#17A247] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"><Link to="/customer">Customer</Link></li>
            <li className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#17A247] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"><Link to="/rider">Rider</Link></li>
            <li className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#17A247] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"><Link to="/order">Order</Link></li>
            <li className="relative text-l w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#17A247] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"><Link to="/reports">Report</Link></li>

            <li >
                <div>
                  <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={this.handleMenuToggle}>
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
            </li>
            {this.state.isMenuOpen && (
          <div className="absolute right-0 top-[50px] z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1} >
            {/* <Link to="/userprofile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">
              Your Profile
            </Link> */}
            
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">
            Sign out
            </Link>

            
          </div>
        )}
          </ul>
        </nav>
       
      </header>
      
    );
  }

}

export default Header;
