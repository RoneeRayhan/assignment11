// src/components/Header.jsx

import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
    return (
        <header className="header"> {/* Use CSS class */}
            <h2>Welcome to My App</h2>
            <p>This is the header section of the app.</p>
        </header>
    );
}

export default Header;
