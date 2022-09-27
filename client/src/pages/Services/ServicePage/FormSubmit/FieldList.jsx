import React from "react";
import { useState } from "react";
import InputField from "./InputField";
import AddressBox from "./AddressBox";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { postSubmitForm } from "../../../../actions/submitform";
function FieldList({ Sid, currentUser, LableArray }) {
  const dispatch = useDispatch();
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [sName, setsName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [aadharcardNo, setAadharcardNo] = useState(null);
  const [pincode, setPincode] = useState("");
  const [village, setVillage] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!village && LableArray.includes("Village")) {
      alert("plz select village");
    } else {
      dispatch(
        postSubmitForm({
          ServiceId: Sid,
          Uid: currentUser?._id,
          Name: sName + " " + fName + " " + lName,
          NameOfFather: fatherName,
          DOB: dob,
          AadharcardNo: aadharcardNo,
          Address: address,
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
  // console.log(LableArray.includes("Name"))
  return (
    <>
      <form onSubmit={handleSubmit} className="item_servicepage">
        <>
          {
            (x = LableArray.includes("Name") && (
              <>
                <InputField
                  req={x}
                  lableInput={"First Name"}
                  setVal={setfName}
                />
                <InputField
                  req={x}
                  lableInput={"Last Name"}
                  setVal={setlName}
                />
                <InputField req={x} lableInput={"Surename"} setVal={setsName} />
              </>
            ))
          }
        </>
        <>
          {
            (x = LableArray.includes("DOB") && (
              <InputField
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
            (x = LableArray.includes("NameOfFather") && (
              <InputField
              req={x}
                lableInput={"Full Name of Father"}
                setVal={setFatherName}
              />
            ))
          }
        </>
        <>
          {
            (LableArray.includes("Gender") && (
              <div className="InputField_cont_servicePage">
                <div className="label_FormSubmit">Gender</div>
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
            ))
          }
        </>
        <>
          {
            (x = LableArray.includes("AadharcardNo") && (
              <>
                {" "}
                <InputField
                  lableInput={"Aadharcard No"}
                  mxlen={12}
                  req={x}
                  mnlen={12}
                  setVal={setAadharcardNo}
                />
              </>
            ))
          }
        </>
        <>
          {
            (x = LableArray.includes("Pincode") && (
              <>
                <InputField
                  lableInput={"Pincode"}
                  mxlen={6}
                  mnlen={6}
                  req={x}
                  setVal={setPincode}
                />
              </>
            ))
          }
        </>

        <AddressBox LableArray={LableArray} setVillage={setVillage} />
        <>
          {
            (x = LableArray.includes("Address") && (
              <>
                {" "}
                <InputField
                  req={x}
                  lableInput={"Address"}
                  setVal={setAddress}
                />
              </>
            ))
          }
        </>
        <>
          {
            (x = LableArray.includes("MobileNo") && (
              <>
                {" "}
                <InputField
                  lableInput={"Mobile No"}
                  mnlen={10}
                  req={x}
                  mxlen={10}
                  setVal={setMobileNo}
                />
              </>
            ))
          }
        </>

        <input
          type="submit"
          required
          name="submit"
          value="Submit The Form"
          className="ibtn_AddData"
        />
      </form>
    </>
  );
}

export default FieldList;
// Name
// ,NameOfFather
// ,Age
// ,AadharcardNo
// ,Address
// ,Taluka
// ,District
// ,Pincode
// ,Gender

/*
      const allData = new FormData();
      allData.append("Name", sName + " " + fName + " " + lName);
      allData.append("NameOfFather", fatherName);
      allData.append("DOB", dob);
      allData.append("AadharcardNo", aadharcardNo);
      allData.append("Address", address);
      allData.append("Taluka", "Palanpur");
      allData.append("District", "Banaskantha");
      allData.append("County", "India");
      allData.append("State", "Gujarat");
      allData.append("Pincode", pincode);
      allData.append("MobileNo", mobileNo);
      allData.append("Gender", gender);
*/
