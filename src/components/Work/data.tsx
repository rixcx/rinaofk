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
    title: "Previous portfolio site",
    caption: "caption text",
    url: "pre_portfolio",
    imageSrc: "/01.png",
    tools: ["XD","VSCode","figma"],
  },
  {
    id: "2",
    title: "r.blog",
    caption: "caption text",
    url: "rblog",
    imageSrc: "/02.png",
    tools: ["XD","VSCode","photoshop"],
  },
  {
    id: "3",
    title: "portfolio site",
    caption: "caption text",
    url: "portfolio",
    imageSrc: "/02.png",
    tools: ["XD","VSCode","docker"],
  },
];

export default data;