import Block from '@/components/Block';

type DisplayAboutProps = {
  about: string;
};

export default function DisplayAbout({ about }: DisplayAboutProps) {
  return (
    <Block
      col={1}
      className="flex flex-col justify-center lg:justify-start gap-2 aspect-[2/1] lg:aspect-square sm:gap-4 sm:col-span-3 lg:col-span-1">
      <h3 className="text-[8vw] sm:text-4xl md:text-4xl font-bold">About Me</h3>
      <p className="text-[3vw] sm:text-xl md:text-2xl lg:text-base xl:text-2xl font-medium text-balance max-w-7xl">
        {about}
      </p>
    </Block>
  );
}
