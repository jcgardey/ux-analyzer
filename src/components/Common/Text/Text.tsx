interface TextProps {
  variant: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ variant, children, className }: TextProps) => {
  if (variant === 'h1') {
    return (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {children}
      </h1>
    );
  } else if (variant === 'h2') {
    return (
      <h2
        className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
      >
        {children}
      </h2>
    );
  } else {
    return (
      <h3
        className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      >
        {children}
      </h3>
    );
  }
};
