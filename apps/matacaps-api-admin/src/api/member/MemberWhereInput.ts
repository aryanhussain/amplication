import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MemberWhereInput = {
  address?: StringFilter;
  dob?: DateTimeNullableFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  profilePic?: StringNullableFilter;
};
