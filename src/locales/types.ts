export type Translation = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    projectsTitle: string;
    webTitle: string;
    marketingTitle: string;
    supportTitle: string;
    educationTitle: string;
    privacyTitle: string;
    cookiesTitle: string;
  };
  nav: {
    home: string;
    services: string;
    projects: string;
    contact: string;
    web: string;
    marketing: string;
    support: string;
    education: string;
    privacy: string;
    cookies: string;
  };
  hero: {
    label: string;
    heading: string;
    subheading: string;
    ctaPrimary: string;
  };
  offerHeading: string;
  services: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  solutions: {
    web: { title: string; description: string; cta: string };
    marketing: { title: string; description: string; cta: string };
    support: { title: string; description: string; cta: string };
    academy: { title: string; description: string; cta: string };
  };
  marketingPage: {
    intro: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      positioning: string[];
      ctaPrimary: string;
      ctaSecondary: string;
    };
    offeringsTitle: string;
    offerings: string[];
    marketingTitle: string;
    marketingText: string;
    packagesTitle: string;
    packagesIntro: string;
    packages: { icon: string; title: string; subtitle: string; description: string; bullets: string[]; note?: string }[];
    packagesCtaTitle: string;
    packagesCtaText: string;
    packagesCtaPrimary: string;
    packagesCtaDownload: string;
  };
  educationPage: {
    intro: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      positioning: string[];
      ctaPrimary: string;
      ctaSecondary: string;
      academyCta: string;
    };
    offeringsTitle: string;
    offerings: string[];
    marketingTitle: string;
    marketingText: string;
    commsTitle: string;
    comms: string[];
    academyTitle: string;
    academyText: string;
    academyLink: string;
  };
  supportPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    intro: string;
    offeringsTitle: string;
    offerings: string[];
    packagesTitle: string;
    packages: { icon: string; title: string; description: string }[];
  };
  webPage: {
    intro: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      positioning: string[];
      ctaPrimary: string;
      ctaSecondary: string;
    };
    offeringsTitle: string;
    offerings: string[];
    marketingTitle: string;
    marketingText: string;
    packagesTitle: string;
    packagesIntro: string;
    packages: { icon: string; title: string; subtitle: string; description: string; bullets: string[]; note?: string }[];
    packagesCtaTitle: string;
    packagesCtaText: string;
    packagesCtaPrimary: string;
    packagesCtaDownload: string;
    processTitle: string;
    process: { title: string; description: string; note?: string }[];
    stackTitle: string;
    stacks: { title: string; items: string[] }[];
    ctaTitle: string;
    ctaText: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  projects: {
    title: string;
    intro: string;
    items: { name: string; summary: string }[];
    detailLabel?: string;
    githubLabel?: string;
    blog: {
      slug: string;
      title: string;
      date: string;
      readTime: string;
      summary: string;
      body: string[];
      content: string[];
      tech: string[];
      link?: string;
      image?: string;
      gallery?: string[];
    }[];
  };
  contactSection: {
    heading: string;
    description: string;
    regionTag: string;
    responseTag: string;
    captchaPrompt: string;
    captchaPlaceholder: string;
    captchaError: string;
    revealCta: string;
    openingCta: string;
    copy: string;
    copied: string;
    mapAlt: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    button: string;
    success: string;
  };
  notFound: {
    title: string;
    description: string;
    back: string;
  };
  privacy: {
    title: string;
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      list?: string[];
      links?: { label: string; href: string }[];
    }[];
    contact: {
      heading: string;
      paragraphs: string[];
      email: string;
    };
  };
  cookies: {
    title: string;
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      list?: string[];
    }[];
    contact: {
      heading: string;
      paragraphs: string[];
      email: string;
    };
  };
};
