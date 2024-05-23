export type DevOptions = {
  [key: string]: boolean;
};

export type DevPrices = {
  title: string;
  price: string;
  desc: string;
  options: DevOptions;
};

export type PresentationT = {
  profil: string;
  human_quality: string[];
  contact: {
    [key: string]: string;
  };
};

export type Skills = {
  systems: (string[] | { percentage: number })[];
  languages: {
    [key: string]: (string[] | { percentage: number })[];
  };
  linguistiques: { [key: string]: number };
};

export type PresentationType = {
  presentation: PresentationT;
  skills: Skills;
};

export type FormationType = {
  date: string;
  school: string;
  diploma?: string;
  content?: string;
};

export type ExperienceType = {
  date: string;
  entreprise: string;
  project: string;
  description: string;
  technologies: string[];
};

export type MiniaturePortfolioType = {
  img: string;
  image: string;
  link: string;
};

export type DataJsonType = [
  formations: FormationType[],
  experiences: ExperienceType[],
  miniatures_portfolio: MiniaturePortfolioType[],
];

export type JaugeString = string[];

export type JaugeNumber = {
  percentage: number;
};

export type JaugeAdds = {
  jaugeStr: JaugeString;
  percentage: JaugeNumber;
}[];
