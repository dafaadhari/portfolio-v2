import { useEffect, useRef } from 'react';

// A sticky element taller than the screen would have its bottom cut off. This one scrolls until
// its bottom is visible and only then sticks, so everything inside can always be read.
// It only writes a CSS variable, so scrolling and resizing never cause a React re-render.
const StickyBlock = ({ as: Tag = 'div', offset = '0px', gap = '0px', className = '', style, children, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new ResizeObserver(() => {
      element.style.setProperty('--h', `${Math.ceil(element.offsetHeight)}px`);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`top-[min(var(--stick-offset),calc(100svh_-_var(--h,0px)_-_var(--stick-gap)))] ${className}`}
      style={{ '--stick-offset': offset, '--stick-gap': gap, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default StickyBlock;
