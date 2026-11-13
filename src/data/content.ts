/** All page copy lives here so wording can change without touching markup. */

export const hero = {
  eyebrow: 'Goodwill Global Foundation',
  title: 'Serving humanity beyond boundaries.',
  lead: 'We stand with people facing poverty, hardship and exclusion — so that everyone, whatever their background, can live with dignity, opportunity and peace.',
};

export const vision =
  'To build a future where every heart feels safe, every voice is respected, and every soul has the freedom to live in peace and happiness.';

export const mission =
  'To serve humanity beyond boundaries, respect every individual, protect the vulnerable, and spread peace through our actions.';

export const about = {
  title: 'Compassion, backed by action.',
  paragraphs: [
    'Goodwill Global Foundation is a non-political, impartial group of people who believe that education and opportunity come with a responsibility to give back.',
    'We look beyond one-time relief to lasting change: practical, on-the-ground support that helps individuals and families become self-reliant, and that connects communities in Canada, India and around the world.',
  ],
};

export interface IconCard {
  icon: 'livelihood' | 'education' | 'health' | 'harmony' | 'learn' | 'compass' | 'scale' | 'people' | 'hands' | 'globe';
  title: string;
  text: string;
}

export const pillars: IconCard[] = [
  {
    icon: 'livelihood',
    title: 'Ending poverty',
    text: 'Breaking generational cycles of poverty through livelihood training, micro-enterprise support and timely relief for families in need.',
  },
  {
    icon: 'education',
    title: 'Empowering through education',
    text: 'Opening doors with learning centres, scholarships and digital literacy — so children and adults alike can shape their own futures.',
  },
  {
    icon: 'health',
    title: 'Accessible healthcare',
    text: 'Bringing medical care, maternal health and mental-health support closer to those who need it. Healthcare is a right, not a privilege.',
  },
  {
    icon: 'harmony',
    title: 'Ethics & harmony',
    text: 'Uniting people of every faith and tradition around shared values — compassion, honesty and reverence for life.',
  },
];

export const programs: IconCard[] = [
  {
    icon: 'learn',
    title: 'Health education',
    text: 'Clear, friendly sessions on healthy eating, disease prevention, children’s health, mental well-being and living with chronic conditions.',
  },
  {
    icon: 'compass',
    title: 'Guidance for newcomers',
    text: 'A welcoming first step for families finding their way through the Canadian healthcare system and local services.',
  },
  {
    icon: 'hands',
    title: 'Practical family support',
    text: 'Working with community partners to connect families with help for food, housing and other everyday essentials.',
  },
  {
    icon: 'scale',
    title: 'Legal awareness',
    text: 'Helping people understand their rights and reach the justice and support they are entitled to.',
  },
  {
    icon: 'people',
    title: 'Women & youth',
    text: 'Programmes that support women’s welfare and give young people the skills and confidence to lead.',
  },
  {
    icon: 'globe',
    title: 'Connecting communities',
    text: 'Building bridges between communities in India and across the globe through shared responsibility and collective effort.',
  },
];

export const values = [
  { title: 'Dignity', text: 'Everyone is welcomed with respect. No one’s needs matter less.' },
  { title: 'Impartiality', text: 'Non-political, guided by need — not borders, backgrounds or beliefs.' },
  { title: 'Integrity', text: 'Transparent governance and careful stewardship of every resource.' },
  { title: 'Listening', text: 'Communities shape our priorities; privacy and independence are protected.' },
];

export const founderMessage = {
  title: 'A bridge between human potential and human dignity.',
  paragraphs: [
    'In a world often divided by geography, status and ideology, our vision is more than an aspiration — it is a blueprint for compassionate, systemic action.',
    'True progress cannot be measured by economic metrics alone. It is measured by the safety, freedom and well-being of the people in our communities. When a heart feels safe, fear gives way to resilience. When a voice is respected, people step forward as architects of their own destiny.',
    'Service beyond boundaries means our reach is guided by human need rather than borders, backgrounds or beliefs. Every resource entrusted to us is used with transparency and care. We invite partners, donors and changemakers to join us.',
  ],
  closing:
    'Together, through deliberate kindness and courageous leadership, we will turn our vision into a living reality.',
};

/** Short excerpts from our members' personal vision statements. */
export const voices = [
  'Education and opportunity come with a responsibility to give back to society.',
  'Until we wipe away the tears of the person standing at the very end of the line, no progress holds real value.',
  'Caring for people begins with understanding their lives.',
];

export const getInvolved = {
  title: 'Goodwill grows when it is shared.',
  lead: 'Whether you give your time, your skills or your support, there is a place for you here. Partner with us, volunteer, or simply start a conversation.',
};
