import { createActionHandler } from "@typebot.io/forge";
import { removeTag } from "../actions/removeTag";

export const removeTagHandler = createActionHandler(removeTag, {
  server: async ({ credentials, options, logs }) => {
    if (!credentials?.baseUrl || !credentials?.apiKey) {
      return logs.add("URL e API Key são obrigatórios");
    }

    try {
      const url = `${credentials.baseUrl}/api/tags/action?do=remove&phone=${encodeURIComponent(options.phone || "")}&tag=${encodeURIComponent(options.tagName || "")}&key=${encodeURIComponent(credentials.apiKey)}`;
      await fetch(url);
    } catch (err) {
      logs.add(`Erro ao remover tag: ${err}`);
    }
  },
});
