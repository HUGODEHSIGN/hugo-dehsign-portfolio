import Grid from '@/components/Grid';

type LayoutType = {
  [key: string]: React.ReactNode;
};

export default function Layout({ children, blocks }: LayoutType) {
  return (
    <main className="container">
      <Grid>
        {children}
        {blocks}
      </Grid>
    </main>
  );
}
