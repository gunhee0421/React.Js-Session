// button styled-component 예제
// import styled from "styled-components";

// const StyledButton = styled.button`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 1rem;
//   line-height: 1.5;
//   border: 1px solid lightgray;

//   color: ${(props) => props.color || "gray"};
//   background: ${(props) => props.background || "white"};
// `;

// export const ButtonComponent = ({ color, background, label }) => {
//   return (
//     <StyledButton color={color} background={background}>
//       {label}
//     </StyledButton>
//   );
// };

// button css 파일 import 예제
import "../css/global.css";

export const ButtonComponentCss = ({ label }) => {
  return <button className="styled-button">{label}</button>;
};
