export interface Treatment {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
  duration: string;
  sessions: string;
  suitableFor: string;
}

export const treatments: Treatment[] = [
  {
    slug: 'acne-treatment',
    title: 'Acne Treatment',
    shortDescription: 'Clear active acne and prevent future breakouts.',
    description:
      'A personalised, multi-step approach that targets the root causes of acne — excess oil, bacteria and inflammation — for visibly clearer skin.',
    icon: 'Sparkles',
    image: '/images/treatments/acne.jpg',
    benefits: [
      'Reduces active breakouts and redness',
      'Prevents future acne formation',
      'Minimises pore congestion',
      'Tailored to your skin type',
    ],
    duration: '30–45 min per session',
    sessions: '6–8 sessions recommended',
    suitableFor: 'All skin types, teens & adults',
  },
  {
    slug: 'acne-scars',
    title: 'Acne Scars',
    shortDescription: 'Smooth and resurface acne-scarred skin.',
    description:
      'Advanced resurfacing techniques that stimulate collagen and visibly reduce the depth and appearance of acne scars.',
    icon: 'Smile',
    image: '/images/treatments/acne-scars.jpg',
    benefits: [
      'Smooths uneven skin texture',
      'Stimulates natural collagen',
      'Reduces scar depth over time',
      'Improves overall skin tone',
    ],
    duration: '45–60 min per session',
    sessions: '4–6 sessions recommended',
    suitableFor: 'Moderate to deep acne scars',
  },
  {
    slug: 'pigmentation',
    title: 'Pigmentation',
    shortDescription: 'Even out dark spots and uneven tone.',
    description:
      'Targeted treatments that fade dark spots, sun damage and uneven pigmentation for a brighter, more uniform complexion.',
    icon: 'Sun',
    image: '/images/treatments/pigmentation.jpg',
    benefits: [
      'Fades dark spots and patches',
      'Evens out skin tone',
      'Brightens dull complexion',
      'Suitable for sensitive skin',
    ],
    duration: '30 min per session',
    sessions: '5–7 sessions recommended',
    suitableFor: 'Sun spots, melasma, post-acne marks',
  },
  {
    slug: 'melasma',
    title: 'Melasma',
    shortDescription: 'Manage stubborn hormonal pigmentation.',
    description:
      'A combination of medical-grade peels, topical protocols and laser therapy designed to manage hormonal pigmentation long-term.',
    icon: 'Droplet',
    image: '/images/treatments/melasma.jpg',
    benefits: [
      'Targets hormonal pigmentation',
      'Reduces patchy discolouration',
      'Long-term maintenance plan',
      'Safe for Indian skin',
    ],
    duration: '30–45 min per session',
    sessions: '6–10 sessions recommended',
    suitableFor: 'Hormonal and sun-induced melasma',
  },
  {
    slug: 'hair-fall',
    title: 'Hair Fall',
    shortDescription: 'Diagnose and treat hair loss at the root.',
    description:
      'Comprehensive diagnosis of the underlying cause of hair fall, followed by a targeted medical and nutritional treatment plan.',
    icon: 'Wind',
    image: '/images/treatments/hair-fall.jpg',
    benefits: [
      'Identifies root cause of hair loss',
      'Strengthens existing hair',
      'Slows further thinning',
      'Supports regrowth naturally',
    ],
    duration: '30 min consultation',
    sessions: 'Ongoing personalised plan',
    suitableFor: 'Male & female pattern hair loss',
  },
  {
    slug: 'prp-therapy',
    title: 'PRP Therapy',
    shortDescription: 'Regrow hair with platelet-rich plasma.',
    description:
      'A natural regenerative treatment that uses your own platelet-rich plasma to stimulate dormant hair follicles and promote visible regrowth.',
    icon: 'Syringe',
    image: '/images/treatments/prp.jpg',
    benefits: [
      'Uses your body\u2019s own growth factors',
      'Stimulates dormant follicles',
      'Visible regrowth in 3–6 months',
      'Minimal downtime',
    ],
    duration: '45–60 min per session',
    sessions: '6–8 sessions recommended',
    suitableFor: 'Early to moderate hair thinning',
  },
  {
    slug: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    shortDescription: 'Safe, lasting reduction for all skin types.',
    description:
      'USFDA-approved laser technology calibrated for Indian skin tones, delivering safe, gradual and lasting hair reduction.',
    icon: 'Zap',
    image: '/images/treatments/laser.jpg',
    benefits: [
      'USFDA-approved technology',
      'Calibrated for Indian skin',
      'Virtually painless sessions',
      'Lasting hair reduction',
    ],
    duration: '20–45 min per session',
    sessions: '6–8 sessions recommended',
    suitableFor: 'All skin types and tones',
  },
  {
    slug: 'botox',
    title: 'Botox',
    shortDescription: 'Soften fine lines and wrinkles.',
    description:
      'Precise, natural-looking wrinkle relaxation that softens expression lines while preserving your natural facial movement.',
    icon: 'Smile',
    image: '/images/treatments/botox.jpg',
    benefits: [
      'Softens forehead and frown lines',
      'Natural-looking results',
      '15-min walk-in procedure',
      'Results last 3–6 months',
    ],
    duration: '15–20 min per session',
    sessions: 'Every 3–6 months',
    suitableFor: 'Adults 25+ with expression lines',
  },
  {
    slug: 'fillers',
    title: 'Fillers',
    shortDescription: 'Restore volume and define contours.',
    description:
      'Hyaluronic acid dermal fillers that restore lost volume, define facial contours and smooth deep folds for a refreshed appearance.',
    icon: 'Heart',
    image: '/images/treatments/fillers.jpg',
    benefits: [
      'Restores facial volume',
      'Defines jawline & cheeks',
      'Immediate visible results',
      'Lasts 9–18 months',
    ],
    duration: '30–45 min per session',
    sessions: 'Every 9–18 months',
    suitableFor: 'Adults with volume loss',
  },
  {
    slug: 'chemical-peels',
    title: 'Chemical Peels',
    shortDescription: 'Reveal fresh, glowing skin.',
    description:
      'Medical-grade chemical peels that gently exfoliate damaged outer layers, revealing smoother, brighter and more even-toned skin.',
    icon: 'Flower2',
    image: '/images/treatments/peels.jpg',
    benefits: [
      'Reveals fresh skin layer',
      'Improves tone and texture',
      'Reduces mild scarring',
      'No extended downtime',
    ],
    duration: '30 min per session',
    sessions: '4–6 sessions recommended',
    suitableFor: 'Dull skin, mild acne, pigmentation',
  },
  {
    slug: 'vitiligo',
    title: 'Vitiligo',
    shortDescription: 'Repigmentation with advanced therapy.',
    description:
      'A combination of narrow-band UVB therapy, topical immunomodulators and surgical options to support natural repigmentation.',
    icon: 'Shield',
    image: '/images/treatments/vitiligo.jpg',
    benefits: [
      'Supports natural repigmentation',
      'Slows depigmentation spread',
      'Personalised protocol',
      'Long-term monitoring',
    ],
    duration: 'Varies by protocol',
    sessions: 'Ongoing care plan',
    suitableFor: 'Stable vitiligo patches',
  },
  {
    slug: 'skin-allergy',
    title: 'Skin Allergy Treatment',
    shortDescription: 'Relief for eczema, rashes and sensitivities.',
    description:
      'Accurate diagnosis of triggers followed by a calming, steroid-sparing treatment plan for long-term relief from allergic skin conditions.',
    icon: 'Leaf',
    image: '/images/treatments/allergy.jpg',
    benefits: [
      'Identifies allergy triggers',
      'Calms inflammation & itching',
      'Steroid-sparing approach',
      'Prevents future flare-ups',
    ],
    duration: '30 min consultation',
    sessions: 'Personalised plan',
    suitableFor: 'Eczema, contact dermatitis, urticaria',
  },
];
