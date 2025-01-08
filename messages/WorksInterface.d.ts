interface WorksDatailInterface {
  id: string;
  title: string;
  caption: string;
  type: string;
  url: string;
  workLink: string;
  ImageName: string;
  overview: string;
  duration: string;
  tools: string[];
  pointTitle01: string;
  pointText01: string;
  subImageSrc: string;
  discoveredTitle: string;
  discoveredText: string;
}

interface WorksInterface {
  [key: string]: WorksDatailInterface;
}

export default WorksInterface