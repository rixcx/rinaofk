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
         <div css={item}>  {/* component化する */}
            <div css={item_img}>
              <Image
                src="https://placehold.co/295x200.png"
                alt="Vercel Logo"
                width={295}
                height={200}
              />
            </div>
            <dl css={item_desc}>
              <dt>Portfolio site</dt>
              <dd>To gain experience of using tools, I built my portfolio site with I’ve never used such as VSCode, Git(CUI), GitHub, GitHub Pages and Docker.</dd>
            </dl>
            <ul css={item_tags}>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
            </ul>
            <div css={item_link} className="hover"><a href="/">Read more</a></div>
          </div>
          <div css={item}>
            <div css={item_img}>
              <Image
                src="https://placehold.co/295x200.png"
                alt="Vercel Logo"
                width={295}
                height={200}
              />
            </div>
            <dl css={item_desc}>
              <dt>Portfolio site</dt>
              <dd>To gain experience of using tools, I built my portfolio site with I’ve never used such as VSCode, Git(CUI), GitHub, GitHub Pages and Docker.</dd>
            </dl>
            <ul css={item_tags}>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
            </ul>
            <div css={item_link} className="hover"><a href="/">Read more</a></div>
          </div>
          <div css={item}>
            <div css={item_img}>
              <Image
                src="https://placehold.co/295x200.png"
                alt="Vercel Logo"
                width={295}
                height={200}
              />
            </div>
            <dl css={item_desc}>
              <dt>Portfolio site</dt>
              <dd>To gain experience of using tools, I built my portfolio site with I’ve never used such as VSCode, Git(CUI), GitHub, GitHub Pages and Docker.</dd>
            </dl>
            <ul css={item_tags}>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
              <li>XD</li>
              <li>VSCode</li>
            </ul>
            <div css={item_link} className="hover"><a href="/">Read more</a></div>
          </div>
        </div>
      </section>

      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
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
  margin-bottom: 160px
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
export const item_img = css`
  margin-bottom: 26px;

  > img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`

export const item_desc = css`
  margin-bottom: 26px;
  
  > dt {
    margin-bottom: 10px;
    font-size: var(--font-h5);
  }
  
  > dd {
    line-height: 1.6;
  }
`

export const item_tags = css`
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
export const item_link = css`
  text-align: right;

  > a {
    display: inline-block;
    transition: all .15s;
    text-decoration: underline transparent;
    text-underline-offset: 3px;
  }
`