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

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 32px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const Heading = styled.div`
  color: #fff;
  font-size: 56px;
  font-weight: 700;
`;

export { VideoContainer, Heading };
