import { Outlet, Link, redirect } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
      <nav>
        <div> <Link to="/" style={{textDecoration:'none'}}className="red">Home</Link></div>
        <div> <Link to="/Blogs" style={{textDecoration:'none'}}className="red">Chat Bot</Link></div>
        <div><Link to="FirstTimeLogin"style={{textDecoration:'none'}} className="red">Sign Up</Link></div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;