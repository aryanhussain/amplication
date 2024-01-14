import { JsonValue } from "type-fest";

export type Member = {
  address: JsonValue;
  createdAt: Date;
  firstName: string;
  id: string;
  lastName: string;
  updatedAt: Date;
};
