import { Link } from "react-router";


const userDetailPage=()=>{
    const {id}=useParams();

    const {data,isLoading}=useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    console.log(data);
    if(isLoading){
      return <p>loading...</p>
    }
    return(
        <div style={{border:"1px solid gray", minHeight:"100vh",padding:"10px"}}>
          
            <h1>User Detail Page</h1>
            <p>This is the user detail page.</p>
            <p>Username:{data.username}</p>
            <p>Email:{data.email}</p>
            <p>Phone:{data.phone}</p>
            <p>Website:<Link to ={`https://${data.website}`} target="_blank">
                {data.website}
            </Link></p>
            <p>Address:{data.address.street},{data.address.city}</p>
        </div>
    )
}
export default userDetailPage