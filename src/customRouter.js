import { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";

export default function CustomRouter({ history, ...props }) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return (
    <Router
      {...props}
      navigator={history}
      location={state.location}
      navigationType={state.action}
    />
  );
}
