import BlockContent from '@/app/project/[slug]/@blocks/BlockContent';
import Block from '@/components/Block';
import { BlockSize, ContentType } from '../../../../../../types/block';

type ThreeProps = {
  _type: BlockSize;
  _key: string;
  one?: ContentType | undefined;
  two?: ContentType | undefined;
  three?: ContentType | undefined;
  four?: ContentType | undefined;
  six?: ContentType | undefined;
};

export default function Three({ three }: ThreeProps) {
  return (
    <Block
      col={3}
      row={1}>
      <BlockContent content={three!} />
    </Block>
  );
}
