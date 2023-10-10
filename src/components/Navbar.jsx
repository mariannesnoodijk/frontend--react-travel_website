import React, {useState, useEffect} from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import {Button} from "./Button.jsx";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    // useEffect below prevents the SIGN UP button to appear upon refreshing the page when the icons are shown
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Adding the onClick function below closes the mobile drop down menu when clicking on the Logo to redirect to the homepage */}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* Below will change the navbar to bars when making screen smaller */}
                        {/* useState is used*/}
                        {click ? <CloseIcon style={{color: "white"}}/> : <ReorderIcon style={{color: "white"}}/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;