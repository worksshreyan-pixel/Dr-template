export interface AssetMap {
  logo: {
    light: string;
    dark: string;
    favicon: string;
  };
  hero: {
    main: string;
    secondary: string;
  };
  doctor: {
    portrait: string;
    signature: string;
  };
  og: string;
  treatments: Record<string, string>;
  gallery: Record<string, string>;
  icons: Record<string, string>;
}

export const assets: AssetMap = {
  logo: {
    light: '/images/logo/logo-light.svg',
    dark: '/images/logo/logo-dark.svg',
    favicon: '/favicon.svg',
  },
  hero: {
    main: 'https://images.pexels.com/photos/6573364/pexels-photo-6573364.jpeg?auto=compress&cs=tinysrgb&w=1200',
    secondary:
      'https://images.pexels.com/photos/7078922/pexels-photo-7078922.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  doctor: {
    portrait: '/images/doctor/doctor-portrait.jpg',
    signature: '/images/doctor/signature.svg',
  },
  og: '/og-image.png',
  treatments: {},
  gallery: {},
  icons: {},
};
