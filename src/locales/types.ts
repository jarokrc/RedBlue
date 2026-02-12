export type Translation = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    webTitle: string;
    webDescription: string;
    marketingTitle: string;
    marketingDescription: string;
    supportTitle: string;
    supportDescription: string;
    educationTitle: string;
    educationDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    cookiesTitle: string;
    cookiesDescription: string;
    contactDescription: string;
    proposalTitle: string;
    proposalDescription: string;
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
  intro: {
    brand: string;
    title: string;
    subtitle: string;
    redblueTitle: string;
    redblueDescription: string;
    redblueCta: string;
    academyTitle: string;
    academyDescription: string;
    academyCta: string;
    languageLabel: string;
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
  webSolutionsPage2: {
    intro: string;
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      positioning: string[];
      ctaPrimary: string;
      ctaSecondary: string;
    };
    whatWeCreateTitle: string;
    whatWeCreate: string[];
    showcase: {
      alt: string;
      caption: string;
    };
    forWhomTitle: string;
    forWhomBullets: string[];
    trustTitle: string;
    trustSubtitle: string;
    trustPoints: string[];
    gallery: {
      leftAlt: string;
      rightAlt: string;
    };
    packagesTitle: string;
    packagesIntro: string;
    packages: { icon: string; title: string; subtitle: string; description: string; bullets: string[]; note?: string }[];
    packagesHelpTitle: string;
    packagesHelpText: string;
    packagesHelpCta: string;
    processTitle: string;
    process: { number: string; title: string; text: string }[];
    ctaBigTitle: string;
    ctaBigText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    techStackTitle: string;
    techStackIntro: string;
    techStacks: { title: string; items: string[] }[];
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
      linkLabel?: string;
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
  };
  notFound: {
    title: string;
    description: string;
    redirectIn: string;
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
  proposal: {
    title: string;
    subtitle: string;
    metaTitle: string;
    metaDescription: string;
    meta: {
      projectNameLabel: string;
      projectNamePlaceholder: string;
      clientNameLabel: string;
      clientNamePlaceholder: string;
      contactLabel: string;
      contactPlaceholder: string;
      notesLabel: string;
      notesPlaceholder: string;
    };
    toolboxTitle: string;
    toolboxHint: string;
    canvasTitle: string;
    emptyStateTitle: string;
    emptyStateText: string;
    exportTitle: string;
    exportHint: string;
    actions: {
      addHeader: string;
      addFooter: string;
      addHero: string;
      addText: string;
      addImage: string;
      addCta: string;
      addFeatures: string;
      importJson: string;
      downloadJson: string;
      copyJson: string;
      reset: string;
    };
    blockLabels: {
      header: string;
      footer: string;
      hero: string;
      text: string;
      image: string;
      cta: string;
      features: string;
    };
    fieldLabels: {
      title: string;
      subtitle: string;
      body: string;
      primaryCtaText: string;
      primaryCtaUrl: string;
      secondaryCtaText: string;
      secondaryCtaUrl: string;
      imageUrl: string;
      caption: string;
      layout: string;
      buttonText: string;
      buttonUrl: string;
      itemsTitle: string;
      itemsText: string;
      uploadImage: string;
      template: string;
      templateSupportWebp: string;
      templateSupportPng: string;
    };
    layoutOptions: {
      left: string;
      right: string;
      full: string;
    };
    buttons: {
      moveUp: string;
      moveDown: string;
      duplicate: string;
      remove: string;
      addItem: string;
      removeItem: string;
    };
    notices: {
      autoSave: string;
      copied: string;
      importError: string;
      resetConfirm: string;
    };
  };
};
