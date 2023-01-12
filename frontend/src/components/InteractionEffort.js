export const InteractionEffort = ({ className, score }) => {
  const colors = {
    1: 'bg-green-800',
    2: 'bg-yellow-800',
    3: 'bg-orange-800',
    4: 'bg-red-800',
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

