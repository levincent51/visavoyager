import React from "react";
import { TopBar } from "..";


export const TopBarWrapper = ({ text }) => {
  return (
    <TopBar
      className="top-bar-instance"
      headerClassName="design-component-instance-node"
      text={text}
      visible={false}
    />
  );
};
