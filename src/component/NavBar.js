import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">        
          <Link className="navbar-brand" style={{fontWeight:'bolder',color:'white'}} to="/">News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
                <Link className="nav-link active" style={{color:'white',fontWeight:'bold'}} aria-current="page" to="/home">Home</Link>
                <Link className="nav-link active" style={{color:'white',fontWeight:'bold'}} to="/entertainment">Entertainment</Link>
                <Link className="nav-link active" style={{color:'white',fontWeight:'bold'}} to="/health">Health</Link>
                <Link className="nav-link active" style={{color:'white',fontWeight:'bold'}} to="/science">Science</Link>
                <Link className="nav-link active" style={{color:'white',fontWeight:'bold'}} to="/sports">Sports</Link>
                <Link className="nav-link active" style={{color:'white',fontWeight:'bold'}} to="/technology">Technology</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}