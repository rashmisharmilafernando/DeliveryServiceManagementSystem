import React from 'react';

class Footer extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <footer className={'text-black p-5'}>
        <div className={'mt-1 text-center'}>ExpressGo 2023 © All Rights Reserved</div>
      </footer>
    );
  }

}

export default Footer