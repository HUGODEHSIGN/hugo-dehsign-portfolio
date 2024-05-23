import Studio from '@/app/admin/[[...index]]/Studio';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function Page() {
  return <Studio />;
}
