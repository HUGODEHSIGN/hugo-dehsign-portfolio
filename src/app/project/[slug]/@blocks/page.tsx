import FetchBlocks from '@/app/project/[slug]/@blocks/FetchBlocks';

type PageProps = {
  params: { slug: string };
};
export default function Page({ params }: PageProps) {
  return <FetchBlocks slug={params.slug} />;
}
