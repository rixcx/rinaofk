export type WorkProps = {
  id: string;
  url: string;
  title: string;
  caption: string;
  imageSrc: string;
  tools: string[];
};

const data: WorkProps[] = [
  {
    id: "1",
    title: "Previous Portfolio - and-rix",
    caption: "a website about me",
    url: "pre_portfolio",
    imageSrc: "/works/img_works_preportfolio.png",
    tools: ["Adobe XD","Sass(SCSS)","gulp","git(CUI)","GitHub","Docker"],
    
  },
  {
    id: "2",
    title: "r.blog",
    caption: "a technology blog",
    url: "rblog",
    imageSrc: "/works/img_works_rblog.png",
    tools: ["Figma","Next.js","Sass(SCSS)","git(CUI)","GitHub","Docker-compose"],
  },
  {
    id: "3",
    title: "Portfolio - rinaofk",
    caption: "a website about me",
    url: "portfolio",
    imageSrc: "/works/img_works_portfolio.png",
    tools: ["Figma","Next.js(Typescript)","Sass(SCSS)","Emotion","git(CUI)","GitHub","Docker-compose"],
  },
];

export default data;