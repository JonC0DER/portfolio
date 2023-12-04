export type DevOptions = {
  [key: string]: boolean;
};

export type DevPrices = {
  title: string;
  price: string;
  desc: string;
  options: DevOptions;
};

export type PresentationType = {
  presentation: {
    profil: string;
    human_quality: string[];
    contact: {
      telephone: string;
      email: string;
      lastname: string;
      firstname: string;
      GitHub: string;
      portfolio: string;
    };
  };
  skills: {
    systems: string[];
    languages: {
      [key: string]: string[];
    };
    linguistiques: string[];
  };
};

export type FormationType = {
  date: string;
  school: string;
  diploma?: string;
};

export type ExperienceType = {
  date: string;
  entreprise: string;
  project: string;
  description: string;
  technologies: string[];
};

export type MiniaturePortfolioType = {
  image: string;
  link: string;
};

export type DataJsonType = [
  formations: FormationType[],
  experiences: ExperienceType[],
  miniatures_portfolio: MiniaturePortfolioType[],
];
