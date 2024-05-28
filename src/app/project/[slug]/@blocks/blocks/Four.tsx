import BlockContent from '@/app/project/[slug]/@blocks/BlockContent';
import Block from '@/components/Block';
import { ContentType } from '../../../../../../types/block';

type FourProps = {
  four: ContentType;
};

export default function Four({ four }: FourProps) {
  return (
    <Block
      col={2}
      row={2}>
      <BlockContent content={four!} />
    </Block>
  );
}
