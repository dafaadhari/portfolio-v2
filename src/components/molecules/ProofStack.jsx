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
    <div ref={containerRef} className="space-y-10 lg:space-y-20">
      {items.map((item, index) => (
        <StackCard key={item.key} index={index} total={items.length} progress={scrollYProgress}>
          {item}
        </StackCard>
      ))}
    </div>
  );
};

export default ProofStack;
