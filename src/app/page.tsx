'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from './common/global'

import Image from "next/image";

import { Button } from '../components/elements/button/button';

export default function Home() {
  return (
    <main css={main}>

      <div css={bg}>
        <div css={global.container}>
          <div css={hero}>
            <h1 css={title}>&#x1F427; Hello. I'm <span>Rina</span>,<br />Web Designer and developer.</h1>
            <p css={desc}>I worked as a web designer and web engineer in Japan from April 2017 to August 2023.<br />Currently, I'm in Australia, learning English and improving my web development skills.</p>
            <Button
              type="whiteSolid"
              link="/about"
            >About me</Button>
          </div>
        </div> 
      </div>

      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/common/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <div>
        <Image
          src="/common/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      
      <Button
        type="borderd"
        link="/"
      >borderd</Button>
      <Button
        type="greenSolid"
        link="/"
      >greenSolid</Button>
      
    </main>
  );
}

/*---------- css ----------*/
export const main = css`
  background-color: var(--color-white);
`;

export const bg = css`
  background-color: var(--color-tirminaly);
  height: 525px;
  margin-top: -120px;
  margin-bottom: calc(120px + 35px + 165px);
  padding-top: 120px;
`;

export const hero = css`
  position: relative;
  padding: 125px 100px 80px 185px;
  border: 2px solid var(--color-black);
  border-radius: 265px 15px 15px 15px;
  background-color: var(--color-primary);
  
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-black);
    border-radius: 265px 15px 15px 15px;
    background-color: var(--color-secondary);
  }
`;

export const title = css`
  font-size: var(--font-h1);
  font-weight: bold;
  margin-bottom: 40px;
  
  > span {
    position: relative;
    display: inline-block;
    margin-right: 15px;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: -10px;
      width: 140px;
      height: 20px;
      background: url(/index/deco_hero.svg);
    }
  }
`

export const desc= css`
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 30px;
`
