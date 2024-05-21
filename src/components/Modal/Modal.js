import { CloseIcon } from '../Icons/CloseIcon';

export const Modal = ({ className, title, children, handleClose }) => {
  return (
    <div className="w-full h-full top-0 left-0 fixed z-50 bg-gray-900/80">
      <div
        className={`mx-auto my-12 p-4 bg-white drop-shadow rounded ${
          className ? className : 'w-1/2'
        }`}
      >
        <div className="absolute top-1.5 right-1.5">
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div>
          <h2 className="text-center text-2xl">{title}</h2>
        </div>
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
};
