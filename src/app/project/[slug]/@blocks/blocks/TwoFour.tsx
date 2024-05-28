import Four from '@/app/project/[slug]/@blocks/blocks/Four';
import Two from '@/app/project/[slug]/@blocks/blocks/Two';
import { BlockSize, ContentType } from '../../../../../../types/block';

type TwoFourProps = {
  _type: BlockSize;
  _key: string;
  one?: ContentType | undefined;
  two?: ContentType | undefined;
  three?: ContentType | undefined;
  four?: ContentType | undefined;
  six?: ContentType | undefined;
};
export default function TwoFour({ two, four }: TwoFourProps) {
  return (
    <>
      <Two
        two={two!}
        orientation="vertical"
      />
      <Four four={four!} />
    </>
  );
}
