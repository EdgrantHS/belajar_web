import './Navbar.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  return (
    <nav className='navbar-dark'>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4">
            {/* title */}
            <a href='#' className='navbar-brand' >
              <img src="https://via.placeholder.com/50" alt="logo" className="me-5 my-2"/>
              <span className="fw-bold h3 nav-text-color d-md-inline d-none">[COMPANY NAME]</span>
            </a>   
          </div>
          <div className="col-4 col-md-3"/>
          <div className="col-4">
            {/* link */}
            <div className="row align-items-center">
              {/* muncul di large screen */}
              <div className="col-xl-3 d-md-block d-none"><a className="button-size nav-link btn btn-lg nav-text-color" href="#">Inventory Dashboard</a></div>
              <div className="col-xl-3 d-md-block d-none"><a className="button-size nav-link btn btn-lg nav-text-color" href="#">Dashboard</a></div>
              <div className="col-xl-3 d-md-block d-none"><a className="button-size nav-link btn btn-lg nav-text-color" href="#">Beli Barang</a></div>
              <div className="col-xl-3 d-md-block d-none"><a className="button-size nav-link btn btn-lg nav-text-color" href="#">Home</a></div>
              {/* muncul di small screen */}
              <div className="d-sm-block d-md-none position-relative">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">Inventory Dashboard</a></li>
                  <li><a className="dropdown-item" href="#">Dashboard</a></li>
                  <li><a className="dropdown-item" href="#">Beli Barang</a></li>
                  <li><a className="dropdown-item" href="#">Home</a></li>
                </ul>
              </div>

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
