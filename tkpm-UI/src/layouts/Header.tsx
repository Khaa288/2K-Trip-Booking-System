import { useNavigate } from "react-router-dom";

function Header() {
  const user : UserInfo = JSON.parse(sessionStorage.getItem("user")!);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  }

  return (        
    <nav className="navbar navbar-light bg-light justify-content-between px-5">
        <a className="navbar-brand" href={
          user.roleId === 1 ? "/admin/home" : 
          user.roleId === 2 ? "/customer/home" : 
          user.roleId === 3 ? "/driver/home" : "/operator/home"
        }>
          2K Home
        </a>

        {/* <a href="" > */}
          <button className="btn btn-outline-success my-2 my-sm-0 rounded-circle border-1 dropdown" style={{color: "#8fc4b7"}} data-bs-toggle="dropdown">
              <i className="bi bi-person-fill"></i>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Information</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleLogout()}>Log out</a></li>
            </ul>
          </button>
        {/* </a> */}
    </nav>
  )
}

export default Header
