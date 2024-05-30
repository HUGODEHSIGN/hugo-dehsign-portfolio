import FetchSlugs from '@/app/project/[slug]/FetchSlugs';
import Grid from '@/components/Grid';
import Navbar from '@/components/Navbar';

type LayoutType = {
  [key: string]: React.ReactNode;
};

export default function Layout({ children, blocks }: LayoutType) {
  return (
    <main className="container flex flex-col gap-4">
      <Navbar>
        <FetchSlugs />
      </Navbar>
      <Grid>
        {children}
        {blocks}
      </Grid>
    </main>
  );
}
