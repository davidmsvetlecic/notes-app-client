export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "app-scratch-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://u0d91vnsaf.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_syqxGZIzG",
    APP_CLIENT_ID: "4v6g23hh0ccf7b8fttckfjl6re",
    IDENTITY_POOL_ID: "us-east-1:5fb7987d-d2b1-455d-888d-9acabff7617d"
  }
};
