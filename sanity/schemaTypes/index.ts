import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { startup } from "./startup";
import { playlist } from "./playlist";

const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
};export default schema;

