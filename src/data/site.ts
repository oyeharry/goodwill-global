/** Organisation-wide details. Edit here; every component reads from this file. */
export const site = {
  name: 'Goodwill Global Foundation',
  shortName: 'Goodwill Global',
  tagline: 'Together for a Better Tomorrow',
  motto: 'Building Hope, Empowering Lives.',
  description:
    'Goodwill Global Foundation is a Canadian non-profit organization serving humanity through poverty relief, education, healthcare, environmental protection and community empowerment.',
  address: {
    street: '82 Kettlewell Crescent',
    city: 'Brampton',
    region: 'Ontario',
    postalCode: 'L6R 0T1',
    country: 'Canada',
  },
  phone: '+1 (647) 216-8006',
  email: 'goodwillglobal8@gmail.com',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export const navigation: NavItem[] = [
  {
    label: 'About us',
    href: '#about',
    children: [
      { label: 'Who we are', href: '#about' },
      { label: 'Vision & mission', href: '#vision' },
      { label: 'Our commitment', href: '#commitment' },
    ],
  },
  { label: 'What we do', href: '#work' },
  {
    label: 'Leadership',
    href: '#leadership',
    children: [
      { label: 'Our founder', href: '#founder' },
      { label: 'Board of Directors', href: '#board' },
      { label: 'Office bearers', href: '#office-bearers' },
      { label: 'Our members', href: '#members' },
    ],
  },
  { label: 'Contact', href: '#contact' },
];
