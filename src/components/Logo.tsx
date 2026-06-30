import Image from 'next/image';

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <Image
      src={dark ? '/brand-assets/logo-dark.svg' : '/brand-assets/logo.svg'}
      alt="CVOptimiza"
      width={160}
      height={36}
      priority
    />
  );
}
