'use client';

import SectionTabs from '@/app/sections/SectionTabs';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type SectionsContainerProps = {
  [key: string]: React.ReactNode;
};

export default function SectionsContainer({
  aboutSection,
  projectSection,
  skillsSection,
}: SectionsContainerProps) {
  const { section } = useParams<{ section: string }>();

  const about = { name: 'about', display: 'About', node: aboutSection };
  const projects = {
    name: 'projects',
    display: 'Projects',
    node: projectSection,
  };
  const skills = { name: 'skills', display: 'Skills', node: skillsSection };

  const [renderArray, setRenderArray] = useState([about, projects, skills]);

  useEffect(() => {
    setRenderArray((prev) => reorderArray(prev, section));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  function reorderArray(array: typeof renderArray, params: string) {
    if (!params) {
      return array;
    }

    const newArray = array.filter((section) => section.name !== params);
    newArray.unshift(array.filter((section) => section.name === params)[0]);

    return newArray;
  }

  function renderNode(array: typeof renderArray) {
    return array.map(({ node, name }) => (
      <motion.div
        key={name}
        layoutId={name + 'node'}>
        {node}
      </motion.div>
    ));
  }

  return (
    <>
      <SectionTabs
        sections={renderArray.map(({ name, display }) => ({ name, display }))}
      />
      <AnimatePresence>{renderNode(renderArray)}</AnimatePresence>
    </>
  );
}
