import React from "react";


function Navbar({ searchEmployee }) {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between align-content-center">
            <form className="form-inline ">
                <input className="form-control mr-sm-2" onChange={(e) => {
                    searchEmployee(e) }} type="search" placeholder="Search" aria-label="Search"></input>               
            </form>
        </nav>
    );
}

export default Navbar;