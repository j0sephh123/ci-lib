import React from 'react';
const style = {
  border: '1px solid pink',
  padding: 20,
  margin: 20,
  textAlign: "center",
  fontSize: "1.2em"
};

const FirstComponent = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, children);
};

export default FirstComponent;