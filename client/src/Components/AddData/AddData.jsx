import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./AddData.css";
function AddData() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const handleSubmit = (e) => {
    if (!name) {
      alert("Plz Enter The Name !");
    } else if (!email) {
      alert("Plz Enter The Email !");
    } else if (!post) {
      alert("Plz Enter The Post !");
    } else {
        // dispatch(addStaffData())
    }
  };
  return (
    <div className="cont_AddData">
      <div className="cont2_AddData">
        <input type="submit" name="date" value="x" className="ibtn_x_AddData" />
        <div className="input_tags_AddData">
          <div className="heading_AddData">Enter Details</div>
          <input
            className="ibox_AddData"
            type="text"
            placeholder="Enter Name Here..."
          />
          <input
            className="ibox_AddData"
            type="email"
            placeholder="Enter email Here..."
          />
          <input
            className="ibox_AddData"
            type="text"
            placeholder="Enter post Here..."
          />
          <input
            type="submit"
            name="submit"
            value="Add Data"
            className="ibtn_AddData"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default AddData;
