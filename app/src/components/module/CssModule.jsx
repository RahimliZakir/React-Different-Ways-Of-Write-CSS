import React from "react";

import ModuleStyle from "./style.module.css";

const CssModule = () => {
  return (
    <div className={ModuleStyle["root"]}>
      <span className={ModuleStyle["first"]}>Css</span>
      <span className={ModuleStyle["second"]}>Module</span>
    </div>
  );
};

export default CssModule;
