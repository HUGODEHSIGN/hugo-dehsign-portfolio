import BlockContent from '@/app/project/[slug]/@blocks/BlockContent';
import Block from '@/components/Block';
import { BlockSize, ContentType } from '../../../../../../types/block';

type SixProps = {
  _type: BlockSize;
  _key: string;
  one?: ContentType | undefined;
  two?: ContentType | undefined;
  three?: ContentType | undefined;
  four?: ContentType | undefined;
  six?: ContentType | undefined;
};

export default function Six({ six }: SixProps) {
  return (
    <Block
      col={3}
      row={2}>
      <BlockContent
        content={six!}
        aspect="3/2"
      />
    </Block>
  );
}
