import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="last_name" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
