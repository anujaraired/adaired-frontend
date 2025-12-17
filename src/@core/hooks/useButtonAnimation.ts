'use client';

import { useState } from 'react';

interface ButtonAnimationOptions {
  hoverScale?: number;
  tapScale?: number;
}

const useButtonAnimation = ({
  hoverScale = 1.08,
  tapScale = 0.94,
}: ButtonAnimationOptions = {}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return {
    handlers: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => {
        setHovered(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
    },

    containerClass: `
      relative overflow-hidden
      transition-transform duration-300 ease-out
      ${pressed ? `scale-[${tapScale}]` : hovered ? `scale-[${hoverScale}]` : 'scale-100'}
    `,

    borderClass: `
      absolute inset-0 pointer-events-none
      before:absolute before:top-0 before:left-0
      before:origin-left before:scale-x-0
      after:absolute after:bottom-0 after:right-0
      after:origin-right after:scale-x-0
      transition-all duration-500
      ${hovered ? 'before:scale-x-100 after:scale-x-100' : ''}
    `,

    textClass: 'transition-transform duration-300 group-hover:translate-x-1',

    iconClass:
      'transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-[360deg]',
  };
};

export default useButtonAnimation;
