"use client";

import Users from "./username/[user]/page";

const Home = () => {
  return (
    <div
      style={{
        paddingTop: "100px",
        justifyContent: "center",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <p>Hello World</p>
      <Users />
    </div>
  );
};

export default Home;
