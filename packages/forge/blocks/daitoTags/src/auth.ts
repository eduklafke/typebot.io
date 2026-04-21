import { option, AuthDefinition } from "@typebot.io/forge";

export const auth = {
  type: "encryptedCredentials",
  name: "Daito Shooter",
  schema: option.object({
    baseUrl: option.string.meta({
      layout: {
        label: "URL do Shooter",
        placeholder: "https://shooter.daitodigital.com",
        isRequired: true,
      },
    }),
    apiKey: option.string.meta({
      layout: {
        label: "API Key",
        isRequired: true,
        inputType: "password",
      },
    }),
  }),
} satisfies AuthDefinition;
