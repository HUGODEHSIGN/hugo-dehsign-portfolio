'use client';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

import { AnimatePresence, motion } from 'framer-motion';

const blockVariants = cva('border rounded-lg p-6 relative', {
  variants: {
    col: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
    },
    row: {
      1: 'row-span-1',
      2: 'row-span-2',
    },
  },

  defaultVariants: {
    col: 1,
    row: 1,
  },
});

export interface BlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof blockVariants> {
  isHovered?: boolean;
  hoverContent?: React.ReactNode;
}

export default function Block({
  className,
  children,
  col,
  row,
  isHovered = false,
  hoverContent = 'oops',
  ...props
}: BlockProps) {
  function getAspect(
    col: 1 | 2 | 3 | null | undefined,
    row: 1 | 2 | null | undefined
  ) {
    if (!col || !row) return;

    if (col === row) return 'aspect-square';
    if (col / row === 2) return 'aspect-[2/1]';
    if (row / col === 2) return 'aspect-[1/2]';
    if (col / row === 3) return 'aspect-[3/1]';
  }

  return (
    <div
      className={cn(
        blockVariants({ col, row, className }),
        getAspect(col, row)
      )}
      {...props}>
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-4 left-4 right-4 bottom-4 rounded-lg bg-primary/90 z-10 flex justify-center items-center"
            layoutId="overlay"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}>
            {hoverContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
