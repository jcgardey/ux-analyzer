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
        colors[parseInt(score)]
      } rounded`}
    >
      {score}
    </p>
  );
};

