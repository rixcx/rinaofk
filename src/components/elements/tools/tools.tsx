'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type ToolsProps = {
  tools :  string[];
  className? : string;
};

export const Tools = (props: ToolsProps) => {
  return (
    <ul css={list} className={props.className}>
      {props.tools.map((tool) => (
        <li key={tool}>{tool}</li>
      ))}
    </ul>
  );
};

const list = css`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  
  > li {
    padding: 5px 15px;
    border-radius: 30px;
    font-size: 12px;
    line-height: normal;
    color: var(--color-gray-dark);
    background-color: var(--color-gray-light);
  }
`