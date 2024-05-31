import FetchAbout from '@/app/sections/about/FetchAbout';
import FetchMainStack from '@/app/sections/about/FetchMainStack';
import IntroBlock from '@/app/sections/about/IntroBlock';
import Grid from '@/components/Grid';

export default function AboutSection() {
  return (
    <>
      <Grid className="sm:hidden">
        <IntroBlock />
        <FetchMainStack />
        <FetchAbout />
      </Grid>
      <Grid className="hidden sm:grid">
        <FetchMainStack />
        <IntroBlock />
        <FetchAbout />
      </Grid>
    </>
  );
}
