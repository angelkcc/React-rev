const CardWrapper = ({ children }) => {
  //   console.log(children);

  //* fetch

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "10px",
        margin: "20px 0px",
        width: "fit-content",
        flexGrow: "1",
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;