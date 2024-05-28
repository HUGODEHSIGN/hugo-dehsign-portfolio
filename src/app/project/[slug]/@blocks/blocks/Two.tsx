import BlockContent from '@/app/project/[slug]/@blocks/BlockContent';
import Block from '@/components/Block';
import { ContentType } from '../../../../../../types/block';

type TwoProps = {
  orientation: 'horizontal' | 'vertical';
  two: ContentType;
};

export default function Two({ two, orientation }: TwoProps) {
  if (orientation === 'horizontal') {
    return (
      <Block col={2}>
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
