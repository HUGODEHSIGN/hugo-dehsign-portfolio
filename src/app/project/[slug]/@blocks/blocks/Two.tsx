import BlockContent from '@/app/project/[slug]/@blocks/BlockContent';
import Block from '@/components/Block';
import { ContentType } from '../../../../../../types/block';

type TwoProps = {
  orientation: 'horizontal' | 'vertical';
  side?: 'left' | 'right';
  two: ContentType;
};

export default function Two({ two, orientation, side }: TwoProps) {
  if (orientation === 'horizontal') {
    return (
      <Block
        col={2}
        side={side}>
        <BlockContent
          content={two}
          aspect="2/1"
        />
      </Block>
    );
  }

  return (
    <Block
      col={1}
      row={2}
      className="h-full">
      <BlockContent
        content={two}
        aspect="1/2"
      />
    </Block>
  );
}
