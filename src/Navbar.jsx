import './Navbar.scss';

function Navbar() {
  return (
    <nav className='navbar-dark'>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4">
            {/* title */}
            <a href='#' className='navbar-brand' >
              <img src="https://via.placeholder.com/50" alt="logo" className="me-5"/>
              <span className='fw-bold h3 nav-text-color'>[COMPANY NAME]</span>
            </a>   
          </div>
          <div className="col-4 col-md-3"/>
          <div className="col-4">
            {/* link */}
            <div className="row align-items-center">
              <div className="col-xl-3"><a className="button-size nav-link btn btn-lg nav-text-color" href="#">Inventory Dashboard</a></div>
              <div className="col-xl-3"><a className="button-size nav-link btn btn-lg nav-text-color" href="#">Dashboard</a></div>
              <div className="col-xl-3"><a className="button-size nav-link btn btn-lg nav-text-color" href="#">Beli Barang</a></div>
              <div className="col-xl-3"><a className="button-size nav-link btn btn-lg nav-text-color" href="#">Home</a></div>
            </div>
          </div>
            <div className="col-1 d-none d-md-block text-end">
             {/*profile  */}
             <a href='#' className='navbar-brand' >
              <img src="https://via.placeholder.com/50" alt="logo" className="me-5"/>
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
