import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Clarvion Health home"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src={variant === 'light' ? '/clarvion-logo-light.png' : '/clarvion-logo.png'}
        alt="Clarvion Health"
        className="block h-auto w-32 flex-shrink-0 sm:w-36 lg:w-40"
        width="2172"
        height="724"
      />
    </Link>
  );
}
