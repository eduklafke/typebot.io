import { createActionHandler } from "@typebot.io/forge";
import { removeTag } from "../actions/removeTag";

export const removeTagHandler = createActionHandler(removeTag, {
  server: async ({ credentials, options, variables, logs }) => {
    if (!credentials?.baseUrl || !credentials?.apiKey) {
      return logs.add("URL e API Key são obrigatórios");
    }

    const phone = variables.get("remoteJid")?.toString().split("@")[0] || variables.get("phone")?.toString() || "";
    if (!phone) {
      return logs.add("Telefone do contato não disponível");
    }

    try {
      const url = `${credentials.baseUrl}/api/tags/action?do=remove&phone=${encodeURIComponent(phone)}&tag=${encodeURIComponent(options.tagName || "")}&key=${encodeURIComponent(credentials.apiKey)}`;
      await fetch(url);
    } catch (err) {
      logs.add(`Erro ao remover tag: ${err}`);
    }
  },
});
