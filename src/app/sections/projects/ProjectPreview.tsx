import ProjectImage from '@/app/sections/projects/projectPreview/ProjectImage';
import ProjectOverlay from '@/app/sections/projects/projectPreview/ProjectOverlay';
import { ProjectPreview as Project } from '../../../../types/project';

type ProjectPreviewProps = Project;
export default function ProjectPreview(props: ProjectPreviewProps) {
  const { name, slug, description, github, link, preview } = props;
  return (
    <div className="aspect-[3/2] relative border rounded-lg group">
      <ProjectOverlay {...props} />
      <ProjectImage
        name={name}
        preview={preview}
      />
    </div>
  );
}

// {
//   name,
//   slug,
//   description,
//   github,
//   link,
//   preview,
// }
