import One from '@/app/project/[slug]/@blocks/blocks/One';
import Two from '@/app/project/[slug]/@blocks/blocks/Two';
import { BlockSize, ContentType } from '../../../../../../types/block';

type OneTwoProps = {
  _type: BlockSize;
  _key: string;
  one?: ContentType | undefined;
  two?: ContentType | undefined;
  three?: ContentType | undefined;
  four?: ContentType | undefined;
  six?: ContentType | undefined;
};
export default function OneTwo({ one, two }: OneTwoProps) {
  return (
    <>
      <One one={one!} />
      <Two
        two={two!}
        side="right"
        orientation="horizontal"
      />
    </>
  );
}
