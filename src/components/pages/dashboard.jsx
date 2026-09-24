const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the Admin Dashboard.</p>
            <div style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "20px"
                }}>
                <div style={{
                        border: "1px solid #ccc",
                        padding: "20px",
                        width: "180px"
                    }}>
                    <h3>Users</h3>
                    <p>120</p>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;