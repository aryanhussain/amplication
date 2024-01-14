import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type MemberWhereInput = {
  address?: JsonFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
};
