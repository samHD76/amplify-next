import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  ThreatDetection: a
    .model({
      timestamp: a.string(),
      threatType: a.string(),
      severity: a.string(),
      description: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  EndpointProtection: a
    .model({
      deviceId: a.string(),
      status: a.string(),
      lastChecked: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  AutomatedResponse: a
    .model({
      actionId: a.string(),
      actionType: a.string(),
      status: a.string(),
      timestamp: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
