import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dispatch, SetStateAction } from 'react';

type CategorySelectProps = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

export default function CategorySelect({
  state,
  setState,
}: CategorySelectProps) {
  return (
    <Select
      value={state}
      onValueChange={setState}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="language">Languages</SelectItem>
        <SelectItem value="frontend">Frontend</SelectItem>
        <SelectItem value="backend">Backend</SelectItem>
        <SelectItem value="framework">Frameworks</SelectItem>
      </SelectContent>
    </Select>
  );
}
