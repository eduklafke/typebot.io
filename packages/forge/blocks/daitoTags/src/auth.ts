import { createAuth, option } from "@typebot.io/forge";

export const auth = createAuth({
  type: "encryptedCredentials",
  name: "Daito Shooter",
  schema: option.object({
    baseUrl: option.string.meta({
      layout: {
        label: "URL do Shooter",
        placeholder: "https://shooter.daitodigital.com",
        isRequired: true,
        withVariableButton: false,
      },
    }),
    apiKey: option.string.meta({
      layout: {
        label: "API Key",
        isRequired: true,
        inputType: "password",
        withVariableButton: false,
      },
    }),
  }),
});
