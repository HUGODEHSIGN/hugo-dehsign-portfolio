import urlFor from '@/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

type ImageProps = {
  name: string;
  preview: SanityImageSource;
};
export default function ProjectImage({ name, preview }: ImageProps) {
  return (
    <Image
      fill={true}
      src={urlFor(preview).width(1200).height(800).url()}
      className="rounded-lg group-hover:opacity-30 transition duration-300"
      alt={name}
    />
  );
}
