import React from "react";
import { useSelector } from "react-redux";

import FormDataFields from "./FormDataFields/FormDataFields";
import FormFileFields from "./FormFileFields/FormFileFields";

import "./FormSubmit.css";
function FormSubmit({ Sid, servN, adminUser }) {
  const currentUser = useSelector((s) => s.currentUserReducer)?.result;
  const currentUsersFormData = useSelector(
    (s) => s.submitFormReducer
  )?.data?.filter(
    (q) => q?.Uid === currentUser?._id && Sid === q?.ServiceId
  )[0];
  // console.log(currentUsersFormData);
  return (
    <div className="part_cont_servicePage">
      <FormDataFields
        Sid={Sid}
        currentUser={currentUser}
        currentUsersFormData={currentUsersFormData}
        servN={servN}
        adminUser={adminUser}
      />
      <FormFileFields
        Sid={Sid}
        currentUser={currentUser}
        currentUsersFormData={currentUsersFormData}
        servN={servN}
        adminUser={adminUser}
      />
    </div>
  );
}

export default FormSubmit;
