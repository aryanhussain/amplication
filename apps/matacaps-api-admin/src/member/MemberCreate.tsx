import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <DateTimeInput label="dob" source="dob" />
        <TextInput label="first_name" source="firstName" />
        <TextInput label="last_name" source="lastName" />
        <TextInput label="profile_pic" source="profilePic" />
      </SimpleForm>
    </Create>
  );
};
