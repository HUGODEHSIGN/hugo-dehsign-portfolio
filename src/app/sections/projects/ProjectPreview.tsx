import ProjectImage from '@/app/sections/projects/projectPreview/ProjectImage';
import ProjectOverlay from '@/app/sections/projects/projectPreview/ProjectOverlay';
import Block from '@/components/Block';
import Grid from '@/components/Grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
          <Grid className="gap-2">
            <Button
              className="col-span-3"
              asChild>
              <Link href={`/project/${slug}`}>Details</Link>
            </Button>

            <Button
              className="col-span-1"
              asChild>
              <Link
                href={link}
                target="_blank">
                Link
              </Link>
            </Button>
            <Button
              className="col-span-2"
              asChild>
              <Link
                href={github}
                target="_blank">
                Github
              </Link>
            </Button>
          </Grid>
        </div>
      </Block>
    </>
  );
}
