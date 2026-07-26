export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  type: 'before-after' | 'clinic' | 'procedure';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Acne Transformation',
    category: 'Acne',
    image: '/images/gallery/acne-result.jpg',
    type: 'before-after',
  },
  {
    id: 'g2',
    title: 'Laser Hair Removal',
    category: 'Laser',
    image: '/images/gallery/laser-result.jpg',
    type: 'before-after',
  },
  {
    id: 'g3',
    title: 'PRP Hair Regrowth',
    category: 'Hair',
    image: '/images/gallery/prp-result.jpg',
    type: 'before-after',
  },
  {
    id: 'g4',
    title: 'Pigmentation Correction',
    category: 'Pigmentation',
    image: '/images/gallery/pigmentation-result.jpg',
    type: 'before-after',
  },
  {
    id: 'g5',
    title: 'Chemical Peel Glow',
    category: 'Peels',
    image: '/images/gallery/peel-result.jpg',
    type: 'before-after',
  },
  {
    id: 'g6',
    title: 'Reception Area',
    category: 'Clinic',
    image: '/images/gallery/clinic-reception.jpg',
    type: 'clinic',
  },
  {
    id: 'g7',
    title: 'Treatment Room',
    category: 'Clinic',
    image: '/images/gallery/clinic-room.jpg',
    type: 'clinic',
  },
  {
    id: 'g8',
    title: 'Laser Suite',
    category: 'Clinic',
    image: '/images/gallery/clinic-laser.jpg',
    type: 'clinic',
  },
];

export const galleryCategories = [
  'All',
  'Acne',
  'Laser',
  'Hair',
  'Pigmentation',
  'Peels',
  'Clinic',
];
