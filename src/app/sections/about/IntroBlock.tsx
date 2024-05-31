import Block from '@/components/Block';

export default function IntroBlock() {
  return (
    <Block
      col={2}
      row={2}
      className="flex justify-center items-center">
      <div className="flex flex-col w-fit">
        <h2 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl font-black w-fit">
          HUGO HSI
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center m-1">
          <p className="text-[6vw] sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground">
            Developer
          </p>
          <p className="text-[6vw] sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground">
            Designer
          </p>
          <p className="text-[6vw] sm:text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground">
            Learner
          </p>
        </div>
      </div>
    </Block>
  );
}
