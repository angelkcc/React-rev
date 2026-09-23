import { Link } from "react-router";
const NavBar = () => {
    return(
        <div style={{display:"flex",gap:"10px",border:"1px solid gray",borderBottom:"1px solid gray",
        padding:"10px",justifyContent:"center",padding:"10px"}}>
            <Link to="/">
            <span>Home</span></Link>
            <Link to={"/about"}>
            <span>About</span></Link>
            <Link to={"/contact"}>
            <span>Contact Us</span></Link>
            <Link to={"/users"}>
            <span>Users</span></Link>
        </div>
    );
};
export default NavBar;