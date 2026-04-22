import { parseBlockCredentials, parseBlockSchema } from "@typebot.io/forge";
import { auth } from "./auth";
import { daitoTagsBlock } from "./index";

export const daitoTagsBlockSchema = parseBlockSchema(daitoTagsBlock);
export const daitoTagsCredentialsSchema = parseBlockCredentials(
  daitoTagsBlock.id,
  auth,
);
