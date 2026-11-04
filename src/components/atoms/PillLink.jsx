import { pillClass } from './pillStyles';

const PillLink = ({ variant = 'ink', external = false, className = '', children, ...props }) => (
  <a
    className={`${pillClass(variant)} ${className}`}
    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    {...props}
  >
    {children}
  </a>
);

export default PillLink;
