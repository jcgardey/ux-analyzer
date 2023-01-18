export const InteractionEffort = ({ className, score }) => {
  const colors = {
    1: 'bg-green-600',
    2: 'bg-yellow-600',
    3: 'bg-orange-600',
    4: 'bg-red-600',
  };

  return (
    <p
      className={`${className} p-1 text-center text-white font-bold ${
        score !== null ? colors[parseInt(score)] : 'bg-gray-400'
      } rounded`}
    >
      {score !== null ? score : '--'}
    </p>
  );
};

