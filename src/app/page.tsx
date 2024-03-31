'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from './common/global'

import Image from "next/image";

import { Button } from '../components/elements/button/button';

import { Work } from '../components/Work/Work';

export default function Home() {
  return (
    <main>

      <div css={hero_bg}>
        <section css={global.container}>
          <div css={hero}>
            <h1 css={hero_title}>&#x1F427; Hello. I'm <span>Rina</span>,<br />Web Designer and developer.</h1>
            <p css={hero_desc}>I worked as a web designer and web engineer in Japan from April 2017 to August 2023.<br />Currently, I'm in Australia, learning English and improving my web development skills.</p>
            <Button
              type="whiteSolid"
              link="/about"
            >About me</Button>
          </div>
        </section> 
      </div>
      
      <section css={[global.container, works]}>
        <h2 css={works_title}>Works</h2>
        <div css={lists}>
          <Work
            title="Portfolio site"
          ></Work>
          <Work
            title="ToDo lists"
          ></Work>
          <Work
            title="r.blog"
          ></Work>
        </div>
      </section>
      
      <div css={about_bg}>
        <section css={[global.container, about]}>
          <div css={about_desc}>
            <h3>rinaofk</h3>
            <p>o gain experience of using tools, I built my portfolio site with I’ve never used such as VSCode, Git(CUI), GitHub, GitHub Pages and Docker.</p>
            <Button
              type="greenSolid"
              link="/about"
            >About me</Button>
          </div>
            <div css={about_img}>
              <Image
                src="https://placehold.co/400x310.png"
                alt="rinaofk"
                width={400}
                height={310}
              />
            </div>
        </section>
      </div>

    </main>
  );
}

/*---------- css ----------*/
export const hero_bg = css`
  background-color: var(--color-tirminaly);
  height: 525px;
  margin-top: -120px;
  margin-bottom: calc(120px + 35px + 160px);
  padding-top: 120px;
  
  ${global.sp} {
  

  
  }
  
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

export const hero_title = css`
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
export const hero_desc = css`
  font-size: 20px;
  line-height: var(--line-height);
  margin-bottom: 30px;
`
export const works = css`
  margin-bottom: 160px;
`
export const works_title = css`
  font-size: var(--font-h2);
  font-weight: bold;
  margin-bottom: 40px;
`
export const lists = css`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  gap: 21px;

`
export const about_bg = css`
  background-color: var(--color-secondary);
  padding: 160px 0;
`

export const about = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
export const about_desc = css`
  width: 34.3%;
  margin-right: 58px;
  
  > h3 {
    margin-bottom: 10px;
    font-size: var(--font-h3);
    font-weight: bold;
  }
  
  > p {
    margin-bottom: 40px;
    line-height: 1.6;
  }
`

export const about_img = css`
  position: relative;
  width: 400px;

  > img {
    border: 2px solid var(--color-black);
    border-radius: 170px 10px 10px 10px;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-black);
    border-radius: 170px 10px 10px 10px;
    background-color: var(--color-primary);
  }
`