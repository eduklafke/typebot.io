import { createAction, option } from "@typebot.io/forge";
import { auth } from "../auth";

export const removeTag = createAction({
  auth,
  name: "Remover Tag",
  options: option.object({
    tagName: option.string.meta({
      layout: {
        label: "Nome da tag",
        placeholder: "VIP",
        isRequired: true,
      },
    }),
  }),
});
