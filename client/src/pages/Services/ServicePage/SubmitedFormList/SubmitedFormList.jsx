import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SubmitedFormList.css";
function SubmitedFormList({ Sid, servN }) {
  const SubmitedFormData = useSelector(
    (s) => s.submitFormReducer
  )?.data?.filter((q) => q?.ServiceId === Sid);

  // console.log(servN,SubmitedFormData)
  return (
    <>
      <div className="headings_servisesPage">
        <div className="heading_txt_servisesPage">SubmitedFormList</div>
      </div>
      <div className="submitedForm_List_Cont">
        {SubmitedFormData?.filter(
          (q) =>(servN?.LabelDocs.length === q.docFilePic.length)
        )
          ?.reverse()
          .map((m) => {
            return (
              <Link
                to={`/services/submitedForm/${m?._id}/${Sid}`}
                className="list_item_submitedFormLst"
              >
                {m?.Name}
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default SubmitedFormList;
