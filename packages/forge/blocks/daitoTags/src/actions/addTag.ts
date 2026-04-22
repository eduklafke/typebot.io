import { createAction, option } from "@typebot.io/forge";
import { auth } from "../auth";

export const addTag = createAction({
  auth,
  name: "Adicionar Tag",
  options: option.object({
    tagName: option.string.meta({
      layout: {
        label: "Nome da tag",
        placeholder: "Lead Quente",
        isRequired: true,
        helperText: "Se a tag não existir, será criada automaticamente.",
      },
    }),
  }),
});
