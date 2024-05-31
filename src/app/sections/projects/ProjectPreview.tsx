import ProjectImage from '@/app/sections/projects/projectPreview/ProjectImage';
import ProjectOverlay from '@/app/sections/projects/projectPreview/ProjectOverlay';
import Block from '@/components/Block';
import { Button } from '@/components/ui/button';
import { ProjectPreview as Project } from '../../../../types/project';

type ProjectPreviewProps = Project;
export default function ProjectPreview(props: ProjectPreviewProps) {
  const { name, slug, description, github, link, preview } = props;
  return (
    <>
      <div className="aspect-[3/2] relative border rounded-lg group overflow-hidden">
        <ProjectOverlay {...props} />
        <ProjectImage
          name={name}
          preview={preview}
        />
      </div>
      <Block
        col={1}
        row={1}
        className="block sm:hidden">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm font-medium">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button>Details</Button>
            <div className="flex flex-row gap-2">
              <Button className="flex-2">Link</Button>
              <Button className="flex-1">Github</Button>
            </div>
          </div>
        </div>
      </Block>
    </>
  );
}
