import React from "react";

import InlineStyles from "./components/InlineStyles";
import PlainCss from "./components/PlainCss";

const App = () => {
  return (
    <div className="App mt-5 d-flex flex-column align-items-center">
      <InlineStyles />
      <hr />
      <PlainCss />
    </div>
  );
};

export default App;
