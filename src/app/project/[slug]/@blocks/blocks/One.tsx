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
      side="center"
      className={
        one?.type === 'image'
          ? 'aspect-square'
          : 'aspect-[3/1] sm:aspect-square'
      }>
      <BlockContent content={one} />
    </Block>
  );
}
