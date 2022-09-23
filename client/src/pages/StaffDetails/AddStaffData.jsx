import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postStaff } from "../../actions/staff";
function AddStaffData({ setStaffAddData }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [picFile, setPic] = useState();
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
    console.log(picFile);
    if (!name) {
      alert("Plz Enter The Name !");
    } else if (!email) {
      alert("Plz Enter The Email !");
    } else if (!post) {
      alert("Plz Enter The Post !");
    } else if (!picFile) {
      alert("Plz Select A picture !");
    } else if (picFile.size > 1000000000) {
      alert("Please Upload Pic less than 1kb File");
    } else {
      setUploading(true);
      const staffData = new FormData();
      staffData.append("file", picFile);
      staffData.append("name", name);
      staffData.append("email", email);
      staffData.append("post", post);
      dispatch(postStaff({ staffData, singleFileOptions }));
      setStaffAddData(false);
      setUploading(false);
    }
  };
  return (
    <div className="cont_AddData">
      <div className="cont2_AddData">
        <input
          type="submit"
          name="date"
          value="x"
          onClick={() => setStaffAddData(false)}
          className="ibtn_x_AddData"
        />
        <div className="input_tags_AddData">
          <div className="heading_AddData">Enter Details</div>
          <input
            required
            className="ibox_AddData"
            type="text"
            id="name"
            placeholder="Enter Name Here..."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="ibox_AddData"
            type="email"
            placeholder="Enter email Here..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="ibox_AddData"
            type="text"
            placeholder="Enter post Here..."
            onChange={(e) => setPost(e.target.value)}
          />
          <input
            type="file"
            name="file"
            className="ibox_AddData"
            style={{ fontSize: "1rem" }}
            onChange={(e) => setPic(e.target.files[0])}
          />
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

export default AddStaffData;
