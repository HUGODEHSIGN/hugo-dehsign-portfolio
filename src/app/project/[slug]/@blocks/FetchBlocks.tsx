import DisplayBlocks from '@/app/project/[slug]/@blocks/DisplayBlocks';
import { getBlocks } from '@/lib/groq';
import { Block } from '../../../../../types/block';

type FetchBlocksProps = {
  slug: string;
};

export default async function FetchBlocks({ slug }: FetchBlocksProps) {
  const blocks: { block: Block[] } = await getBlocks(slug);
  return <DisplayBlocks blocks={blocks.block} />;
}
