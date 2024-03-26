import React, { useState, useEffect } from "react";
import axios from "axios";

const DynamoData = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [description, setdescription] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tp9uc7lel5.execute-api.us-east-1.amazonaws.com/userstage/getInfo?userId=fss`
        );
        console.log(response);
        setUserInfo(response.data);
      } catch (error) {
        setError(error);
        setdescription(true);
      }
    };

    fetchData();
  }, [userId]);

  if (error && description) {
    return (
      <div>
        <br />
        <br />
        <p>Error: {error.message}</p>
        <br />
        <p style={{ color: "orange" }}>
          Description: In the AWS console, the CORS has been set to
          "http://localhost:3000" and may not be configured correctly. please
          consider using CORS unblock extenstion or postman for testing
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>DynamoDB Data</h2>
      {userInfo ? (
        <div>
          <p>User ID: {userInfo.userId}</p>
          <p>Username: {userInfo.username}</p>
          <p>Password: {userInfo.password}</p>
          <p>Location: {userInfo.location}</p>
          <p>Stack: {userInfo.stack}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DynamoData;
