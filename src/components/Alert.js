import React from "react";

export default function Alert(props) {
  //ye j gandi se chiz lihki hue hai to iska matlab hai ki peops.alert agar true hai to aage ki evaluate karo warna aake ki isme dekho mat agar solve na karo to

  //ye function mai isisliye likh raha hu taki mai dekh sakhu ki bhia success jo aa raha n alert me vo capital me aaye to uske liye apan ue function use kar rahe hai kyuki inbuild koi function nahi hai JS me iske liye apne pass
  const capitailize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitailize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
