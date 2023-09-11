const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth, auth } = require("google-auth-library");
const { fromServiceAccountFile } = auth;

const MODEL_NAME = "models/text-bison-001";
const SERVICE_ACCOUNT_KEY_PATH = "src/service-account-key.json";

(async () => {
  // Load credentials from the service account key file
  const authClient = await fromServiceAccountFile(SERVICE_ACCOUNT_KEY_PATH);

  const client = new TextServiceClient({ auth: authClient });

  const prompt = "Repeat after me: one, two,";

  client
    .generateText({
      parent: MODEL_NAME,
      payload: {
        text: prompt,
      },
    })
    .then((responses) => {
      const result = responses[0];
      console.log(JSON.stringify(result));
    });
})();
