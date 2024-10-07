// import React, { Component } from "react";

// class AppClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "John",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>Class: {this.state.name}</p>
//       </div>
//     );
//   }
// }

// export default AppClass;

import React, { useState } from "react";

const AppFunction = () => {
  const name = "John";
  // react-hook으로 상태관리
  // const [name, setName] = useState("John");

  return (
    <div>
      <p>Function: {name}</p>
    </div>
  );
};

export default AppFunction;
