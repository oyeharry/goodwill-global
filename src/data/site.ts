/** Organisation-wide details. Edit here; every component reads from this file. */
export const site = {
  name: 'Goodwill Global Foundation',
  shortName: 'Goodwill Global',
  tagline: 'Serving humanity beyond boundaries.',
  description:
    'Goodwill Global Foundation is a non-political, community-driven organisation advancing dignity, education, healthcare and equal opportunity for all.',
  address: {
    street: '80 Kettlewell Crescent',
    city: 'Brampton',
    region: 'Ontario',
    postalCode: 'L6R 0T1',
    country: 'Canada',
  },
  // TODO: confirm — the number supplied has too many digits for a Canadian phone number.
  phone: '+1624-721-68006',
  // TODO: add an official contact email, e.g. 'info@yourdomain.org'.
  email: '',
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
      { label: 'Vision & mission', href: '#about' },
      { label: 'Our values', href: '#values' },
      { label: "Founder's message", href: '#founder' },
    ],
  },
  {
    label: 'What we do',
    href: '#pillars',
    children: [
      { label: 'Our four pillars', href: '#pillars' },
      { label: 'In the community', href: '#programs' },
    ],
  },
  {
    label: 'Leadership',
    href: '#leadership',
    children: [
      { label: 'Founder', href: '#founder' },
      { label: 'Board of Directors', href: '#board' },
      { label: 'Office bearers', href: '#office-bearers' },
    ],
  },
  { label: 'Contact', href: '#contact' },
];
