import NavBar from "../inputs/nav-bar"

const userDetailPage=()=>{
    const {id}=useParams();
    const {data}=useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    return(
        <div style={{border:"1px solid gray", minHeight:"100vh",padding:"10px"}}>
            <NavBar/>
            <h1>User Detail Page</h1>
            <p>This is the user detail page.</p>
        </div>
    )
}
export default userDetailPage