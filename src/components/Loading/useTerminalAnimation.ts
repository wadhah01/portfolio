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
  const [animationStarted, setAnimationStarted] = useState(false); // Prevent multiple runs
  const [playTyping] = useSound('/sounds/typing.mp3', { volume: 0.5 });
  const [playError] = useSound('/sounds/error.mp3', { volume: 0.3 });

  useEffect(() => {
    if (animationStarted) return; // Prevent re-trigger
    setAnimationStarted(true);

    let timeoutId: NodeJS.Timeout;

    const animate = async () => {
      let fullText = ''; // Accumulate all text here to update state once at the end
      let textBuffer = ''; // Buffer to store text during the animation

      // Type initial command
      for (let i = 0; i <= command.length; i++) {
        textBuffer = formatTerminalText(command.slice(0, i)); // Apply the format to each character
        fullText = textBuffer; // Store in fullText
        setText(fullText); // Update state once
        playTyping();
        await new Promise(resolve => setTimeout(resolve, TYPING_DELAY));
      }

      // Show loading steps
      for (const step of loadingSteps) {
        textBuffer += '\n' + formatTerminalText(step); // Apply format to each step
        fullText = textBuffer;
        setText(fullText); // Update state once
        await new Promise(resolve => setTimeout(resolve, LOADING_STEP_DELAY));
      }

      // Show error messages
      const errorDelay = ERROR_DISPLAY_DURATION / errorSteps.length;
      for (const error of errorSteps) {
        textBuffer += '\n' + formatTerminalText(error); // Apply format to error messages
        fullText = textBuffer;
        setText(fullText); // Update state once
        playError();
        await new Promise(resolve => setTimeout(resolve, errorDelay));
      }

      // Wait after errors
      await new Promise(resolve => setTimeout(resolve, ERROR_PAUSE_DURATION));

      // Show "Just Kidding!" message
      textBuffer += '\n\n' + formatTerminalText(finalStep); // Apply format to final message
      fullText = textBuffer;
      setText(fullText); // Update state once

      // Wait final duration before marking complete
      timeoutId = setTimeout(() => {
        setIsComplete(true);
      }, FINAL_WAIT_DURATION);
    };

    animate();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [animationStarted, playTyping, playError]);

  return { text, isComplete };
};
