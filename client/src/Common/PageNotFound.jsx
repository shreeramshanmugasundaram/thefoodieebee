const PageNotFound = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h5
        style={{
          fontFamily: "Montserrat",
          fontSize: "1.2rem",
          fontWeight: "600",
        }}
      >
        Error 404: Page not found
      </h5>
    </div>
  );
};

export default PageNotFound;
