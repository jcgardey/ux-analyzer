import { PencilIcon } from '../Icons/PencilIcon';
import { TrashIcon } from '../Icons/TrashIcon';

export const PrimaryButton = ({ children, onClick, ...props }) => (
  <button
    className="bg-red hover:bg-lightred text-white rounded-lg p-3"
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export const DeleteButton = ({ onClick }) => (
  <button
    className="text-red hover:text-lightred hover:bg-red-600 p-2 rounded-2xl mx-1"
    onClick={onClick}
  >
    <TrashIcon />
  </button>
);

export const EditButton = ({ onClick }) => (
  <button
    className="hover:text-yellow p-2 rounded-2xl text-orange mx-1"
    onClick={onClick}
  >
    <PencilIcon />
  </button>
);
