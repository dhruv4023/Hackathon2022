import React from "react";
import { ImPlus } from "react-icons/im";
import spin from "../../../Components/Navbar/LoginPageBlure/spin.gif";

import { useDispatch, useSelector } from "react-redux";
import { posthomedata } from "../../../actions/homedata";
import DisplayInputEditDelForAnnouncement from "../../../Components/DisplayEditInputBox/DisplayInputEditDelForAnnouncement";
import "./Annoucement.css";
import moment from "moment";
function Annoucement() {
  let i = 0;
  const arryNm = "Annoucement";
  const adminUser = useSelector((s) => s.authReducer)?.data;
  const annoucementList = useSelector((s) => s.homedataReducer)
    ?.data?.filter((q) => (q.arryNm = arryNm))
    ?.reverse();
  const dispatch = useDispatch();
  // console.log(annoucementList);
  const handlePostAnnouceMent = () => {
    dispatch(
      posthomedata({
        arryNm: arryNm,
        arryData: "Enter Annoucement...",
      })
    );
  };
  return (
    <div className="container_Annoucement">
      <div className="heding_App">
        <i>Anouncements</i>
        {adminUser && (
          <ImPlus
            onClick={() => handlePostAnnouceMent()}
            style={{ margin: "auto 0.2rem" }}
            className={"add_btn_ann"}
            size={22}
          />
        )}
      </div>
      <div className="annoucement_List">
        {annoucementList ? (
          <>
            {annoucementList?.map((m) => {
              return (
                <div className="lst_item_ann2">
                  <div className="lst_item_ann" key={m?.id}>
                    <div>
                      <div className="ball"></div>
                    </div>
                    <div className="annouce_list_text">
                      <DisplayInputEditDelForAnnouncement
                        _id={m?._id}
                        textTodisplay={m?.arryData}
                        adminUser={adminUser}
                        arryNm={arryNm}
                      />
                    </div>
                  </div>
                  <i className="annouce_list_date">
                    announced {moment(m?.PostedOn).fromNow()}
                  </i>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div className="loading_App">
              <div className="loading_App2">
                <img src={spin} alt="Loading..." />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Annoucement;
