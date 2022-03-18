import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src="images/logo.png" className='me-1' alt="Logo" />
            <div className='d-inline'>{props.title}<span className='fw-bold'>{props.subtitle}</span></div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
              <li className="nav-item mx-2">
                <a className="nav-link rounded active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link rounded" href="/">About</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link rounded" href="/">Servers</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link rounded" href="/">Hosting</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link rounded" href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
