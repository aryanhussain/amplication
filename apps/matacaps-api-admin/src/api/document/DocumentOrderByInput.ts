import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  thumbnailUrl?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
