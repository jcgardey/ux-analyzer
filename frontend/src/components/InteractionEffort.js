export const InteractionEffort = ({ score }) => {
  const colors = {
    1: 'bg-green-800',
    2: 'bg-yellow-800',
    3: 'bg-orange-800',
    4: 'bg-red-800',
  };

  return (
    <div className={`mx-auto my-1 w-1/3 ${colors[parseInt(score)]} rounded`}>
      <p className="text-center text-3xl text-white font-bold">{score}</p>
    </div>
  );
};

