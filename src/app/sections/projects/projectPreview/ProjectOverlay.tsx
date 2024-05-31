'use client';

import { motion } from 'framer-motion';

import useHover from '@/app/hooks/useHover';
import Block from '@/components/Block';
import Grid from '@/components/Grid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProjectPreview } from '../../../../../types/project';

type ProjectOverlayProps = ProjectPreview;

export default function ProjectOverlay({
  name,
  slug,
  description,
  github,
  link,
  preview,
}: ProjectOverlayProps) {
  const { hoveredId, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    <>
      <Grid className="absolute left-0 top-0 right-0 bottom-0 z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition duration-300 hidden sm:grid">
        <Block
          col={2}
          row={2}
          className="border-none flex justify-center items-center group/content"
          isHovered={hoveredId === 'content'}
          hoverContent={
            <div className="flex flex-col gap-4 p-12">
              <h3 className="text-6xl font-bold text-primary-foreground">
                {name}
              </h3>
              <motion.p
                layoutId="p"
                layout="position"
                className="text-lg text-muted">
                {description}
              </motion.p>
              <motion.div
                layoutId="btn"
                layout="position">
                <Button
                  className="w-fit"
                  variant="secondary"
                  asChild>
                  <Link href={`/project/${slug}`}>Details</Link>
                </Button>
              </motion.div>
            </div>
          }
          onMouseEnter={() => handleMouseEnter('content')}
          onMouseLeave={handleMouseLeave}>
          <div className="text-3xl font-bold opacity-100 group-hover/content:opacity-0 transition delay-75">
            Content
          </div>
        </Block>
        <Block
          col={1}
          row={1}
          className="border-none flex justify-center items-center group/link"
          isHovered={hoveredId === 'link'}
          hoverContent={
            <div className="flex flex-col gap-4 p-6">
              <motion.p
                layoutId="p"
                layout="position"
                className="text-lg text-muted">
                Visit the site!
              </motion.p>
              <motion.div
                layoutId="btn"
                layout="position">
                <Button
                  className="w-fit"
                  variant="secondary"
                  asChild>
                  <Link href={link}>Go now</Link>
                </Button>
              </motion.div>
            </div>
          }
          onMouseEnter={() => handleMouseEnter('link')}
          onMouseLeave={handleMouseLeave}>
          <div className="text-3xl font-bold opacity-100 group-hover/link:opacity-0 transition delay-75">
            Link
          </div>
        </Block>
        <Block
          col={1}
          row={1}
          className="border-none flex justify-center items-center group/github"
          isHovered={hoveredId === 'github'}
          hoverContent={
            <div className="flex flex-col gap-4 p-6">
              <motion.p
                layoutId="p"
                layout="position"
                className="text-lg text-muted">
                View the code!
              </motion.p>
              <motion.div
                layoutId="btn"
                layout="position">
                <Button
                  className="w-fit"
                  variant="secondary"
                  asChild>
                  <Link href={github}>GitHub</Link>
                </Button>
              </motion.div>
            </div>
          }
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={handleMouseLeave}>
          <div className="text-3xl font-bold opacity-100 group-hover/github:opacity-0 transition delay-75">
            Github
          </div>
        </Block>
      </Grid>
      <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-b-lg z-10 p-3 flex flex-col gap-4 sm:hidden">
        <h3 className="text-primary-foreground text-md font-bold">{name}</h3>
      </div>
    </>
  );
}
