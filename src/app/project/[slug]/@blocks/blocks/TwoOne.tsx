import One from '@/app/project/[slug]/@blocks/blocks/One';
import Two from '@/app/project/[slug]/@blocks/blocks/Two';
import { BlockSize, ContentType } from '../../../../../../types/block';

type TwoOneProps = {
  _type: BlockSize;
  _key: string;
  one?: ContentType | undefined;
  two?: ContentType | undefined;
  three?: ContentType | undefined;
  four?: ContentType | undefined;
  six?: ContentType | undefined;
};
export default function TwoOne({ two, one }: TwoOneProps) {
  return (
    <>
      <Two
        two={two!}
        orientation="horizontal"
      />
      <One one={one!} />
    </>
  );
}
