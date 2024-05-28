import Four from '@/app/project/[slug]/@blocks/blocks/Four';
import Two from '@/app/project/[slug]/@blocks/blocks/Two';
import { BlockSize, ContentType } from '../../../../../../types/block';

type FourTwoProps = {
  _type: BlockSize;
  _key: string;
  one?: ContentType | undefined;
  two?: ContentType | undefined;
  three?: ContentType | undefined;
  four?: ContentType | undefined;
  six?: ContentType | undefined;
};
export default function FourTwo({ four, two }: FourTwoProps) {
  return (
    <>
      <Four
        four={four!}
        side="center"
      />
      <Two
        two={two!}
        orientation="vertical"
      />
    </>
  );
}
