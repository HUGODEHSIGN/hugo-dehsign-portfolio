import BlockContent from '@/app/project/[slug]/@blocks/BlockContent';
import Block from '@/components/Block';
import { ContentType } from '../../../../../../types/block';

type FourProps = {
  four: ContentType;
  side?: 'left' | 'right' | 'center';
};

export default function Four({ four, side }: FourProps) {
  return (
    <Block
      col={2}
      row={2}
      side={side}>
      <BlockContent content={four!} />
    </Block>
  );
}
