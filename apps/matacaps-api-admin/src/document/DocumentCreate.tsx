import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="thumbnail_url" source="thumbnailUrl" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
