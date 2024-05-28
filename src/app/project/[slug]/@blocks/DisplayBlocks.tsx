import FourTwo from '@/app/project/[slug]/@blocks/blocks/FourTwo';
import OneTwo from '@/app/project/[slug]/@blocks/blocks/OneTwo';
import Six from '@/app/project/[slug]/@blocks/blocks/Six';
import Three from '@/app/project/[slug]/@blocks/blocks/Three';
import TwoFour from '@/app/project/[slug]/@blocks/blocks/TwoFour';
import TwoOne from '@/app/project/[slug]/@blocks/blocks/TwoOne';
import { Block } from '../../../../../types/block';

type DisplayBlocksProps = {
  blocks: Block[];
};

export default function DisplayBlocks({ blocks }: DisplayBlocksProps) {
  function renderBlocks(blocks: Block[]) {
    return blocks.map((block) => {
      const blockTypes = {
        oneTwo: <OneTwo {...block} />,
        twoOne: <TwoOne {...block} />,
        three: <Three {...block} />,
        twoFour: <TwoFour {...block} />,
        fourTwo: <FourTwo {...block} />,
        six: <Six {...block} />,
      };

      return blockTypes[block._type];
    });
  }

  return <>{renderBlocks(blocks)}</>;
}
