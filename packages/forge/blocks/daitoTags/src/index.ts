import { createBlock } from "@typebot.io/forge";
import { addTag } from "./actions/addTag";
import { removeTag } from "./actions/removeTag";
import { checkTag } from "./actions/checkTag";
import { auth } from "./auth";
import { DaitoLogo } from "./logo";

export const daitoTagsBlock = createBlock({
  id: "daito-tags",
  name: "Daito Tags",
  tags: ["tags", "contatos", "crm", "daito"],
  LightLogo: DaitoLogo,
  auth,
  actions: [addTag, removeTag, checkTag],
});
