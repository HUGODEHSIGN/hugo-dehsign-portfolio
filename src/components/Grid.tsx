import { cn } from '@/lib/utils';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Grid({ className, ...props }: GridProps) {
  return (
    <div
      className={cn('grid grid-cols-3 gap-4', className)}
      {...props}
    />
  );
}
