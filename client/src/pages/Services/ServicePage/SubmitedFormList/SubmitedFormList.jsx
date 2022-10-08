import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../../../Components/SearchFun/SearchBar";
import "./SubmitedFormList.css";
function SubmitedFormList({ Sid, servN }) {
  const SubmitedFormData = useSelector(
    (s) => s.submitFormReducer
  )?.data?.filter((q) => q?.ServiceId === Sid);
  const [searchId, setSearchId] = useState();

  const TitleArray = SubmitedFormData?.filter((q) =>
    q?._id?.includes(searchId)
  );
  const SubmitedFormDataOrSearch =
    !searchId ? SubmitedFormData : TitleArray;
  return (
    <>
      {SubmitedFormData?.length === 0 ? (
        <>
          <div
            className="heading_txt_servisesPage"
            style={{ textAlign: "center" }}
          >
            <>None Form Submited yet</>
          </div>
        </>
      ) : (
        <>
          <div className="headings_servisesPage">
            <div className="heading_txt_servisesPage">Submited Form List</div>
          </div>
          <SearchBar
            TitleArray={TitleArray}
            searchQuery={searchId}
            setSearchQuery={setSearchId}
          />
          <div className="submitedForm_List_Cont">
            {SubmitedFormDataOrSearch?.filter(
              (q) => servN?.LabelDocs.length === q.docFilePic.length
            )
              ?.reverse()
              .map((m) => {
                return (
                  <Link
                    key={m?._id}
                    to={`/services/submitedForm/${m?._id}/${Sid}`}
                    className="list_item_submitedFormLst"
                  >
                    {m?._id}
                  </Link>
                );
              })}
          </div>
        </>
      )}
    </>
  );
}

export default SubmitedFormList;

// {
/* <div className="submitedForm_List_Cont">
  <Link to={'/'} className="list_item_submitedFormLst">name</Link>
  <Link to={'/'} className="list_item_submitedFormLst">name</Link>
  <Link to={'/'} className="list_item_submitedFormLst">name</Link>
  <Link to={'/'} className="list_item_submitedFormLst">name</Link>
  <Link to={'/'} className="list_item_submitedFormLst">name</Link>
</div> */
// }
