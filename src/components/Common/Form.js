import { forwardRef } from 'react';

export const Label = ({ children }) => (
  <label className="text-gray-500 font-medium block text-lg">{children}</label>
);

export const Input = forwardRef(({ type, value, onChange, ...props }, ref) => (
  <input
    type={type || 'text'}
    ref={ref}
    value={value}
    className="w-full h-11 border border-orange rounded text-gray-700 px-2 py-0.5"
    onChange={onChange}
    {...props}
  />
));

export const FieldError = ({ className, children }) => (
  <p className={`text-red my-1 ${className}`}>{children}</p>
);

