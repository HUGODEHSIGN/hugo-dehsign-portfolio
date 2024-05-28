import SectionsContainer from '@/app/sections/SectionsContainer';
import AboutSection from '@/app/sections/about/AboutSection';
import ProjectsSection from '@/app/sections/projects/ProjectsSection';
import SkillsSection from '@/app/sections/skills/SkillsSection';

export default function Page() {
  return (
    <main className="container flex flex-col gap-4">
      <SectionsContainer
        aboutSection={<AboutSection />}
        projectSection={<ProjectsSection />}
        skillsSection={<SkillsSection />}
      />
    </main>
  );
}
