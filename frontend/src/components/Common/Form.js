export const Label = ({ children }) => (
  <label className="text-gray-500 font-medium block text-lg">{children}</label>
);

export const Input = ({ type, value, onChange, ...props }) => (
  <input
    type={type || 'text'}
    value={value}
    className="w-full h-11 border border-sky-700 rounded text-gray-700 px-2 py-0.5"
    onChange={onChange}
    {...props}
  />
);
