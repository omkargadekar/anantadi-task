import React, { useState, useEffect } from "react";
import axios from "axios";

const DynamoData = ({ userId }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

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
      }
    };

    fetchData();
  }, [userId]);

  if (error) {
    return <div>Error: {error.message}</div>;
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
