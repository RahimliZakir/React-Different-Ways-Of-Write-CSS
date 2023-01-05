import React from "react";

import InlineStyles from "./components/InlineStyles";
import PlainCss from "./components/PlainCss";
import WithSass from "./components/WithSass";
import CssModule from "./components/module/CssModule";

const App = () => {
  return (
    <div className="App mt-5 d-flex flex-column align-items-center">
      <InlineStyles />
      <hr />
      <PlainCss />
      <hr />
      <WithSass />
      <hr />
      <CssModule />
    </div>
  );
};

export default App;
