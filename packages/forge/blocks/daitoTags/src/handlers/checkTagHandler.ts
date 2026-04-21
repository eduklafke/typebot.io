import { createActionHandler } from "@typebot.io/forge";
import { checkTag } from "../actions/checkTag";

export const checkTagHandler = createActionHandler(checkTag, {
  server: async ({ credentials, options, variables, logs }) => {
    if (!credentials?.baseUrl || !credentials?.apiKey) {
      return logs.add("URL e API Key são obrigatórios");
    }

    try {
      const url = `${credentials.baseUrl}/api/tags/action?do=check&phone=${encodeURIComponent(options.phone || "")}&tag=${encodeURIComponent(options.tagName || "")}&key=${encodeURIComponent(credentials.apiKey)}`;
      const res = await fetch(url);
      const data = await res.json();

      if (options.saveResultInVariableId) {
        variables.set(options.saveResultInVariableId, data.hasTag ? "true" : "false");
      }
    } catch (err) {
      logs.add(`Erro ao verificar tag: ${err}`);
    }
  },
});
