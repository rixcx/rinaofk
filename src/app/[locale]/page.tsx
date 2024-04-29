'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '@/app/[locale]/common/global'

import { useTranslations } from 'next-intl';

import Image from "next/image";

import { Button } from '@/components/elements/button/button';
import { Work } from '@/components/Work/Work';

export default function Home() {

 const t = useTranslations('Index');
 
  return (
    <main>
      <section css={[global.container,hero_bg]}>
        <div css={hero}>
            <h1>{t('title')}</h1>
          <h1 css={hero_title}>&#x1F427;<br css={global.sp_only} /> Hello. <br css={global.sp_only} />I'm <span>Rina</span>,<br />a Creative web developer.</h1>
          <p css={hero_desc}>I am a Web developer with 4 years of experience as Web designer and 2.5 years as Web Engineer in Japan. Passionate about listening clients face-to-face to find out the true needs of theirs and create proposals, design and systems for them.</p>
          <Button
            type="whiteSolid"
            link="/about"
          >About me</Button>
        </div>
      </section> 
      
      <section css={[global.container, works]}>
        <h2 css={works_title}>Works</h2>
        <Work />
      </section>
      
      {/* <div css={about_bg}>
        <section css={[global.container, about]}>
          <div css={about_desc}>
            <h3>rinaofk</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
      </div> */}

    </main>
  );
}

/*---------- css ----------*/
const hero_bg = css`
  &::before {
    content: "";
    position: absolute;
    z-index: -3;
    top: -120px;
    left: 0px;
    width: 100vw;
    height: 100%;
    background-color: var(--color-tirminaly);
    margin: 0 calc(50% - 50vw);
  }
`;
const hero = css`
  position: relative;
  margin-bottom: calc(160px + 10px);
  padding: 125px 100px 80px 185px;
  border: 2px solid var(--color-black);
  border-radius: 265px 15px 15px 15px;
  background-color: var(--color-primary);

  ${global.sp} {
    margin-bottom: calc(100px + 10px);
    padding: 50px 30px 30px 45px;
    border-radius: 100px 15px 15px 15px;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 12px;
    left: 12px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-black);
    border-radius: 265px 15px 15px 15px;
    background-color: var(--color-secondary);
  }
`;
const hero_title = css`
  font-size: var(--font-01);
  font-weight: bold;
  margin-bottom: 0.7em;

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
      background-repeat: no-repeat;
      background-size:contain;
      
      ${global.sp} {
        left: -8px;
        bottom: -23%;
        width: 120%;
        height: 50%;
      }
    }
  }
`
const hero_desc = css`
  margin-bottom: 2em;
`
const works = css`
  /* margin-bottom: 160px;
  
  ${global.sp} {
    margin-bottom: 0;
  } */
`
const works_title = css`
  font-size: var(--font-02);
  font-weight: bold;
  margin-bottom: 0.8em;
`
const about_bg = css`
  background-color: var(--color-secondary);
  padding: 160px 0;
`

const about = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const about_desc = css`
  width: 34.3%;
  margin-right: 58px;
  
  > h3 {
    margin-bottom: 10px;
    font-size: var(--font-03);
    font-weight: bold;
  }
  
  > p {
    margin-bottom: 40px;
  }
`
const about_img = css`
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