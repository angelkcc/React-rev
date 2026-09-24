import NavBar from "../components/inputs/nav-bar";
//import Footer from "../components/inputs/footer";
import { Outlet } from "react-router";

const ClientLayout=()=>{
    return( 
    <main style={{border:"1px solid gray", minHeight:"100vh",padding:"10px"}}>
        {/*navbar*/}
        <NavBar/>
        {/*dynamic content*/}
        <div style={{height:"100%"}}> 
            {/*<h1>Dynamic page content</h1>*/}
            <Outlet />
        </div>
        {/*footer*/}

    </main>
    );
};
export default ClientLayout;
