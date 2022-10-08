import React, { useRef, useState } from "react";

import { send } from "emailjs-com";
export const Z = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_y1u4siu", "template_r9se9qi", toSend, "R0lpkcNWBDY0cvbQh")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();
  //     console.log(e.target);
  //     emailjs
  //       .sendForm(
  //         "service_y1u4siu",
  //         "template_r9se9qi",
  //         e.target,
  //         "R0lpkcNWBDY0cvbQh"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //     console.log("done!");
  //     // emailjs
  //     //   .sendForm(
  //     //     "YOUR_SERVICE_ID",
  //     //     "YOUR_TEMPLATE_ID",
  //     //     form.current,
  //     //     "YOUR_PUBLIC_KEY"
  //     //   )
  //     //   .then(
  //     //     (result) => {
  //     //       console.log(result.text);
  //     //     },
  //     //     (error) => {
  //     //       console.log(error.text);
  //     //     }
  //     //   );
  //   };

  return (
    <>
      <div className="App">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="from name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="to_name"
            placeholder="to name"
            value={toSend.to_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <input type="submit" value={"Submit"} />
        </form>
      </div>
    </>
  );
};
