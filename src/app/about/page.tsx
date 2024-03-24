'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '../common/global'

import Image from "next/image";

export default function About() {
  return (
    <main css={main}>
        <h1 css={[global.container,title]}>About</h1>

        <div css={intro_bg}>
          <section css={[global.container, intro]}>
            <div css={desc}>
              <h2>rinaofk</h2>
              <p>o gain experience of using tools, I built my portfolio site with I’ve never used such as VSCode, Git(CUI), GitHub, GitHub Pages and Docker.</p>
            </div>
            <div css={img}>
              <Image
                src="https://placehold.co/430x470.png"
                alt="rinaofk"
                width={430}
                height={470}
              />
            </div>
          </section>
        </div>
      
        <section css={[global.container, ex]}>
          <h2 css={ex_ttl}>Experiences</h2>
          <div css={ex_txt}>
            <h3>Back-end Engineer @ Web company</h3>
            <p>Sep 2022 - Sep 2023</p>
            <p>Work placement in a digital agency specializing in the wine industry (UX/UI - web design - art direction -photography)</p>
          </div>
          <div css={ex_txt}>
            <h3>Web Designer @ Web company</h3>
            <p>Sep 2022 - Sep 2023</p>
            <p>Work placement in a digital agency specializing in the wine industry (UX/UI - web design - art direction -photography)</p>
          </div>
          <div css={ex_txt}>
            <h3>Student @ Osaka University of Arts</h3>
            <p>Sep 2022 - Sep 2023</p>
            <p>Work at products design company</p>
          </div>
        </section>
  
        <section css={[global.container, skill]}>
          <h2 css={skill_tll}>Skill set</h2>
          <div css={skill_wrap}>
            <div css={skill_item}>
              <h3>Design</h3>
              <ul><li>Prototyping</li><li>Wire frame</li></ul>
            </div>
            <div css={skill_item}>
              <h3>Design</h3>
              <ul><li>Prototyping</li><li>Wire frame</li></ul>
            </div>
            <div css={skill_item}>
              <h3>Design</h3>
              <ul><li>Prototyping</li><li>Wire frame</li></ul>
            </div>
            <div css={skill_item}>
              <p>... and learning more!</p>
            </div>
          </div>
        </section>
  

        <div css={consist_bg}>
          <section css={[global.container, consist]}>
            <h2>What constitutes me are....</h2>
            <div css={consist_wrap}>
              <div css={consist_img}>
                <Image
                  src="https://placehold.co/336x318.png"
                  alt="Vercel Logo"
                  width={336}
                  height={318}
                />
              </div>
              <div css={consist_img}>
                <Image
                  src="https://placehold.co/336x318.png"
                  alt="Vercel Logo"
                  width={336}
                  height={318}
                />
              </div>
              <div css={consist_img}>
                <Image
                  src="https://placehold.co/336x318.png"
                  alt="Vercel Logo"
                  width={336}
                  height={318}
                />
              </div>
            </div>
          </section>
        </div>
  
    </main>
  )
}

/*---------- css ----------*/
export const main = css`
  margin-top: 100px;
`;

export const title = css`
  font-size: var(--font-h1);
  font-weight: bold;
  margin-bottom: 100px;
`

export const intro_bg = css`
  background-color: var(--color-primary);
  margin-bottom: 160px;
`
export const intro = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const desc = css`
  width: 42.7%;
  margin-right: 60px;
  
  > h2 {
    margin-bottom: 20px;
    font-size: var(--font-h3);
    font-weight: bold;
  }
  
  > p {
    line-height: 1.6;
  }
`

export const img = css`
  position: relative;
  top: -80px;

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
    background-color: var(--color-tirminaly);
  }
`

export const ex = css`
  margin-bottom: 160px;
`

export const ex_ttl = css`
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  font-size: var(--font-h2);
  font-weight: bold;
  
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 3px;
    left: -5px;
    width: 290px;
    height: 20px;
    display: inline-block;
    background: url(/index/deco_line.svg) 100% 100% / cover;
  }
`

export const ex_txt = css`
  + div {
    margin-top:60px;
  }
  
  > h3 {
    margin-bottom: 15px;
    font-size: var(--font-h5);
    font-weight: bold;
  }
  
  p:first-of-type {
    margin-bottom: 10px;
    font-weight: bold;
  }
`

export const skill = css`
  margin-bottom: calc(160px + 10px);
`

export const skill_tll = css`
  ${ex_ttl}
`
export const skill_wrap = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 2px solid var(--color-black);
  background-color: var(--color-white);
  
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: var(--color-black);
  }
`
export const skill_item = css`
  width: 50%;
  padding: 40px 60px 40px 60px;
  border: 2px solid var(--color-black);
  
  > h3 {
    margin-bottom: 20px;
    font-size: var(--font-h5);
    font-weight: bold;
  }
  
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    > li {
      padding: 5px 15px;
      color: #F66464;
      background-color: #FFEFEF;
      
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
  
  &:last-of-type {
    padding: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    color: var(--color-gray-dark);
    
    > p {
      margin:auto;
      display: inline-block;
    }
  }
`

export const consist_bg = css`
  background-color: var(--color-tirminaly);
`

export const consist = css`
  padding-top: 160px;
  padding-bottom: 160px;
  
  > h2 {
    margin-bottom: 60px;
    font-size: var(--font-h3);
    color: var(--color-white);
  }
`

export const consist_wrap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

export const consist_img = css`
  img {
    border: 2px solid var(--color-black);
    border-radius: 10px;
  }
`