import { createAction, option } from "@typebot.io/forge";
import { auth } from "../auth";

export const checkTag = createAction({
  auth,
  name: "Verificar Tag",
  options: option.object({
    tagName: option.string.meta({
      layout: {
        label: "Nome da tag",
        placeholder: "VIP",
        isRequired: true,
      },
    }),
    saveResultInVariableId: option.string.meta({
      layout: {
        label: "Salvar resultado em",
        inputType: "variableDropdown",
        helperText: "Salva 'Contém tag' ou 'Não contém tag'. Use um bloco Condição depois para ramificar.",
      },
    }),
  }),
  getSetVariableIds: (options) =>
    options.saveResultInVariableId ? [options.saveResultInVariableId] : [],
});
