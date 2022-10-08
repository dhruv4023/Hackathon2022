import React from "react";
import { useState } from "react";
import InputField from "./InputField";
import AddressBox from "./AddressBox";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import moment from "moment";
import { postSubmitForm } from "../../../../../actions/submitform";
import { editService } from "../../../../../actions/service";
function FieldList({ adminUser, Sid, currentUser, LableArray }) {
  const dispatch = useDispatch();
  const [sName, setsName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [aadharcardNo, setAadharcardNo] = useState(null);
  const [pincode, setPincode] = useState("");
  const [village, setVillage] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  // console.log(currentUser)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("plz Login To Fill The Form !");
    } else if (!village && LableArray?.includes("Village")) {
      alert("plz select village");
    } else {
      dispatch(
        postSubmitForm({
          ServiceId: Sid,
          Uid: currentUser?._id,
          Name: sName,
          NameOfFather: fatherName,
          DOB: dob,
          AadharcardNo: aadharcardNo,
          Address: address,
          Village: village,
          Taluka: "Palanpur",
          District: "Banaskantha",
          County: "India",
          State: "Gujarat",
          Pincode: pincode,
          MobileNo: mobileNo,
          Gender: gender,
        })
      );
    }
  };
  let x;
  const handleDelLabel = (lableInput) => {
    dispatch(
      editService({
        id: Sid,
        serviceBody: {
          data: lableInput,
          operation: "del",
          arryNm: "LabelField",
        },
      })
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="item_servicepage">
        <>
          {
            (x = LableArray?.includes("Name") && (
              <>
                <InputField
                  handleDelLabel={handleDelLabel}
                  req={x}
                  tip={"Plezse Enter Name as per Your Aadharcard"}
                  labelFld={"Name"}
                  lableInput={"Name"}
                  setVal={setsName}
                />
              </>
            ))
          }
        </>
        <>
          {
            (x = LableArray?.includes("DOB") && (
              <InputField
                labelFld={"DOB"}
                handleDelLabel={handleDelLabel}
                lableInput={"Date of Birthday"}
                type={"Date"}
                mx={moment().format("YYYY-MM-DD")}
                setVal={setDob}
              />
            ))
          }
        </>
        <>
          {
            (x = LableArray?.includes("NameOfFather") && (
              <InputField
                req={x}
                tip={"Plezse Enter Your Father Name as per Your Aadharcard"}
                handleDelLabel={handleDelLabel}
                labelFld={"NameOfFather"}
                lableInput={"Full Name of Father"}
                setVal={setFatherName}
              />
            ))
          }
        </>
        <>
          {LableArray?.includes("Gender") && (
            <div className="InputField_cont_servicePage">
              <div className="label_FormSubmit">
                Gender{" "}
                {adminUser && (
                  <b
                    onClick={() => handleDelLabel("Gender")}
                    className="Del_app"
                  >
                    <BsFillTrashFill />
                  </b>
                )}
              </div>
              <div className="inputTag_FormSubmit">
                :
                <input
                  type="radio"
                  value={"Male"}
                  required
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
                <input
                  type="radio"
                  value={"Female"}
                  required
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </div>
            </div>
          )}
        </>
        <>
          {
            (x = LableArray?.includes("AadharcardNo") && (
              <>
                {" "}
                <InputField
                  lableInput={"Aadharcard No"}
                  mxlen={12}
                  labelFld={"AadharcardNo"}
                  req={x}
                  tip={"Enter 12 Digit Aadhar Number"}
                  mnlen={12}
                  setVal={setAadharcardNo}
                  handleDelLabel={handleDelLabel}
                />
              </>
            ))
          }
        </>
        <>
          {
            (x = LableArray?.includes("Pincode") && (
              <>
                <InputField
                  lableInput={"Pincode"}
                  mxlen={6}
                  handleDelLabel={handleDelLabel}
                  labelFld={"Pincode"}
                  mnlen={6}
                  req={x}
                  setVal={setPincode}
                />
              </>
            ))
          }
        </>

        <AddressBox
          adminUser={adminUser}
          handleDelLabel={handleDelLabel}
          LableArray={LableArray}
          setVillage={setVillage}
        />
        <>
          {
            (x = LableArray?.includes("Address") && (
              <>
                {" "}
                <InputField
                  req={x}
                  tip={"Enter Your permanent Address"}
                  handleDelLabel={handleDelLabel}
                  labelFld={"Address"}
                  lableInput={"Address"}
                  setVal={setAddress}
                />
              </>
            ))
          }
        </>
        <>
          {
            (x = LableArray?.includes("MobileNo") && (
              <>
                {" "}
                <InputField
                  lableInput={"Mobile No"}
                  mnlen={10}
                  req={x}
                  tip={"Enter 10 digit Mobile Number without Country Code"}
                  handleDelLabel={handleDelLabel}
                  labelFld={"MobileNo"}
                  mxlen={10}
                  setVal={setMobileNo}
                />
              </>
            ))
          }
        </>
        {!adminUser && (
          <>
            <input
              type="submit"
              required
              name="submit"
              value="Submit The Form"
              className="ibtn_AddData"
            />
          </>
        )}
      </form>
    </>
  );
}

export default FieldList;
