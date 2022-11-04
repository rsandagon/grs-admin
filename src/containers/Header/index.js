import React, { useState, useRef, useEffect  } from 'react';
import './Header.css';
import logo from './images/logo.jpg'

function Header(){ 
    const [display, changeDisplay] = useState('none');
    const wrapperRef = useRef();

    function handleClickOutside(e) {
        if (wrapperRef.current.contains(e.target)) {
            // inside click
            return;
          }
          // outside click
          changeDisplay('none');
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    function toggleDD() {
        const displayState = (display === 'none') ? 'block': 'none';
        changeDisplay(displayState);
    }

  return (
    <nav ref={wrapperRef} className="bg-gray-900 pt-2 md:pt-1 pb-2 px-1 mt-0 h-auto fixed w-full z-20 top-0">

        <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                <img alt="logo" className="m-2" src={logo}/>
            </div>
        
            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                <span className="relative w-full">
                    <input type="search" placeholder="Search" className="w-full bg-gray-800 text-sm text-white transition border border-transparent focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"/>
                    <div className="absolute search-icon Header-search">
                        <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                </span>
        </div>
        
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="flex-1 md:flex-none md:mr-3  py-2 ">
            <div className="relative inline-block">
              <button onClick={toggleDD} className="drop-button text-white focus:outline-none"> <span className="pr-2"><i className="fas fa-user"></i></span> Hi, Badong <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg></button>
                            <div id="myDropdown" style={{display : display}} className="dropdownlist absolute bg-gray-900 text-white right-0 mt-3 p-3 overflow-auto z-30 ">
                                <input type="text" className="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" />
                                <div className="flex items-center p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline"><i className="fa fa-user fa-fw flex-grow"></i><span className="flex-grow">Profile</span></div>
                                <div className="flex items-center p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline"><i className="fa fa-cog fa-fw flex-grow"></i><span className="flex-grow">Settings</span></div>
                                <div className="border border-gray-800"></div>
                                <div className="flex items-center p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline"><i className="fas fa-sign-out-alt fa-fw flex-grow"></i><span className="flex-grow">Log Out</span></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        </nav>
  );
}

export default Header;





        