'use client';

import useHover from '@/app/hooks/useHover';
import Block from '@/components/Block';
import Image from 'next/image';
import { Skill } from '../../../../types/skill';

type StackBlockProps = {
  stack: Skill[];
};

export default function StackBlock({ stack }: StackBlockProps) {
  const { hoveredId, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    <>
      <Block
        col={3}
        row={1}
        className="flex items-end sm:hidden">
        <h3 className="text-5xl font-bold">Stack</h3>
      </Block>

      <Block
        col={1}
        row={1}
        className=" hidden sm:flex items-end">
        <h3 className="text-5xl font-bold">Stack</h3>
      </Block>

      <div className="grid grid-cols-3 col-span-3 gap-2 sm:hidden">
        {stack.map(({ _id, name, logo }) => (
          <>
            <Block
              col={1}
              row={1}
              className="col-span-1"
              key={name}>
              <Image
                fill={true}
                src={logo}
                alt={name}
              />
            </Block>
            <Block
              col={2}
              className="col-span-2">
              {name}
            </Block>
          </>
        ))}
      </div>

      <div className="hidden sm:grid grid-cols-2 gap-2">
        {stack.map(({ _id, name, logo }) => (
          <Block
            col={1}
            row={1}
            key={name}
            isHovered={hoveredId === _id}
            hoverContent={
              <div className="text-primary-foreground text-sm font-semibold">
                {name}
              </div>
            }
            onMouseEnter={() => handleMouseEnter(_id)}
            onMouseLeave={handleMouseLeave}>
            <Image
              fill={true}
              src={logo}
              alt={name}
            />
          </Block>
        ))}
      </div>
    </>
  );
}
