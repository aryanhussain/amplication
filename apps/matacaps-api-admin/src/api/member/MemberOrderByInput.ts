import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  dob?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  profilePic?: SortOrder;
  updatedAt?: SortOrder;
};
