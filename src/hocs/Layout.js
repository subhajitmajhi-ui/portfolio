import React from 'react'
import Header from './Header';

const withLayout = (PageComponent) => {
  return function WithPage(){
    return(
    <>
        <div className="gaspar" data-magic-cursor="show" data-color="crimson">

        <Header />

        <div className="container ">
            <PageComponent />
        </div>
        
        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
        
    </div>
    </>
    );
  };
}

export default withLayout;
