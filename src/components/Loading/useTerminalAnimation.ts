import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import {
  command,
  loadingSteps,
  errorSteps,
  finalStep,
  TYPING_DELAY,
  LOADING_STEP_DELAY,
  ERROR_DISPLAY_DURATION,
  ERROR_PAUSE_DURATION,
  FINAL_WAIT_DURATION
} from './constants';
import { formatTerminalText } from './TextFormatter';

export const useTerminalAnimation = () => {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [playTyping] = useSound('/sounds/typing.mp3', { volume: 0.5 });
  const [playError] = useSound('/sounds/error.mp3', { volume: 0.3 });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const animate = async () => {
      // Type initial command
      for (let i = 0; i <= command.length; i++) {
        setText(formatTerminalText(command.slice(0, i)));
        playTyping();
        await new Promise(resolve => setTimeout(resolve, TYPING_DELAY));
      }

      // Show loading steps
      for (const step of loadingSteps) {
        setText(prev => formatTerminalText(prev + '\n' + step));
        await new Promise(resolve => setTimeout(resolve, LOADING_STEP_DELAY));
      }

      // Show error messages
      const errorDelay = ERROR_DISPLAY_DURATION / errorSteps.length;
      for (const error of errorSteps) {
        setText(prev => formatTerminalText(prev + '\n' + error));
        playError();
        await new Promise(resolve => setTimeout(resolve, errorDelay));
      }

      // Wait after errors
      await new Promise(resolve => setTimeout(resolve, ERROR_PAUSE_DURATION));

      // Show "Just Kidding" message
      setText(prev => formatTerminalText(prev + '\n\n' + finalStep));

      // Wait final duration before completing
      timeoutId = setTimeout(() => {
        setIsComplete(true);
      }, FINAL_WAIT_DURATION);
    };

    animate();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [playTyping, playError]);

  return { text, isComplete };
};