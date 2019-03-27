import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => (
    <header className="header">
        <div className="header__content">
            <Link className="header__title" to="/" exact="true"><h1>Name coming soon</h1></Link>
        </div>
    </header>
);

export default Header;