export const PrimaryButton = ({ children, onClick, ...props }) => (
  <button
    className="bg-sky-800 hover:bg-sky-700 text-white rounded-lg p-3"
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export const DeleteButton = ({ onClick }) => (
  <button
    className="bg-red-500 hover:bg-red-600 p-2 rounded-2xl text-white mx-2"
    onClick={onClick}
  >
    <i className="fa-solid fa-lg fa-trash"></i>
  </button>
);

export const EditButton = ({ onClick }) => (
  <button
    className="bg-gray-200 hover:bg-gray-300 p-2 rounded-2xl text-gray-700 mx-2"
    onClick={onClick}
  >
    <i className="fa-solid fa-lg fa-pencil"></i>
  </button>
);

