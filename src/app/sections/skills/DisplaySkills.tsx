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
        }}>
        <Block
          id={_id}
          col={1}
          row={1}
          isHovered={hoveredId === _id}
          hoverContent={
            <div className="text-primary-foreground font-semibold">{name}</div>
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
    <Grid className="grid-cols-6">
      <Block className="aspect-[4/1] col-span-4 row-span-1 flex flex-row items-center justify-between">
        <Heading>Skills</Heading>
      </Block>
      <Block className="aspect-[2/1] col-span-2 row-span-1 flex flex-row items-center justify-center">
        <CategorySelect
          state={categoryFilter}
          setState={setCategoryFilter}
        />
      </Block>
      {/* {renderSkills(language)}
      {renderSkills(frontend)}
      {renderSkills(backend)}
      {renderSkills(framework)} */}
      <AnimatePresence>{renderCategories()}</AnimatePresence>
    </Grid>
  );
}
