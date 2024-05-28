'use client';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

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
  extends HTMLMotionProps<'div'>,
    VariantProps<typeof blockVariants> {
  isHovered?: boolean;
  hoverContent?: React.ReactNode;
  side?: 'left' | 'right' | 'center';
  children: React.ReactNode;
}

export default function Block({
  className,
  children,
  col,
  row,
  side,
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
    if (row / col === 2) return 'h-full';
    if (col / row === 3) return 'aspect-[3/1]';
    return 'aspect-[3/2]';
  }

  if (side === 'left') {
    return (
      <motion.div
        initial={{ translateX: -200, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 100 }}
        viewport={{ margin: '-400px' }}
        className={cn(
          blockVariants({ col, row, className }),
          getAspect(col, row)
        )}
        {...props}>
        {children}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute top-6 left-6 right-6 bottom-6 rounded-lg bg-primary/90 z-10 flex justify-center items-center p-3"
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
      </motion.div>
    );
  }

  if (side === 'right') {
    return (
      <motion.div
        initial={{ translateX: 200, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 100 }}
        viewport={{ margin: '-200px' }}
        className={cn(
          blockVariants({ col, row, className }),
          getAspect(col, row)
        )}
        {...props}>
        {children}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute top-6 left-6 right-6 bottom-6 rounded-lg bg-primary/90 z-10 flex justify-center items-center p-3"
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
      </motion.div>
    );
  }

  if (side === 'center') {
    return (
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 100 }}
        viewport={{ margin: '-250px' }}
        className={cn(
          blockVariants({ col, row, className }),
          getAspect(col, row)
        )}
        {...props}>
        {children}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute top-6 left-6 right-6 bottom-6 rounded-lg bg-primary/90 z-10 flex justify-center items-center p-3"
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
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(
        blockVariants({ col, row, className }),
        getAspect(col, row)
      )}
      {...props}>
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-6 left-6 right-6 bottom-6 rounded-lg bg-primary/90 z-10 flex justify-center items-center p-3"
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
    </motion.div>
  );
}
