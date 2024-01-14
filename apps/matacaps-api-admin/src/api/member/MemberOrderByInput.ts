import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
