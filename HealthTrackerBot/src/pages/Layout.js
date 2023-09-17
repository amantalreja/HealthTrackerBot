import { Outlet, Link, redirect } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
      <nav>
        <div> <Link to="/" className="red">Home</Link></div>
        <div> <Link to="/Blogs" className="red">Blogs</Link></div>
        <div><Link to="FirstTimeLogin" className="red">Blogs</Link></div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;