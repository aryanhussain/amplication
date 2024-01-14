import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "thumbnailUrl";

export const DocumentTitle = (record: TDocument): string => {
  return record.thumbnailUrl?.toString() || String(record.id);
};
