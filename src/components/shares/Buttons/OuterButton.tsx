type OuterButtonPropType = {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
};

export const OuterButton = ({
  className,
  onClick,
  children
}: OuterButtonPropType) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};
