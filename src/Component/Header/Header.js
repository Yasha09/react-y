import React from 'react';
import ss from'./Header.module.css';


const Header= () =>{
    return(
        <header className={ss.header}>
            <img src={'https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'} alt={'ssss'} title={'this is picture'} />
        </header>
    )
};
export default Header