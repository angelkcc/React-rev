import { Link, Outlet } from "react-router";

const AdminLayout = () => {
    return (
        <main style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                border: "1px solid gray"
            }}>

            {/* Header */}
            <header style={{
                    height: "70px",
                    backgroundColor: "#222",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px"
                }}>
                <h2>Admin Panel</h2>
                <div>
                    Admin
                </div>
            </header>
            {/* Body */}
            <div style={{
                    display: "flex",
                    flex: 1,
                    minHeight: "100vh"
                }}>

                {/* Sidebar */}
                <aside style={{
                        width: "220px",
                        backgroundColor: "#f2f2f2",
                        padding: "20px",
                        borderRight: "1px solid #ccc"
                    }}>

                    <h3>Menu</h3>

                    <nav style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px"
                        }}>
                        <Link to={"/admin/dashboard"}>Dashboard</Link>

                        <Link to={"/admin/users"}>Users</Link>


                    </nav>

                </aside>
                {/* Dynamic Content */}
                <div style={{
                        flex: 1,
                        padding: "25px"
                    }}>
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default AdminLayout;