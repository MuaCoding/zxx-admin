import React from "react";
import { Route } from "react-router-dom";
import asyncComponent from "./../asyncComponent.js";

const HomeIndex = asyncComponent(() =>
  import("@/components/home/homeIndex.js")
);

export default (
  <div>
    <Route path="/home/index" component={HomeIndex} />
  </div>
);
