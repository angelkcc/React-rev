import { Link } from "react-router";
const PageNotFound=()=>{
    return(
        <div style={{border:"1px solid gray", minHeight:"100vh",padding:"10px"}}>
            <h1>404 Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">
            <button>Go to Home</button></Link>
        </div>
    );
}

export default PageNotFound;