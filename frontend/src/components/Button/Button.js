export const PrimaryButton = ({ children, onClick, ...props }) => (
  <button
    className="bg-sky-800 hover:bg-sky-700 text-white rounded-lg p-3"
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

