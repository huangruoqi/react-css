import styled from "styled-components";

const CARD = styled.div`
  width:150px ;
  height: 200px;
  background-color: #333;
  border-radius: 10px;
  outline: 1px solid rgba(255,255,255,.5);
  outline-offset: -8px;
  box-shadow: 3px 3px 10px rgba(0,0,0,.1);
  position: relative;
  overflow: hidden;
  &:hover .card-image{
    transform: scale(1.15)
  }
`

const IMG = styled.img`
  position: absolute;
  inset: 0;
  width:100%;
  height:100%;
  object-fit: cover;
  opacity: .6;
  transition: transform .75s;
`

const TITLE = styled.h3`
  position: absolute;
  left: 15px;
  bottom:15px;
  font-size: 20px;
  color: white;
  text-shadow: 0 0 1px rgba(0,0,0,.5);
`

export default function() {
  return (
    <CARD>
      <IMG className="card-image" src='assets/beach.jpg' />
      <TITLE>The beach</TITLE>
    </CARD>
  )
}