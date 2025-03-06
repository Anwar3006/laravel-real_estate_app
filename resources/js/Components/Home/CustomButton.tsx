import { FC } from 'react';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  text,
  className = '',
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border border-gray-900 bg-gray-300 px-4 py-1 text-zinc-950 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
