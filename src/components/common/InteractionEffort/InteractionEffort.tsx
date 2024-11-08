interface InteractionEffortProps {
  score: number | null;
  className: string;
}

interface Colors {
  [key: number]: string;
}

export const InteractionEffort: React.FC<InteractionEffortProps> = ({
  className,
  score,
}) => {
  const colors: Colors = {
    1: '#16a34a',
    2: '#ca8b04',
    3: '#ea5a0c',
    4: '#dc2626',
  };

  return (
    <p
      className={`${className} p-1 text-center text-white font-bold rounded`}
      style={{
        backgroundColor: score !== null ? colors[Math.floor(score)] : '#9ca3af',
      }}
    >
      {score !== null ? score : '--'}
    </p>
  );
};
