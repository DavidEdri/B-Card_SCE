import React from "react";
import { useTypedSelector } from "../../redux";

export default function Home() {
  const isLoggedin = useTypedSelector((state) => state.auth.isLoggedin);

  if (isLoggedin) window.location.href = "/user";

  return <div>Home</div>;
}
