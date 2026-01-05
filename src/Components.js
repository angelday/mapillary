import React from 'react';
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

const Heading = styled.div`
  color: #fff;
  font-size: 56px;
  font-weight: 700;
`;

export { VideoContainer, Heading };
