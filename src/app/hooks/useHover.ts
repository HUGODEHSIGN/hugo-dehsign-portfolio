import { useEffect, useState } from 'react';

export default function useHover() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    if (!isHovering) {
      const timeout = setTimeout(() => {
        setHoveredId(null);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [isHovering]);

  function handleMouseEnter(id: string) {
    setIsHovering(true);
    setHoveredId(id);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return {
    hoveredId,
    handleMouseEnter,
    handleMouseLeave,
  };
}
