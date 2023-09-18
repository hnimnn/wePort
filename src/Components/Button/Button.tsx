import React from "react";

interface Props {
  onClick: () => void;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  className?: string; 
}

const Button: React.FC<Props> = ({
  onClick,
  icon,
  content,
  className 
}) => {
  return (
    <button
      onClick={onClick}
      className={className} 
    >
      {icon}
      {content}
    </button>
  );
};

export default Button;
