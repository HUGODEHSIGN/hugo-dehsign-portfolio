'use client';

import { AnimatePresence, motion } from 'framer-motion';

import useHover from '@/app/hooks/useHover';
import CategorySelect from '@/app/sections/skills/CategorySelect';
import Block from '@/components/Block';
import Grid from '@/components/Grid';
import Heading from '@/components/Heading';
import Image from 'next/image';
import { useState } from 'react';
import { Skill } from '../../../../types/skill';

type DisplaySkillsProps = {
  [key: string]: Skill[];
};

export default function DisplaySkills({
  language,
  frontend,
  backend,
  framework,
}: DisplaySkillsProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const { hoveredId, handleMouseEnter, handleMouseLeave } = useHover();

  function renderSkills(array: Skill[]) {
    return array.map(({ _id, name, logo }) => (
      <>
        <motion.div
          key={_id}
          layout
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.15 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.15, delay: 0.2 },
          }}
          className="grid grid-cols-3 col-span-3 gap-4 sm:hidden">
          <Block
            id={_id}
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
            col={2}
            className="col-span-2 flex items-center">
            <p className="text-xl font-bold">{name}</p>
          </Block>
        </motion.div>

        {/* desktop */}
        <motion.div
          key={_id}
          layout
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.15 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.15, delay: 0.2 },
          }}
          className="hidden sm:block">
          <Block
            id={_id}
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
        </motion.div>
      </>
    ));
  }

  function renderCategories() {
    const all = [...language, ...frontend, ...backend, ...framework];

    type filterLookupType = {
      [key: string]: Skill[];
    };

    const filterLookup: filterLookupType = {
      all,
      language,
      frontend,
      backend,
      framework,
    };

    return renderSkills(filterLookup[categoryFilter]);
  }

  return (
    <Grid className="grid-cols-3 sm:grid-cols-6">
      <Block className="aspect-[3/1] sm:aspect-[4/1] col-span-3 sm:col-span-4 row-span-1 flex flex-row items-center justify-between">
        <Heading>Skills</Heading>
      </Block>
      <Block className="aspect-[3/1] sm:aspect-[2/1] col-span-3 sm:col-span-2 row-span-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold">Filter Skills</h3>
          <CategorySelect
            state={categoryFilter}
            setState={setCategoryFilter}
          />
        </div>
      </Block>
      <AnimatePresence>{renderCategories()}</AnimatePresence>
    </Grid>
  );
}
