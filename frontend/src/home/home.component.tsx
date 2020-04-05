import React from "react";
import home from "../images/home.jpg";

export default function Home() {
  return (
    <div style={{ padding: "0% 1% 1% 1%" }}>
      <img
        style={{ height: "auto", maxWidth: "100%" }}
        src={home}
        alt={"Lets Play"}
      />
    </div>
  );
}
