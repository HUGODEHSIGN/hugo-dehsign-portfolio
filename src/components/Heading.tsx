import { cn } from '@/lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  h?: 1 | 2 | 3;
}

export default function Heading({ h = 2, className, ...props }: HeadingProps) {
  if (h === 1)
    return (
      <h1
        className={cn(
          'text-7xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 inline-block text-transparent bg-clip-text',
          className
        )}
        {...props}
      />
    );
  if (h === 2)
    return (
      <h2
        className={cn(
          'text-6xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 inline-block text-transparent bg-clip-text',
          className
        )}
        {...props}
      />
    );
  return (
    <h3
      className={cn(
        'text-5xl font-bold bg-gradient-to-r from-rose-500 to-amber-500 inline-block text-transparent bg-clip-text',
        className
      )}
      {...props}
    />
  );
}
