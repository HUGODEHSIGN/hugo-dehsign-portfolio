import StackBlock from '@/app/project/[slug]/StackBlock';
import Block from '@/components/Block';
import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import { Project } from '../../../../types/project';

type DisplayProjectProps = {
  project: Project;
};

export default function DisplayProject({ project }: DisplayProjectProps) {
  return (
    <>
      <Block
        col={2}
        row={2}
        className="flex flex-col justify-center gap-4">
        <Heading>{project.name}</Heading>
        <p className="text-xl text-muted-foreground font-semibold text-balance">
          {project.description}
        </p>
        <div className="flex flex-row gap-2">
          <Button>Link</Button>
          <Button>Github</Button>
        </div>
      </Block>
      <StackBlock stack={project.stack} />
    </>
  );
}
