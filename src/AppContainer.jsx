import { Content } from "./components/content/Content";
import { Header } from "./components/header/Header";

export const AppContainer = () => {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "600px",
          borderRadius: "40px",
          border: "1px solid white",
          display: "grid",
          gridTemplateRows: "110px 1fr",
          justifyContent: "center",
        }}
      >
        <Header />
        <Content />
      </div>
    </div>
  );
};
