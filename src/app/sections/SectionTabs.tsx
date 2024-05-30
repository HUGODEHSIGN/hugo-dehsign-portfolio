'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useParams, useRouter } from 'next/navigation';

type SectionTabsProps = {
  sections: { name: string; display: string }[];
};

export default function SectionTabs({ sections }: SectionTabsProps) {
  const { section } = useParams<{ section: string }>();
  const router = useRouter();

  function renderTabs() {
    return sections.map(({ name, display }) => (
      <div key={name}>
        <TabsTrigger
          value={name}
          className="data-[state=active]:bg-foreground data-[state=active]:text-background">
          {display}
        </TabsTrigger>
      </div>
    ));
  }

  return (
    <Tabs
      defaultValue={section || sections[0].name}
      onValueChange={(value) => router.replace(`/${value}`)}>
      <TabsList className="bg-muted-foreground text-muted">
        {renderTabs()}
      </TabsList>
    </Tabs>
  );
}
