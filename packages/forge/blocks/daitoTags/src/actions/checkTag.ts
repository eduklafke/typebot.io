import { createAction, option } from "@typebot.io/forge";
import { auth } from "../auth";

export const checkTag = createAction({
  auth,
  name: "Verificar Tag",
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
        placeholder: "VIP",
        isRequired: true,
      },
    }),
    saveResultInVariableId: option.string.meta({
      layout: {
        label: "Salvar resultado (true/false) em",
        inputType: "variableDropdown",
      },
    }),
  }),
  getSetVariableIds: (options) =>
    options.saveResultInVariableId ? [options.saveResultInVariableId] : [],
});
