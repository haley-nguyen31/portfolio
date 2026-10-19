// Gallery groups and alt text for the side projects (images live in src/assets/images).
export interface MediaItem { name: string; alt: string; caption?: string }
export interface MediaGroup { title: string; items: MediaItem[]; cols?: string }

export const sideProjectMedia: Record<string, MediaGroup[]> = {
  'pencil-philosophy': [
    {
      title: 'The organization',
      cols: 'grid-cols-1 md:grid-cols-3',
      items: [
        { name: 'pencil-team.webp', alt: 'Pencil Philosophy leadership: the Executive Board (Saigon - Hanoi) and the Advisory Board', caption: 'Executive Board and Advisory Board' },
        { name: 'pencil-timeline.webp', alt: "Timeline of Pencil Philosophy's first 5 years, 2017 to 2021", caption: '5 years of Pencil Philosophy, 2017 – 2021' },
        { name: 'pencil-partners.webp', alt: 'Logos of sponsors and partners: VEPR, EducationUSA, The American Center Hanoi, Fulbright University Vietnam, ICHA Travel, YBOX.VN, ERATO, 4Words, VietAbroader', caption: 'Sponsors, funders and partners' },
      ],
    },
  ],
  brandlab: [
    {
      title: 'Content production',
      cols: 'grid-cols-1 sm:grid-cols-3',
      items: [
        { name: 'p13-02.jpg', alt: '101% Brandlab Facebook post promoting a branding course' },
        { name: 'p13-03.jpg', alt: '101% Brandlab brand mockup' },
        { name: 'p13-04.jpg', alt: '101% Brandlab Facebook post with photos from a class' },
      ],
    },
  ],
  'hub-de-tana': [
    {
      title: 'Lifestyle photoshoot',
      cols: 'grid-cols-2 md:grid-cols-4',
      items: [
        { name: 'p14-03.jpg', alt: 'A cappuccino in a Hub de Tana cup' },
        { name: 'p14-04.jpg', alt: 'An iced matcha drink on a table' },
        { name: 'p14-05.jpg', alt: 'Customers working at a table in the cafe' },
        { name: 'p14-06.jpg', alt: 'Pastries in the cafe display case' },
      ],
    },
    {
      title: 'Facebook post and Reels',
      cols: 'grid-cols-2 sm:grid-cols-4',
      items: [
        { name: 'p14-02.jpg', alt: 'Hub de Tana Facebook post' },
        { name: 'p14-07.jpg', alt: 'Instagram Reel screenshot: the Hub de Tana interior' },
        { name: 'p14-08.jpg', alt: 'Instagram Reel screenshot: whisking matcha' },
        { name: 'p14-09.jpg', alt: 'Instagram Reel screenshot: the cafe in warm light' },
      ],
    },
  ],
  'la-roche-posay': [
    {
      title: 'Campaign boards',
      cols: 'grid-cols-1 sm:grid-cols-3',
      items: [
        { name: 'p15-01.jpg', alt: "Campaign summary board for La Roche 'Pồ'-Say" },
        { name: 'p15-02.jpg', alt: "Key visual: Pồ, the digital skin buddy, next to a La Roche-Posay product" },
        { name: 'p15-03.jpg', alt: 'Campaign board: blind box, gamification and rewards on social media' },
      ],
    },
    {
      title: 'Vietnam Young Lions 2025',
      cols: 'grid-cols-1 sm:grid-cols-2',
      items: [
        { name: 'p15-04.jpg', alt: 'The team on stage at the Vietnam Young Lions grand finale' },
        { name: 'p04-11.jpg', alt: 'Vietnam Young Lions Facebook post announcing the Silver winner' },
      ],
    },
  ],
  talyvi: [
    {
      title: 'Prototype and coverage',
      cols: 'grid-cols-1 sm:grid-cols-3',
      items: [
        { name: 'p16-01.jpg', alt: 'Figma prototype of the TALYVI app screens' },
        { name: 'p16-02.jpg', alt: 'Facebook post about TALYVI in the VCCI competition' },
        { name: 'p04-07.jpg', alt: 'Certificate: Top 11, Vietnam Social Innovation Challenge' },
      ],
    },
  ],
};
