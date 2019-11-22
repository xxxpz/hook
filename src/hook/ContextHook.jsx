import React, { useContext } from "react";

function ContextHook(props) {
  const theme = useContext(props.ThemeContext);

  return <div>{theme.count || "no"}</div>;
}

export default ContextHook;
