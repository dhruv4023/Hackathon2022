import React from "react";
import { useState } from "react";
import InputField from "./InputField";
import AddressBox from "./AddressBox";
import { useDispatch } from "react-redux";
import moment from "moment";
import { postSubmitForm } from "../../../../actions/submitform";
function FieldList({ lableInp, arryNm, Sid, adminUser, setVal }) {
  const dispatch = useDispatch();
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [sName, setsName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [gender, setGender] = useState("");
  const [aadharcardNo, setAadharcardNo] = useState("");
  const [pincode, setPincode] = useState("");
  const [village, setVillage] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  // console.log(gender, village);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!village) {
      alert("plz select village");
    } else {
      dispatch(
        postSubmitForm({
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
  return (
    <form onSubmit={handleSubmit} className="item_servicepage">
      <InputField lableInput={"First Name"} setVal={setfName} />
      <InputField lableInput={"Last Name"} setVal={setlName} />
      <InputField lableInput={"Surename"} setVal={setsName} />
      <InputField
        lableInput={"Date of Birthday"}
        type={"Date"}
        mx={moment().format("YYYY-MM-DD")}
        setVal={setDob}
      />

      <InputField lableInput={"Full Name of Father"} setVal={setFatherName} />
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
      <InputField
        lableInput={"Aadharcard No"}
        mxlen={12}
        mnlen={12}
        setVal={setAadharcardNo}
      />
      <InputField
        lableInput={"Pincode"}
        mxlen={6}
        mnlen={6}
        setVal={setPincode}
      />
      <AddressBox setVillage={setVillage} />
      <InputField lableInput={"Address"} setVal={setAddress} />
      <InputField
        lableInput={"Mobile No"}
        mnlen={10}
        mxlen={10}
        setVal={setMobileNo}
      />
      <input
        type="submit"
        required
        name="submit"
        value="Submit The Form"
        className="ibtn_AddData"
      />x``
    </form>
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
