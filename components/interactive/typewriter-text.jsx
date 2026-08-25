'use client';

import React, { useState, useEffect } from 'react';

export default function TypewriterText({
  text = 'WE BELIEVE IN QUALITY',
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 2200,
}) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayText.length < text.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === text.length) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting backwards
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Restart loop
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center gap-1 font-mono tracking-widest font-bold text-baba-orange">
      <span>{displayText}</span>
      <span className="w-1.5 h-3.5 bg-baba-orange animate-pulse inline-block rounded-xs"></span>
    </span>
  );
}
