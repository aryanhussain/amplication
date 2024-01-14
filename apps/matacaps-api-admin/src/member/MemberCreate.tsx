import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="last_name" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
