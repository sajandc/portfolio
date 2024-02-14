export default function Page({ num, children }) {
  const footer = () => {
    return (
      <>
        <br />
        <br />
        <div
          style={{
            float: "right",
            marginRight: "20px",
          }}>
          Page {num}
        </div>
        <br />
        <br />
        <div
          style={{
            background: "#FF6633",
            padding: "20px",
            display: "flex",
            color: "#fff",
            fontWeight: "600",
            fontSize: "12px",
            justifyContent: "space-between",
          }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <span class="material-symbols-outlined font-14">language</span>
            {"  "}https://www.bankofbaroda.in/
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Customer Care{" "}
            <span class="material-symbols-outlined font-14">call</span>
            {"   "}1800 5700
          </div>
        </div>
      </>
    );
  };
  return (
    <div
      id={`page-${num}`}
      style={{
        position: "relative",
        width: "90%",
        margin: "auto",
        paddingBottom: "150px",
      }}>
      {children}
      <div style={{ position: "absolute", bottom: "50px", width: "100%" }}>
        {footer()}
      </div>
    </div>
  );
}
