import type { ImageMetadata } from 'astro';
import sunilPhoto from '@/assets/team/sunil-kumar-thakur.jpg';

export interface Person {
  name: string;
  role: string;
  /** Optional portrait. Without one, the card shows the person's initials. */
  photo?: ImageMetadata;
}

/*
 * To add a portrait: move the file from src/assets/team/unassigned/ into
 * src/assets/team/, import it above, and set `photo` on the right person.
 */

export const founder: Person = {
  name: 'Sunil Kumar Thakur',
  role: 'Founder & Director',
  photo: sunilPhoto, // TODO: confirm this is the right portrait.
};

/** Listed in the official board sequence. */
export const boardOfDirectors: Person[] = [
  founder,
  { name: 'Rakesh Kumar', role: 'Director' },
  { name: 'Karanpreet Kaur', role: 'Director' },
  { name: 'Neha Rameshbhai Patel', role: 'Director' },
  { name: 'Sahil Thakur', role: 'Director' },
];

export const officeBearers: Person[] = [
  { name: 'Sagar Jaswal', role: 'President' },
  { name: 'Avinash Kumar', role: 'Secretary' },
];
