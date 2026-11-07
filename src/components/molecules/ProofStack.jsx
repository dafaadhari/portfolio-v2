import { Children, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import StickyBlock from '../atoms/StickyBlock';

const CARD_STEP_REM = 1.25; // How much of each covered card stays visible.
const SHRINK_PER_CARD = 0.03;

const StackCard = ({ index, total, progress, children }) => {
  const reduceMotion = useReducedMotion();
  const cardsAbove = total - 1 - index;
  const scale = useTransform(progress, [index / total, 1], [1, reduceMotion ? 1 : 1 - cardsAbove * SHRINK_PER_CARD]);

  return (
    <StickyBlock offset={`${8.25 + index * CARD_STEP_REM}rem`} gap="1rem" className="lg:sticky">
      <motion.div style={{ scale }} className="origin-top">
        {children}
      </motion.div>
    </StickyBlock>
  );
};

// Project cards stack on wide screens, each sliding over the last and pushing it back a little.
// Phones skip this: cards there are nearly as tall as the screen, so stacking would hide them.
const ProofStack = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const items = Children.toArray(children);

  return (
    // A gap, not space-y: space-y puts a bottom margin on each card, and a sticky card counts its margin,
    // so the card behind would be pushed up early and show well above the one covering it.
    <div ref={containerRef} className="flex flex-col gap-10 lg:gap-20">
      {items.map((item, index) => (
        <StackCard key={item.key} index={index} total={items.length} progress={scrollYProgress}>
          {item}
        </StackCard>
      ))}
    </div>
  );
};

export default ProofStack;
