'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';

export default function Footer() {
  return (
    <footer className="container my-4">
      <nav className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between p-6 bg-primary rounded-lg">
        <Button variant="outline">Hugo Dehsign</Button>
        <div className="flex flex-col sm:flex-row items-start gap-2">
          <Button
            variant="link"
            className="text-primary-foreground">
            <Link
              href="https://www.linkedin.com/in/hugo-hsi/"
              target="_blank">
              LinkedIn
            </Link>
          </Button>
          <Button
            variant="link"
            className="text-primary-foreground">
            <Link
              href="https://github.com/HUGODEHSIGN/"
              target="_blank">
              Github
            </Link>
          </Button>
          <Button
            variant="link"
            className="text-primary-foreground"
            onClick={() => {
              navigator.clipboard.writeText('hhsi@hugodehsign');
              toast('Copied to clipboard');
            }}>
            hhsi@hugodehsign
          </Button>
        </div>
      </nav>
    </footer>
  );
}
