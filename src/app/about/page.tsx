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
              <p>I am a Web developer with experience in designing multiple websites for BtoC and developing various functions.<br />I have experienced practical works in renewing old sites, creating attractive LP and and adding new features.<br />I find fulfillment in ensuring customer and user satisfaction by solving problems and extracting value through web solutions.</p>
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
            <h3>Aden.Corp,Inc.</h3>
            <p>Web Engineer  /  Apr 2021  - Aug 2023</p>
            <ul>
              <li>Responsible for developing new functions as the only engineer in web design department of Osaka branch. Made estimates upon client’s request, built and improved features with using PHP(CakePHP) and MySQL.</li>
              <li>Conducted CakePHP workshops that contributed to grow the value of design team’s suggestion by have knowledge about how we create features.</li>
            </ul>
          </div>
          <div css={ex_txt}>
            <h3>Aden.Corp,Inc.</h3>
            <p>Web Designer  /  Apr 2017  - Mar 2021</p>
            <ul>
              <li>Worked with accurate the meeting and proposals based on wealthy experience and client’s needs.</li>
              <li>Created high quality wire frames and comprehensible sitemaps to effectively communicate, And designed attractive websites.</li>
              <li>Gained abundant experience creating and building websites with HTML, CSS, JavaScript and PHP.</li>
              <li>In charge of Project Manager, converted, redesigned and added functions legacy sites include 100+ page to responsive design. Carried out without delay by thorough schedule and resource management.</li>
              <li>Led and mentored newcomers.</li>
            </ul>
          </div>
          <div css={ex_txt}>
            <h3>D.Flat Inc.</h3>
            <p>Part-time Web Designer  /  Apr - Sep 2016</p>
            <ul>
              <li>Created UI parts such as icons for websites and applications.</li>
              <li>Built foundational knowledge and expertise in creative industries.</li>
            </ul>
          </div>
        </section>

        <section css={[global.container, edu]}>
          <h2 css={edu_ttl}>Education</h2>
          <div css={edu_txt}>
            <h3>Osaka University of Art - Bachelor of arts</h3>
            <p>Department of Information design  /  Apr 2013  - Mar 2017</p>
          </div>
        </section>
  
        <section css={[global.container, skill]}>
          <h2 css={skill_tll}>Skill set</h2>
          <div css={skill_wrap}>
            <div css={skill_item}>
              <h3>Design</h3>
              <ul className="design">
                <li>Wire framing</li>
                <li>Prototyping</li>
                <li>UI/UX</li>
                <li>Banner design</li>
                <li>LP design</li>
                <li>Brand-site design</li>
                <li>Business-site design</li>
                <li>Supermarket-site design</li>
                <li>Photograph</li>
              </ul>
            </div>
            <div css={skill_item}>
              <h3>Application</h3>
              <ul className="app">
                <li>Adobe Photoshop</li>
                <li>Adobe Lightroom</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
                <li>Figma</li>
                <li>Sublime text</li>
                <li>VSCode</li>
                <li>MAMP</li>
                <li>Source tree</li>
                <li>Git/github</li>
                <li>Docker</li>
                <li>Google Analytics</li>
              </ul>
            </div>
            <div css={skill_item}>
              <h3>Cording</h3>
              <ul className="cording">
                <li>HTML/CSS</li>
                <li>Sass</li>
                <li>Gulp</li>
                <li>BEM</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>jQuery</li>
              </ul>
            </div>
            <div css={skill_item}>
              <h3>Programming</h3>
              <ul className="programming">
                <li>PHP</li>
                <li>CakePHP</li>
                <li>MySQL</li>
                <li>Terminal</li>
                <li>React</li>
                <li>Next.js</li>
                <li>CSS in JS</li>
              </ul>
            </div>
            <div css={skill_item}>
              <h3>Business</h3>
              <ul className="business">
                <li>Project management</li>
                <li>Project direction</li>
                <li>Progress management</li>
                <li>SEO</li>
                <li>Training</li>
                <li>Improve work efficiency</li>
                <li>Data analyzing</li>
              </ul>
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
  
  ${global.sp} {
    margin-top: 15%;
  }
`;

export const title = css`
  font-size: var(--font-01);
  font-weight: bold;
  margin-bottom: 100px;
  
  ${global.sp} {
    margin-bottom: 13%;
  }
`

export const intro_bg = css`
  background-color: var(--color-primary);
  margin-bottom: 160px;
  
  ${global.sp} {
    margin-bottom: 25%;
    padding-bottom: 60px;
  }
`
export const intro = css`
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${global.sp} {
    margin-top: 40%;
    flex-direction: column-reverse;
  }
`

export const desc = css`
  width: 42.7%;
  margin-right: 60px;

    ${global.sp} {
      width: 100%;
      margin-top: -45px;
      margin-right: 0;
    }

  > h2 {
    margin-bottom: 20px;
    font-size: var(--font-03);
    font-weight: bold;
    
    ${global.sp} {
      margin-bottom: .5em;
    }
  }
  
  > p {
    line-height: 1.6;
  }
`

export const img = css`
  position: relative;
  top: -80px;
  width: 430px;
  
  ${global.sp} {
    top: -100px;
    width: 80%;
  }

  > img {
    border: 2px solid var(--color-black);
    border-radius: 170px 10px 10px 10px;
    
    ${global.sp} {
      border-radius: 120px 10px 10px 10px;
    }
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
  
    ${global.sp} {
      margin-bottom: 25%;
    }
`

export const ex_ttl = css`
  position: relative;
  display: inline-block;
  margin-bottom: 0.7em;
  font-size: var(--font-02);
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: -5px;
    width: 105%;
    height: 20px;
    display: inline-block;
    background: url(/index/deco_line.svg) 100% 100% / cover;
  }
`

export const ex_txt = css`
  + div {
    margin-top: 60px;
    
    ${global.sp} {
      margin-top: 15%;
    }
  }
  
  > h3 {
    margin-bottom: 0.5em;
    font-size: var(--font-04);
    font-weight: bold;
    
  }
  
  > p {
    margin-bottom: 0.9em;
    font-size: var(--font-lg);
    font-weight: bold;
  }
  
  > ul {
    line-height: 1.6;
    
    > li {
      position: relative;
      padding-left: 1em;
      
      &::before {
        content: "";
        position: absolute;
        top: 0.65em;
        left: 0;
        width: 5px;
        height: 5px;
        background-color: var(--color-black);
        border-radius: 50%;
      }
      
      & + li {
        margin-top: 0.8em;
      }
    }
  }
`

export const edu = css`
  margin-bottom: 160px;
  
  ${global.sp} {
    margin-bottom: 25%;
  }
`

export const edu_ttl = css`
  ${ex_ttl}
`
export const edu_txt = css`
  font-weight: bold;

  > h3 {
    margin-bottom: 0.5em;
    font-size: var(--font-04);
  }
  
  > p {
    font-size: var(--font-lg);
  }
`

export const skill = css`
  margin-bottom: calc(160px + 10px);
  
  ${global.sp} {
    margin-bottom: calc(25% + 10px);
  }
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
  border-top: 2px solid var(--color-black);

  ${global.sp} {
    width: 100%;
    padding: 30px 15px;
  }

  &:nth-of-type(-n+2) {
    border-top: none;
    
    ${global.sp} {
      border-top: 2px solid var(--color-black);
      
      &:first-of-type {
        border-top: none;
      }
    }
  }

  &:nth-of-type(odd){
    border-right: 2px solid var(--color-black);
    
    ${global.sp} {
      border-right: none;
    }
  }
  
  > h3 {
    margin-bottom: 0.8em;
    font-size: var(--font-05);
    font-weight: bold;
  }
  
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: var(--font-sm);
    
    > li {
      padding: 5px 15px;

      ${global.sp} {
        padding: 3px 12px;
      }

      &:first-of-type {
        margin-left: 0;
      }
    }
    
    &.design { > li {
      color: #F66464;
      background-color: #FFEFEF;
    }}
    &.app { > li {
      color: #D7AA39;
      background-color: #FFF5DB;
    }}
    &.cording { > li {
      color: #4F9C85;
      background-color: #D6F8EE;
    }}
    &.programming { > li {
      color: #5091D0;
      background-color: #E1EBFF;
    }}
    &.business { > li {
      color: #888;
      background-color: #F0F0F0;
    }}
  }
  
  &:last-of-type {
    padding: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    color: var(--color-gray-dark);

      ${global.sp} {
        padding: 35px 0;
      }

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
  
  ${global.sp} {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  
  > h2 {
    margin-bottom: 1.5em;
    font-size: var(--font-03);
    color: var(--color-white);
  }
`

export const consist_wrap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  
  ${global.sp} {
    gap: 15px;
  }
`

export const consist_img = css`
  width: 336px;

  ${global.sp} {
    width: 100%;
  }

  img {
    border: 2px solid var(--color-black);
    border-radius: 10px;
  }
`