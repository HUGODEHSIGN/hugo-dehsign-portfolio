import BlockContent from '@/app/project/[slug]/@blocks/BlockContent';
import Block from '@/components/Block';
import { ContentType } from '../../../../../../types/block';

type OneProps = {
  one: ContentType;
};
export default function One({ one }: OneProps) {
  console.log(one);
  return (
    <Block
      col={1}
      row={1}>
      <BlockContent content={one} />
    </Block>
  );
}
