import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Confetti from 'react-dom-confetti';
import { motion, AnimatePresence } from 'framer-motion';

import { VideoContainer } from './Components';

const GIFImg = styled(motion.img)`
  position: absolute;
  top: 0;
  width: 720px;
  height: 720px;
  object-fit: cover;
  object-position: center center;
`;

const TopText = styled(motion.div)`
  position: absolute;
  bottom: 50px;
  padding: 18px 50px;
  color: #212b36;
  font-size: 48px;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  background: #fff;
  border-radius: 200px;
  line-height: 1;
  text-align: center;
`;

const Caption = styled(motion.div)`
  margin-top: 6px;
  color: #637381;
  /* color: #fff; */
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
`;
const BottomText = styled(motion.div)`
  /* color: #212b36; */
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const Pill = styled(motion.div)`
  position: absolute;
  top: 50px;
  padding: 16px 32px 16px 32px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 200px;
  text-align: center;
  /* box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1); */
  z-index: 2;
`;

const SLIDES = [
  {
    top: '831,675',
    bottom: 'Berlin, Germany',
    image: '/images/berlin.gif',
  },
  {
    top: '839,035',
    bottom: 'Bucharest, Romania',
    image: '/images/bucharest.gif',
  },
  {
    top: '489,681',
    bottom: 'Chiang Mai, Thailand',
    image: '/images/chiang-mai.gif',
  },
  {
    top: '445,784',
    bottom: 'Gothenburg, Sweden',
    image: '/images/gothenburg.gif',
  },
  {
    top: '1,330,849',
    bottom: 'Helsinki, Finland',
    image: '/images/helsinki.gif',
  },
  {
    top: '9,047,858',
    bottom: 'Kyiv, Ukraine',
    image: '/images/kyiv.gif',
  },
  {
    top: '4,125,217',
    bottom: 'Nashville, United States',
    image: '/images/nashville.gif',
  },
  {
    top: '657,670',
    bottom: 'Ottawa, Canada',
    image: '/images/ottawa.gif',
  },
  {
    top: '2,209,973',
    bottom: 'São Paulo, Brazil',
    image: '/images/sao-paulo.gif',
  },
  {
    top: '141,304',
    bottom: 'Tulle, France',
    image: '/images/tulle.gif',
  },
];

const transitionPill = {
  type: 'tween',
  duration: 0.5,
  ease: [0.215, 0.61, 0.355, 1],
  delay: 0.5,
};

const transitionImg = {
  type: 'tween',
  duration: 1,
  ease: [0.645, 0.045, 0.355, 1],
  delay: 0.4,
};

function Slides() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(count => (count < SLIDES.length - 1 ? count + 1 : count));
    }, 3000);
  }, []);

  return (
    <VideoContainer style={{ background: '#343332' }}>
      <AnimatePresence exitBeforeEnter>
        <TopText
          key={SLIDES[count].top}
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          exit={{ y: 200 }}
          transition={transitionPill}
        >
          {SLIDES[count].top}
          <Caption style={{ textAlign: 'center' }}>
            Images captured in 2019
          </Caption>
        </TopText>
        <Pill
          key={SLIDES[count].bottom}
          initial={{ y: -150 }}
          animate={{ y: 0 }}
          exit={{ y: -150 }}
          transition={transitionPill}
        >
          {/* <Caption>Imagery Captured in 2019</Caption> */}
          <BottomText>{SLIDES[count].bottom}</BottomText>
        </Pill>
      </AnimatePresence>
      <AnimatePresence>
        <GIFImg
          key={SLIDES[count].image}
          src={SLIDES[count].image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={transitionImg}
        />
      </AnimatePresence>
    </VideoContainer>
  );
}

export default Slides;
