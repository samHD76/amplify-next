import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    socialProviders: {
      google: {
        clientId: "YOUR_GOOGLE_CLIENT_ID",
        clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
      },
      facebook: {
        appId: "YOUR_FACEBOOK_APP_ID",
        appSecret: "YOUR_FACEBOOK_APP_SECRET",
      },
      microsoft: {
        clientId: "YOUR_MICROSOFT_CLIENT_ID",
        clientSecret: "YOUR_MICROSOFT_CLIENT_SECRET",
      },
    },
  },
});
