import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postService } from "../../actions/service";
function AddServices({ setAddserviceData }) {
  const dispatch = useDispatch();
  const [serviceNAme, setserviceNAme] = useState();

  const handleSubmit = () => {
    if (!serviceNAme) {
      alert("Enter Service Name");
    } else {
      dispatch(postService({ ServiceName: serviceNAme }));
      setAddserviceData(false);
      alert("Service Added Successfully !")
    }
  };
  return (
    <div className="cont_AddData">
      <div className="cont2_AddData">
        <input
          type="submit"
          name="date"
          value="x"
          onClick={() => setAddserviceData(false)}
          className="ibtn_x_AddData"
        />
        <div className="input_tags_AddData">
          <div className="heading_AddData">Enter Details</div>
          <input
            className="ibox_AddData"
            type="text"
            placeholder="Enter Service Name Here..."
            onChange={(e) => setserviceNAme(e.target.value)}
          />

          <input
            type="submit"
            name="submit"
            value="Add Data"
            className="ibtn_AddData"
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </div>
  );
}

export default AddServices;
