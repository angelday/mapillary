import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 720px;
  height: 720px;
  background: #212b36;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  color: #05cb63;
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 32px;
  background: none;
`;

const Heading = styled.div`
  color: #fff;
  font-size: 56px;
  font-weight: 700;
`;

export { VideoContainer, Heading };
