'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useParams, useRouter } from 'next/navigation';

import { Slug } from '../../../../types/slug';

type ProjectSelectProps = {
  slugs: Slug[];
};

export default function ProjectSelect({ slugs }: ProjectSelectProps) {
  const params = useParams();
  const router = useRouter();

  function renderDropdown() {
    return slugs.map(({ name, slug }) => (
      <SelectItem
        key={slug}
        value={slug}
        className="focus:bg-accent/20 focus:text-accent">
        {name}
      </SelectItem>
    ));
  }

  return (
    <Select
      value={params.slug as string}
      onValueChange={(value) => router.replace(`/project/${value}`)}>
      <SelectTrigger className="w-[180px] bg-primary text-primary-foreground border-muted-foreground">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="bg-primary text-primary-foreground border-muted-foreground">
        <SelectGroup>
          <SelectLabel>Projects</SelectLabel>
          {renderDropdown()}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
