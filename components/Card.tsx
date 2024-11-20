import React, { ReactNode } from "react";

type Children = {
  children: ReactNode;
};

const Card = ({ children }: Children) => {
  return <div className="shadow-custom p-5 rounded-sm">{children}</div>;
};

export default Card;
