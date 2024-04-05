'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '../../app/common/global'

import Image from "next/image";

import Data from './data';

export const Work = () => {
  return (
    <div css={list}>
      {Data.map((work) => (
        <div css={item} key={work.id}>
            <div css={img}>
            <Image
              src="https://placehold.co/295x200.png"
              alt="Vercel Logo"
              width={295}
              height={200}
            />
          </div>
          <dl css={desc}>
            <dt>{work.title}</dt>
            <dd>{work.url}</dd>
            <dd>{work.id}</dd>
            <dd>{work.caption}</dd>
          </dl>
            <ul css={tags}>
            {work.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <div css={link} className="hover"><a href="/">Read more</a></div>
        </div>
      ))}
    </div>
  );
}

/*---------- css ----------*/
export const list = css`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  gap: 21px;
  
  ${global.sp} {
    grid-template-columns: auto;
  }
`
export const item = css`
  position: relative;
  top: 0;
  left: 0;
  padding: 22px 20px 30px 20px;
  border: 2px solid var(--color-black);
  border-radius: 10px;
  background-color: var(--color-white);
  transition: all .15s;
  
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-black);
    border-radius: 10px;
    background-color: var(--color-tirminaly);
    transition: all .15s;
  }
  
  &:hover {
    top: -10px;
    left: -10px;
    
    &::after {
      top: 10px;
      left: 10px;
    }
    
    & .hover a {
      text-decoration: underline 1.5px;
    }
  }
`

export const img = css`
  margin-bottom: 26px;

  > img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`

export const desc = css`
  margin-bottom: 26px;
  
  > dt {
    margin-bottom: 10px;
    font-size: var(--font-05);
  }
  
  > dd {
    line-height: 1.6;
  }
`

export const tags = css`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 26px;
  
  > li {
    padding: 5px 15px;
    border-radius: 30px;
    font-size: 12px;
    color: var(--color-gray-dark);
    background-color: var(--color-gray-light);
  }
`

export const link = css`
  text-align: right;

  > a {
    display: inline-block;
    transition: all .15s;
    text-decoration: underline transparent;
    text-underline-offset: 3px;
  }
`

