'use client';

import useHover from '@/app/hooks/useHover';
import Block from '@/components/Block';
import Image from 'next/image';
import { Skill } from '../../../../types/skill';

type DisplayMainStackProps = {
  stack: Skill[];
};

export default function DisplayMainStack({ stack }: DisplayMainStackProps) {
  const { hoveredId, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <>
      <div className="grid grid-cols-3 col-span-3 gap-4 sm:hidden">
        <Block
          col={3}
          row={1}
          className="flex items-center">
          <h2 className="text-3xl font-bold">Main Stack</h2>
        </Block>
        {stack.map(({ _id, logo, name }) => (
          <>
            <Block
              key={_id + 'main-mobile'}
              col={1}
              row={1}
              className="col-span-1">
              <Image
                src={logo}
                alt={name}
                fill={true}
                className="rounded-lg"
              />
            </Block>
            <Block
              key={_id}
              col={2}
              className="col-span-2 flex items-center">
              <p className="text-xl font-semibold">{name}</p>
            </Block>
          </>
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-2 gap-4">
        <Block
          col={2}
          row={2}
          className="hidden sm:flex items-end lg:hidden">
          <h3 className="text-3xl font-bold">Main Stack</h3>
        </Block>
        {stack.map(({ _id, logo, name }) => (
          <Block
            key={_id + 'main-desktop'}
            col={1}
            row={1}
            isHovered={hoveredId === _id}
            hoverContent={
              <div className="text-primary-foreground text-sm font-semibold">
                {name}
              </div>
            }
            onMouseEnter={() => handleMouseEnter(_id)}
            onMouseLeave={handleMouseLeave}>
            <Image
              src={logo}
              alt={name}
              fill={true}
              className="rounded-lg"
            />
          </Block>
        ))}
      </div>
    </>
  );
}
