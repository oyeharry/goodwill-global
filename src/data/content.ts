/** All page copy lives here so wording can change without touching markup. */

export const hero = {
  eyebrow: 'Goodwill Global Foundation',
  title: 'Together for a better tomorrow.',
  lead: 'A Canadian non-profit serving humanity — supporting underprivileged communities and creating opportunities for individuals and families in need.',
};

export const about = {
  title: 'Building a more compassionate, inclusive and sustainable society.',
  paragraphs: [
    'Goodwill Global Foundation is a Canadian non-profit organization, established on October 27, 2026.',
    'We serve humanity by addressing social challenges, supporting underprivileged communities and creating opportunities for individuals and families in need. We believe everyone deserves access to basic necessities, quality education, healthcare, dignity and equal opportunity.',
    'Through charitable initiatives, public participation and collective effort, we work to bring meaningful and lasting change — in Canada and internationally.',
  ],
};

export interface Statement {
  label: string;
  /** The headline sentence. */
  text: string;
  /** A supporting line shown underneath. */
  detail: string;
}

export const statements: Statement[] = [
  {
    label: 'Our vision',
    text: 'A world where every individual can live with dignity, access essential resources, receive quality education and contribute positively to society.',
    detail:
      'We envision stronger communities built on compassion, equality, education, cultural understanding and sustainable development.',
  },
  {
    label: 'Our mission',
    text: 'To improve lives and strengthen communities through charitable initiatives, social support, education, healthcare, environmental protection and community empowerment.',
    detail:
      'We reach individuals and families facing social and economic challenges, and provide opportunities, resources and support for a better future.',
  },
];

export type IconName = 'hands' | 'education' | 'health' | 'home' | 'leaf' | 'trophy' | 'book';

export interface WorkArea {
  icon: IconName;
  title: string;
  /** Short label used in the hero. */
  short: string;
  points: string[];
}

export const workAreas: WorkArea[] = [
  {
    icon: 'hands',
    title: 'Poverty relief & social welfare',
    short: 'Poverty relief',
    points: [
      'Food, clothing, clean water and essential supplies for families in need',
      'Financial assistance for people facing economic hardship',
      'Help for disaster-affected communities',
      'Settlement and integration support for newcomers and immigrants',
    ],
  },
  {
    icon: 'education',
    title: 'Education & youth development',
    short: 'Education',
    points: [
      'Scholarships, books and learning materials',
      'Support for children and young people from disadvantaged backgrounds',
      'Academic development, career guidance and mentorship',
      'Leadership, confidence and life skills',
    ],
  },
  {
    icon: 'health',
    title: 'Healthcare & well-being',
    short: 'Healthcare',
    points: [
      'Access to essential healthcare services and medical resources',
      'Health and well-being awareness',
      'Awareness and access to support services for those affected by substance-use disorders',
    ],
  },
  {
    icon: 'home',
    title: 'Senior citizen welfare',
    short: 'Senior welfare',
    points: [
      'Reducing social isolation among senior citizens',
      'Social, recreational and community support programmes',
      'Initiatives that improve quality of life for the elderly',
    ],
  },
  {
    icon: 'leaf',
    title: 'Environmental protection',
    short: 'Environment',
    points: [
      'Tree plantation and conservation',
      'Community cleanliness and environmental awareness',
      'Water conservation, waste reduction and sustainable practices',
    ],
  },
  {
    icon: 'trophy',
    title: 'Youth, sports & leadership',
    short: 'Sports & leadership',
    points: [
      'Participation in sports and recreational activities',
      'Mentoring and leadership development programmes',
      'Building confidence, teamwork and self-esteem',
    ],
  },
  {
    icon: 'book',
    title: 'Religion, culture & community values',
    short: 'Culture & values',
    points: [
      'Awareness of Hindu religious teachings, traditions and values',
      'Religious and cultural education',
      'Lectures and workshops on Hindu culture, history and language',
    ],
  },
];

export const commitment = {
  title: 'A non-profit in purpose and in practice.',
  lead: 'We believe meaningful social change requires transparency, responsibility, dedication and collective participation.',
  points: [
    {
      title: 'Every resource serves the cause',
      text: 'All income and resources are dedicated to our charitable purposes — never to generating profit for members.',
    },
    {
      title: 'Voluntary leadership',
      text: 'Our directors serve without remuneration. Only reasonable expenses incurred in their duties may be reimbursed.',
    },
    {
      title: 'Open and accountable',
      text: 'We hold ourselves to transparency and responsibility in everything we do.',
    },
  ],
};

export const founderProfile =
  'Sunil Kumar founded Goodwill Global Foundation with the vision of promoting social welfare, supporting underprivileged communities and contributing towards meaningful social development.';

export const leadership = {
  title: 'The people behind the purpose.',
  boardIntro:
    'The Foundation is guided by a dedicated Board of Directors responsible for its governance, administration and overall development.',
  members: {
    title: 'Our members',
    paragraphs: [
      'Our members are an integral part of Goodwill Global Foundation. They contribute through their participation, ideas, dedication and commitment to the Foundation’s charitable objectives.',
      'Together, our leadership team and members work towards building stronger communities and creating a positive impact on society.',
    ],
  },
};

export const together = {
  title: 'Even small acts of kindness create meaningful change.',
  lead: 'Serving society is a shared responsibility. Every contribution, effort and initiative helps build a better future — join us in creating opportunities and empowering communities.',
};
