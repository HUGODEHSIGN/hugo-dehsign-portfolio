import FetchProject from '@/app/project/[slug]/FetchProject';

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params }: PageProps) {
  return <FetchProject slug={params.slug} />;
}
