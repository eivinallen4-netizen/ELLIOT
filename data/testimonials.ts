export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  category: string;
  image?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rep-1",
    quote: "I finally know what to say the second they push back.",
    name: "SDR, SaaS — name withheld",
    category: "Stopped Freezing",
  },
  {
    id: "rep-2",
    quote: "I stopped sounding like a telemarketer.",
    name: "BDR, fintech — name withheld",
    category: "Stopped Freezing",
  },
  {
    id: "rep-3",
    quote: "I booked more this month than the last three combined.",
    name: "SMB AE, SaaS — name withheld",
    category: "Booked More Meetings",
  },
  {
    id: "rep-4",
    quote: "I got off the PIP — then got promoted to AE.",
    name: "Former SDR, SaaS — name withheld",
    category: "Off the PIP",
  },
  {
    id: "rep-5",
    quote: "I can hear myself getting better on the recordings.",
    name: "BDR, agency services — name withheld",
    category: "Stopped Freezing",
  },
  {
    id: "rep-6",
    quote: "My manager finally stopped flagging my calls in 1:1s.",
    name: "SDR, insurance — name withheld",
    category: "Off the PIP",
  },
  {
    id: "rep-7",
    quote: "Two promotions in eight months after I started sending in calls.",
    name: "AE, SaaS — name withheld",
    category: "Promoted",
  },
  {
    id: "rep-8",
    quote: "Booked meetings every week for six weeks straight, first time ever.",
    name: "BDR, SaaS — name withheld",
    category: "Booked More Meetings",
  },
  {
    id: "rep-9",
    quote: "Went from dreading objections to actually wanting them.",
    name: "SDR, services — name withheld",
    category: "Promoted",
  },
];
