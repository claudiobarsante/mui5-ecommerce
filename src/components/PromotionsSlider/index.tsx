import { Slide } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { Colors } from 'styles/theme/colors';

const messages = [
  '20% off on your first order!',
  'Summer sale starts now, visit any store.',
  'Please like and subscribe :)'
];

export default function PromotionsSlider() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // to show the message
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      // get next message
      // -- using mod to not exceed the maximum index of messages
      //setMessageIndex((i) => (i + 1) % messages.length);
      setMessageIndex((previous) => {
        const newIdx = previous + 1;
        if (newIdx > messages.length - 1) return 0;
        return newIdx;
      });
      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <S.PromotionsContainer ref={containerRef} overflow="hidden">
      <Slide
        direction={show ? 'left' : 'right'}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 800,
          exit: 800
        }}
      >
        <S.MessageContainer>
          <S.MessageText>{messages[messageIndex]}</S.MessageText>
        </S.MessageContainer>
      </Slide>
    </S.PromotionsContainer>
  );
}
