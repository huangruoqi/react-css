import styled from "styled-components";
const BELL = styled.div`
  width: 50px;
  height: 50px;
  padding: 12px 18px;
  background-color: #1a1b26;
  border-radius: 10px;
  cursor: pointer;

  &:hover .bell-icon{
    animation: shake 1s forwards;
  }

  @keyframes shake {
    10% {
      transform: rotate(15deg);
    } 
    20% {
      transform: rotate(-15deg);
    } 
    30% {
      transform: rotate(15deg);
    } 
    50% {
      transform: rotate(0deg);
    } 
  }
`;

const IMG = styled.img`
  max-width: 100%;
  filter: invert(100%);
`;

export default function () {
  return (
    <BELL>
      <IMG className='bell-icon' src="assets/bell.png" />
    </BELL>
  );
}
