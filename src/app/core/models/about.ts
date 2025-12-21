export interface AboutContent {
  team: TeamSection;
}

export interface TeamSection {
  header: TeamHeader;
  members: TeamMember[];
}

export interface TeamHeader {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  image: {
    src: string;
    alt: string;
  };
  specialties: string[];
}
