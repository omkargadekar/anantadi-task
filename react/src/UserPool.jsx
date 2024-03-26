import { CognitoUserPool } from "amazon-cognito-identity-js";

const UserPoolData = {
  UserPoolId: "us-east-1_MYAF59EGL",
  ClientId: "ksnegahkpg0nrcr7s8c2en0vv",
};

const UserPool = new CognitoUserPool(UserPoolData);

export default UserPool;
