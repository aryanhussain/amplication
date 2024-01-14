import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="thumbnail_url" source="thumbnailUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
