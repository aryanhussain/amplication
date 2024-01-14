import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="thumbnail_url" source="thumbnailUrl" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
