import urlFor from '@/lib/image';
import Image from 'next/image';
import { ContentType } from '../../../../../types/block';

type BlockContentProps = {
  content: ContentType;
  aspect?: '1/1' | '1/2' | '2/1' | '3/1' | '3/2';
};

export default function BlockContent({
  content,
  aspect = '1/1',
}: BlockContentProps) {
  if (content.type === 'heading')
    return (
      <div className="flex justify-center items-center h-full">
        <h3 className="text-5xl font-bold text-center">{content.heading}</h3>
      </div>
    );
  if (content.type === 'paragraph')
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary rounded-lg p-6">
        <p className="text-xl sm:text-3xl text-primary-foreground font-semibold text-balance">
          {content.paragraph}
        </p>
      </div>
    );
  if (content.type === 'image') {
    const sizes = {
      '1/1': { h: 1200, w: 1200 },
      '1/2': { h: 1200, w: 600 },
      '2/1': { h: 600, w: 1200 },
      '3/1': { h: 1200, w: 400 },
      '3/2': { h: 800, w: 1200 },
    };

    return (
      <Image
        fill={true}
        src={urlFor(content.image)
          .height(sizes[aspect].h)
          .width(sizes[aspect].w)
          .url()}
        alt={content.alt}
        className="rounded-lg"
      />
    );
  }
}
