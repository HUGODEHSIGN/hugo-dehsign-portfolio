import FetchSlugs from '@/app/project/[slug]/FetchSlugs';
import Grid from '@/components/Grid';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  [key: string]: ReactNode;
};

export default function Layout({ children, blocks }: LayoutProps) {
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
