type ToolsProps = {
  tools :  string[];
  className? : string;
};

export const Tools = (props: ToolsProps) => {
  return (
    <ul className={props.className}>
      {props.tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>
  );
};
