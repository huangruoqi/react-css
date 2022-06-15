import styled from "styled-components";
const StyledButton = styled.div`
  text-decoration: none;
  font-size: 25px;
  color: #1fe8b6;
  padding: 20px 50px;
  border: 3px solid #1fe8b6;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border: inherit;
    transition: all .5s;
  }
  &::before {
    top:-15px;
    left:-15px;
    border-width: 3px 0 0 3px;
  }
  &::after {
    bottom: -15px;
    right: -15px;
    border-width: 0 3px 3px 0;
  }
  &:hover::before,
  &:hover::after {
    width: calc(100% + 27px);
    height: calc(100% + 27px);
    cursor: pointer;
  }
`;

export default function({onClick}) { 
  return <StyledButton onClick={onClick}>Item</StyledButton> 
}