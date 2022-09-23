import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postStaff } from "../../actions/staff";
function AddServices({ setAddserviceData }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [uploading, setUploading] = useState(false);

  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      if (percentage === 100) {
        setTimeout(function () {}, 3000);
      }
    },
  };

  const handleSubmit = (e) => {

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
            placeholder="Enter Name Here..."
            onChange={(e) => setName(e.target.value)}
          />
          {/* <input
            type="file"
            name="file"
            className="ibox_vidUpload"
            style={{ fontSize: "1rem" }}
            onChange={(e) => setPic(e.target.files[0])}
          /> */}
          {uploading ? (
            <b className="ibtn_AddData">Uploading...</b>
          ) : (
            <>
              <input
                type="submit"
                name="submit"
                value="Add Data"
                className="ibtn_AddData"
                onClick={handleSubmit}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddServices;
