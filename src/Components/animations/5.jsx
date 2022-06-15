import styled from "styled-components";

const BACKGROUND = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 20px;
  background: linear-gradient(
    to right, #833ab4,
    #fd1d1d, #fcb045
  );
  background-size: 400% 400%;
  animation: ab 10s infinite ease-in-out;
  @keyframes ab {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  } 
`

export default function() {
  return <BACKGROUND />
}