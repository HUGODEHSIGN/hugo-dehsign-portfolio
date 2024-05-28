'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';

type SectionTabsProps = {
  sections: { name: string; display: string }[];
};

export default function SectionTabs({ sections }: SectionTabsProps) {
  const { section } = useParams<{ section: string }>();
  const router = useRouter();

  function renderTabs() {
    return sections.map(({ name, display }) => (
      <motion.div
        key={name}
        layoutId={name + 'Tab'}>
        <TabsTrigger value={name}>{display}</TabsTrigger>
      </motion.div>
    ));
  }

  return (
    <Tabs
      defaultValue={section || sections[0].name}
      onValueChange={(value) => router.replace(`/${value}`)}
      className="w-[400px]">
      <TabsList>
        <AnimatePresence>{renderTabs()}</AnimatePresence>
      </TabsList>
    </Tabs>
  );
}
