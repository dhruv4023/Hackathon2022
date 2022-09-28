import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editService } from "../../../../actions/service";
import AddInoutBox from "../../../../Components/DisplayEditInputBox/AddInoutBox";
import DisplayEditInputBox from "../../../../Components/DisplayEditInputBox/DisplayEditInputBox";

function ReqDoc({ servN, Sid, adminUser }) {
  const arryNm = "ReqDoc";
  const dispatch = useDispatch();
  const [reqDoc, setReqDoc] = useState("");
    // console.log(servN);

  const addReqDoc = () => {
    if (reqDoc) {
      dispatch(
        editService({
          id: Sid,
          serviceBody: { data: reqDoc, operation: -1, arryNm:arryNm },
        })
      );
    }
    setReqDoc("");
  };

  return (
    <div className="part_cont_servicePage">
      <div className="headings_servisesPage">
        <div className="heading_txt_servisesPage">Require Documents :</div>
        {adminUser && (
          <b className="add_btn_servicePage">
            <AddInoutBox
              placHold_txt={"Enter To add"}
              val={reqDoc}
              setVal={setReqDoc}
              handleSave={addReqDoc}
            />
          </b>
        )}
      </div>
      {servN?.ReqDoc?.map((rd) => {
        return (
          <div key={rd} className="item_servicepage">
            <DisplayEditInputBox
              arryNm={arryNm}
              Sid={Sid}
              textTodisplay={rd}
              adminUser={adminUser}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ReqDoc;
// const reqDocument = [
//     "Ration Card",
//     "Electricity bill",
//     "Water bill (not older than three months)",
//     "Gas connection",
//     "Bank Passbook",
//     "Post Office Account Statement / Passbook",
//     "Driving License",
//     "Government Photo ID cards/service photo identity card issued by Public Sector Undertakings (PSU)",
//   ];
