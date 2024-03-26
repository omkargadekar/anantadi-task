import React from "react";
import StaticImage from "../components/StaticImage";
import ThirdPartyApi from "../components/ThirdPartyApi";
import DynamoData from "../components/DynamoData";
import ApiSearchData from "../components/ApiSearchData";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ flex: 1, height: "100%", border: "1px solid black" }}>
        <StaticImage />
      </div>
      <div style={{ flex: 1, height: "100%", border: "1px solid black" }}>
        <ThirdPartyApi />
      </div>
      <div style={{ flex: 1, height: "100%", border: "1px solid black" }}>
        <DynamoData userId={"fsgs"} />
      </div>
      <div style={{ flex: 1, height: "100%", border: "1px solid black" }}>
        <ApiSearchData />
      </div>
    </div>
  );
};

export default Dashboard;
