import { createAction, option } from "@typebot.io/forge";
import { auth } from "../auth";

export const addTag = createAction({
  auth,
  name: "Adicionar Tag",
  options: option.object({
    phone: option.string.meta({
      layout: {
        label: "Telefone do contato",
        placeholder: "{{phone}}",
        isRequired: true,
      },
    }),
    tagName: option.string.meta({
      layout: {
        label: "Nome da tag",
        placeholder: "Lead Quente",
        isRequired: true,
        helperText: "Se a tag não existir, será criada automaticamente.",
      },
    }),
    saveResultInVariableId: option.string.meta({
      layout: {
        label: "Salvar resultado em",
        inputType: "variableDropdown",
      },
    }),
  }),
  getSetVariableIds: (options) =>
    options.saveResultInVariableId ? [options.saveResultInVariableId] : [],
});
