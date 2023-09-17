import React from "react";

interface Props {
  border: string;
  background: string;
  height: string;
  borderRadius: string
  width: string;
  display: string;
  alignItems: string;
  justifyContent: string;
  fontSize: string;
  fontWeight: string;
  onClick: () => void;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}

const Button: React.FC<Props> = ({ 
    border,
    background,
    height,
    borderRadius,
    width,
    display,
    alignItems,
    justifyContent,
    fontSize,
    fontWeight,
    onClick, 
    icon,
    content
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
          background,
          border,
          borderRadius,
          display,
          alignItems,
          justifyContent,
          fontSize,
          fontWeight,
          height,
          width
        }}
        >
    {icon}
    {content}
    </button>
  );
}

export default Button;