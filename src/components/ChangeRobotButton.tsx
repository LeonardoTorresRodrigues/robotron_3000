import React from 'react';

interface ColorButtonProps {
  className: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function ChangeRobotButton({
  className,
  onClick,
}: ColorButtonProps) {
  return (
    <>
      <button
        className={`text-white font-bold py-2 px-4 rounded m-5 w-21 ${className}`}
        onClick={onClick}
      ></button>
    </>
  );
}
