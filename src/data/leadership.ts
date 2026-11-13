import type { ImageMetadata } from 'astro';
import karanpreetPhoto from '@/assets/team/karanpreet-kaur.jpg';
import nehaPhoto from '@/assets/team/neha-rameshbhai-patel.jpg';
import rakeshPhoto from '@/assets/team/rakesh-kumar.jpg';
import sahilPhoto from '@/assets/team/sahil-thakur.jpg';
import sunilPhoto from '@/assets/team/sunil-kumar-thakur.jpg';

export interface PersonalVision {
  /** One-line pull quote, shown in the "In our members' words" section. */
  quote: string;
  /** Fuller statement, shown when a visitor opens "Read vision". */
  paragraphs: string[];
}

export interface Person {
  /** Unique, URL-safe id. */
  slug: string;
  name: string;
  role: string;
  /** Optional professional background shown under the role. */
  profession?: string;
  /** Optional portrait. Without one, the card shows the person's initials. */
  photo?: ImageMetadata;
  /** Optional personal vision for joining the foundation. */
  vision?: PersonalVision;
}

/*
 * To add a portrait: put the file in src/assets/team/, import it above,
 * and set `photo` on the right person.
 */

export const founder: Person = {
  slug: 'sunil-kumar-thakur',
  name: 'Sunil Kumar Thakur',
  role: 'Founder & Director',
  profession: 'M.A. in Sociology',
  photo: sunilPhoto,
};

/** Listed in the official board sequence. */
export const boardOfDirectors: Person[] = [
  founder,
  {
    slug: 'rakesh-kumar',
    name: 'Rakesh Kumar',
    role: 'Director',
    profession: 'Teacher',
    photo: rakeshPhoto,
    vision: {
      quote:
        'Until we wipe away the tears of the person standing at the very end of the line, no progress holds real value.',
      paragraphs: [
        'I believe that when empathy is backed by a disciplined and honest plan of action, it can overcome deep inequalities and restore dignity to those who suffer. I am drawn to the foundation’s non-political, impartial, grassroots approach — real solutions on the ground, not policies on paper.',
        'For me, social service is a sacred practice. Education and healthcare are its two pillars: value-based education that helps every child grow into a good human being and a responsible citizen, and basic healthcare within reach of everyone, so that no life is lost for want of treatment.',
        'A great society is built not by grand buildings or prosperity alone, but by the character of its people — honesty, compassion, tolerance and mutual respect. My goal is a just and equal society where no one remains hungry, uneducated, sick or helpless.',
      ],
    },
  },
  {
    slug: 'karanpreet-kaur',
    name: 'Karanpreet Kaur',
    role: 'Director',
    profession: 'Registered Nurse',
    photo: karanpreetPhoto,
    vision: {
      quote: 'Caring for people begins with understanding their lives.',
      paragraphs: [
        'As a healthcare professional, I have learned that a person’s well-being is shaped by the challenges they face at home, the support they can rely on and their ability to reach help. I want the foundation to be a trusted source of support, where everyone is welcomed with dignity and listened to with patience and kindness.',
        'I hope to make health topics easier to understand — healthy eating, disease prevention, children’s health, mental well-being and living with chronic conditions — and to help newcomers find their way through the Canadian healthcare system.',
        'My long-term vision is for the foundation to become a dependable part of community life: a place people can approach for information, connection or encouragement, and where those we support can share their own strengths in return.',
      ],
    },
  },
  {
    slug: 'neha-rameshbhai-patel',
    name: 'Neha Rameshbhai Patel',
    role: 'Director',
    profession: 'Medical Office Assistant',
    photo: nehaPhoto,
    vision: {
      quote:
        'My mission is to serve humanity beyond boundaries, respect every individual, protect the vulnerable, and spread peace through my actions.',
      paragraphs: [
        'My vision is to build a future where every heart feels safe, every voice is respected, and every soul has the freedom to live in peace and happiness.',
      ],
    },
  },
  {
    slug: 'sahil-thakur',
    name: 'Sahil Thakur',
    role: 'Director',
    photo: sahilPhoto,
    vision: {
      quote: 'Education and opportunity come with a responsibility to give back to society.',
      paragraphs: [
        'My vision is to help build a society where everyone, whatever their social or financial background, has access to dignity, education, justice and equal opportunity.',
        'I see the foundation as a platform that goes beyond immediate assistance and invests in long-term social development — through education, legal awareness, youth empowerment, women’s welfare and support for underprivileged communities.',
        'I also hope to build stronger connections between communities in India and across the globe, bringing people together through compassion, responsibility and collective effort — so that the foundation creates real opportunities, transforms lives and inspires generations to contribute to a better society.',
      ],
    },
  },
];

export const officeBearers: Person[] = [
  { slug: 'sagar-jaswal', name: 'Sagar Jaswal', role: 'President' },
  { slug: 'avinash-kumar', name: 'Avinash Kumar', role: 'Secretary' },
];

export const everyone: Person[] = [...boardOfDirectors, ...officeBearers];
