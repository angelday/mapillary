import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Confetti from 'react-dom-confetti';
import { motion, AnimatePresence } from 'framer-motion';

import { VideoContainer } from './Components';

import data from './data/daily-images.json';
const delay = 1000;

console.log(data);

const Content = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.32s ease all;
`;

const Count = styled(motion.div)`
  color: #fff;
  font-weight: 700;
  font-size: 72px;
  z-index: 1;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
`;

const Day = styled(motion.div)`
  margin-top: 8px;
  opacity: 0.5;
  color: #637381;
  font-weight: 600;
  font-size: 32px;
`;

const Message = styled(motion.div)`
  position: absolute;
  bottom: -98px;
  width: 660px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 42px;
  text-align: center;
  line-height: 1.4;
`;

function lerp(a, b, t) {
  return a * (1 - t) + b * t;
}

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

let frames = data.map((d, i) => {
  var t = i / data.length;
  return [
    d['cumulative image count'],
    new Date(d['date']).toLocaleDateString('en-US', dateOptions),
    t * t * t * t * (4000 + delay),
  ];
});

const containerVars = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  done: {},
};

const countVars = {
  initial: {
    opacity: 0,
    y: 40,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  done: {
    scale: 2,
    y: -80,
    transition: {
      delay: 0.04,
      type: 'spring',
      damping: 20,
      stiffness: 200,
      //duration: 0.3,
      //ease: [0.215, 0.61, 0.355, 1],
      // type: 'spring',
      // damping: 16,
      // stiffness: 200,
    },
  },
};

const dateVars = {
  initial: {
    opacity: 0,
    y: 40,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  done: {
    opacity: 0,
    y: -15,
    transition: {
      type: 'tween',
      delay: 1,
      duration: 0.4,
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
};

const msgVars = {
  initial: {
    opacity: 0,
    y: -15,
  },
  done: {
    opacity: 1,
    y: -30,
    scale: 1,
    transition: {
      type: 'tween',
      delay: 1.2,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  final: {
    y: -150,
    color: 'rgb(5, 203, 99)',
    scale: 1.3,
    transition: {
      type: 'tween',
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  anddone: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }
};

const lineVars = {
  initial: {
    pathLength: 0,
  },
  done: {
    pathLength: 1,
    transition: {
      delay: 0.3,
      type: 'tween',
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
};

const confettiConfig = {
  angle: 90,
  spread: '60',
  startVelocity: 100,
  elementCount: 200,
  dragFriction: 0.1,
  duration: 3000,
  width: '15px',
  height: '15px',
  stagger: 0,
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

function DailyImages() {
  const [animating, setAnimating] = useState(false);
  const [count, setCount] = useState('423,906,994');
  const [day, setDay] = useState('January 1, 2019');
  const [anim, setAnim] = useState('initial');
  const [fadeOut, setFadeOut] = useState(false);

  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (animating) {
      frames.forEach(f => {
        setTimeout(() => {
          setCount(f[0]);
          setDay(f[1]);
        }, f[2]);
      });
    }
  }, [animating]);

  useEffect(() => {
    setTimeout(() => {
      setAnim('enter');
    }, 1000);

    setTimeout(() => {
      setAnimating(true);
    }, 2000);

    setTimeout(() => {
      setConfetti(true);
    }, 6600 + delay);

    setTimeout(() => {
      setFadeOut(true);
      setAnim('final');
    }, 9000 + delay);

    setTimeout(() => {
      setFadeOut(true);
      setAnim('anddone');
    }, 12500 + delay);
  }, []);

  return (
    <VideoContainer>
      <Content
        initial={false}
        animate={count === '1 billion' ? 'done' : anim}
        variants={containerVars}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: !fadeOut ? 1 : 0,
            transition: '0.2s ease opacity',
          }}
        >
          <Count variants={countVars}>{count}</Count>
          <Day variants={dateVars}>{day}</Day>
          <svg
            width="593"
            height="30"
            viewBox="0 0 593 30"
            fill="none"
            style={{
              position: 'absolute',
              bottom: 75,
              zIndex: 0,
            }}
          >
            <motion.path
              d="M1 22.2385C100.82 15.0135 185.348 8.87293 293 8.08529C374.079 7.49208 468.275 9.9353 592 17.2385"
              stroke="#05CB63"
              strokeWidth="15"
              variants={lineVars}
            />
          </svg>
        </div>

        <Message
          variants={msgVars}
          animate={count === '1 billion' && !fadeOut ? 'done' : anim}
        >
          {!fadeOut ? 'images available to' : ' '}
          <br />
          {!fadeOut ? 'make better maps' : 'Make better maps'}
        </Message>
        <Confetti active={confetti} config={confettiConfig} />
      </Content>
    </VideoContainer>
  );
}

export default DailyImages;
