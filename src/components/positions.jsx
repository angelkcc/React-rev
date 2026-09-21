
function Positions() {
  return (
    <div style={{border:"1px solid blue"}}>
        <h1>STATIC</h1>
        <div style={{
            height:"200px",
            width:"200px",
            border:"1px solid red",
            top:"100px",
            left:"100px",

        }}>
            <p>static</p>
        </div>
        {/* relative */}
        <h1>RELATIVE</h1>
        <hr/>
        <div style={{
            height:"200px",
            width:"200px",
            border:"1px solid yellow",
            position:"relative",
            top:"100px",
            left:"100px",
        }}
        >
            <p>relative</p>
        </div>
      
       {/* absolute ->searches for the nearest parent who is relative, if it doesnt find then chooses root as parent*/}
        <h1>ABSOLUTE</h1> 
        <hr/>
        <div style={{
            height:"200px",
            width:"200px",
            background:"blue",
            position:"absolute",
            top:"0px",
            right:"0px",
        }}
        >
            Absolute
        </div>
         <div
        style={{
          height: "300px",
          width: "300px",
          border: "1px solid blue",
          borderRadius: "10px",
          marginTop: "80px",
          padding: "20px",
          position: "relative",
        }}
      >
        <h1>Product card</h1>
        <p>Name: Product 1</p>
        <p>Price: 1000</p>
        <button
          style={{
            color: "white",
            background: "red",
            borderColor: "red",
            padding: "6px 20px",
            borderRadius: "15px",
            position: "absolute",
            top: "5px",
            right: "5px",
          }}
        >
          Delete
        </button>
      </div>
          {/* z-index */}
      <h2>z-index</h2>
      <div
        style={{
          height: "150px",
          border: "1px solid yellow",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100px",
            background: "blue",
            position: "absolute",
            borderRadius: "50%",
            top: "0px",
            left: "0px",
            zIndex: 11,
          }}
        ></div>
        <div
          style={{
            height: "100px",
            width: "100px",
            background: "yellow",
            position: "absolute",
            top: "0px",
            left: "50px",
            borderRadius: "50%",

            zIndex: 12,
          }}
        ></div>
        <div
          style={{
            height: "100px",
            width: "100px",
            background: "red",
            position: "absolute",
            top: "0px",
            left: "100px",
            borderRadius: "50%",

            zIndex: 0,
          }}
        ></div>
      </div>

      {/* Fixed */}
      <h1>Fixed</h1>
      <div
        style={{
          height: "100px",
          width: "100px",
          background: "indigo",
          borderRadius: "50%",
          position: "fixed",
          bottom: "50px",
          right: "90px",
          zIndex: 1,
        }}
      >
        Add
      </div>
      <div
        style={{
          height: "100px",
          width: "100px",
          background: "blue",
          borderRadius: "50%",
          position: "fixed",
          bottom: "50px",
          right: "50px",
        }}
      >
        Add
      </div>
    </div>
  );
};

export default Positions;