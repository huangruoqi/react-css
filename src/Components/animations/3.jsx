import styled from "styled-components";

const IMG = styled.img`
  width:80%;
  animation: rotate-hue 2s alternate infinite;
  @keyframes rotate-hue {
    100% {
      filter: hue-rotate(360deg)
    }
  }
`

export default function() {
  return <IMG src='assets/blob.png'></IMG>
}