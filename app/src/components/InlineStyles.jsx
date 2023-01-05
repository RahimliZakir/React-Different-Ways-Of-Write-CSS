import React from "react";

const InlineStyles = () => {
  const styleObj = {
    color: "indigo",
    fontSize: "1.4rem",
    marginLeft: "7.5%",
  };

  return (
    <div>
      <span style={{ color: "orangered", fontWeight: "600" }}>Inline</span>
      <span style={styleObj}>Styles</span>
    </div>
  );
};

export default InlineStyles;
