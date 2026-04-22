import { createActionHandler } from "@typebot.io/forge";
import { addTag } from "../actions/addTag";

export const addTagHandler = createActionHandler(addTag, {
  server: async ({ credentials, options, variables, logs }) => {
    if (!credentials?.baseUrl || !credentials?.apiKey) {
      return logs.add("URL e API Key são obrigatórios");
    }
    if (!options.phone || !options.tagName) {
      return logs.add("Telefone e nome da tag são obrigatórios");
    }

    try {
      const url = `${credentials.baseUrl}/api/tags/action?do=add&phone=${encodeURIComponent(options.phone)}&tag=${encodeURIComponent(options.tagName)}&key=${encodeURIComponent(credentials.apiKey)}`;
      const res = await fetch(url);
      const data = await res.json();

      if (options.saveResultInVariableId) {
        variables.set([{ id: options.saveResultInVariableId, value: data.success ? "true" : "false" }]);
      }
    } catch (err) {
      logs.add(`Erro ao adicionar tag: ${err}`);
    }
  },
});
