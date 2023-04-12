import spinner from '../../media/spinner.gif';

export const Loading = () => (
  <div className="w-16 top-2/4 left-2/4 absolute">
    <img src={spinner} alt="Loading" />
  </div>
);
