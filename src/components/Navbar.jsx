import React from 'react';

export default function Navbar(props) {
  return (
    <main>
      <nav className={`navbar navbar-expand-lg rounded-bottom-4 navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <h4 className="navbar-brand m-2">G20News</h4>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3" key={"xyz"}>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#" onClick={props.hOC}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={props.tOC}>Trade</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={props.pOC}>Politics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={props.fOC}>Finance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-browser-chrome mb-1" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  </svg>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={props.sOC} />
            </form>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input my-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.tT} />
          </div>
        </div>
      </nav>
    </main>
  )
}