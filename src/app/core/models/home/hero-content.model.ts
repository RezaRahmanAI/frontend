import { CtaLink } from './cta-link.model';

export interface HeroAvatar {
  src: string;
  alt: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  trustedByline: string;
  avatars: HeroAvatar[];
  image: HeroImage;
}
