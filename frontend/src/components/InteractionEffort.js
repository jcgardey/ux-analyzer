export const InteractionEffort = ({ score }) => {
  const colors = { 1: 'green', 2: 'yellow', 3: 'orange', 4: 'red' };

  return (
    <div
      className={`mx-auto my-1 w-1/3 bg-${colors[parseInt(score)]}-800 rounded`}
    >
      <p className="text-center text-3xl text-white font-bold">{score}</p>
    </div>
  );
};

