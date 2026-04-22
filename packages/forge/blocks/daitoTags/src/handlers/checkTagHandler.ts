import { createActionHandler } from "@typebot.io/forge";
import { checkTag } from "../actions/checkTag";

export const checkTagHandler = createActionHandler(checkTag, {
  server: async ({ credentials, options, variables, logs }) => {
    if (!credentials?.baseUrl || !credentials?.apiKey) {
      return logs.add("URL e API Key são obrigatórios");
    }

    // Get phone from remoteJid variable (auto-injected by Evolution API)
    const phone = variables.get("remoteJid")?.toString().split("@")[0] || variables.get("phone")?.toString() || "";
    if (!phone) {
      return logs.add("Telefone do contato não disponível");
    }

    try {
      const url = `${credentials.baseUrl}/api/tags/action?do=check&phone=${encodeURIComponent(phone)}&tag=${encodeURIComponent(options.tagName || "")}&key=${encodeURIComponent(credentials.apiKey)}`;
      const res = await fetch(url);
      const data = await res.json();

      if (options.saveResultInVariableId) {
        variables.set([{ id: options.saveResultInVariableId, value: data.hasTag ? "Contém tag" : "Não contém tag" }]);
      }
    } catch (err) {
      logs.add(`Erro ao verificar tag: ${err}`);
    }
  },
});
