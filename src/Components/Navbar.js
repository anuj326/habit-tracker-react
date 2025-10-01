import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar mb-4">
    <nav className="navbar navbar-light justify-content-between" style={{backgroundColor: "#e3f2f2"}}>
        <Link to="/" className='navbar-brand m-2 ms-5' > <h2>Habit Tracker Dev With CI/CD</h2></Link>
<form action="" className="form-inline">
    <Link to="/add-habit" className="btn btn-outline-success me-5 my-sm-0 m-2" type="submit" >Add Habits</Link>
</form>
    </nav>
    <h1 className='text-center author'>Designed by Anuj Sahu</h1>
    </div>
  )
}

export default Navbar