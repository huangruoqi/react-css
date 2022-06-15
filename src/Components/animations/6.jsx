import styled from "styled-components";

const WRAPPER = styled.div`
  width: 80px;
  height: 80px;
`;
const LOADER = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 10px solid ${({ theme }) => theme.bg};
  border-top-color: #4bc8eb;
  border-bottom-color: #f13a8f;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
  @keyframes rotate {
    0% {
      transform: scale(1) rotate(360deg);
    }
    50% {
      transform: scale(0.8) rotate(-360deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
  .inner {
    border-top-color: #36f372;
    border-bottom-color: #fff;
    animation-duration: 2.5s;
  }
`;

export default function () {
  return (
    <WRAPPER>
      <LOADER>
        <LOADER className="inner" />
      </LOADER>
    </WRAPPER>
  );
}
