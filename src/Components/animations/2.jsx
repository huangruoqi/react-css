import styled from "styled-components";
const StyledLoading = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
  }
  &::before {
    width:100%;
    height:100%;
    background-image: linear-gradient(
      0deg,#ff00cc 0%,
      #333399 100%
    );
    animation: spin .5s infinite linear;
  }
  &::after {
    width:85%;
    height: 85%;
    background-color: ${({theme})=>theme.bg};
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  @keyframes spin {
    to {
      transform: rotate(360deg)
    }
  }

`;

export default function() { 
  return <StyledLoading></StyledLoading> 
}