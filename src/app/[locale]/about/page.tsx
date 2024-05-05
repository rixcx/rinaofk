'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '@/app/[locale]/common/global'

import { useTranslations } from 'next-intl';

import Image from "next/image";

export default function About() {

 const t = useTranslations('About');

  return (
    <main css={main}>
        <h1 css={[global.container,title]}>About</h1>

        <div css={intro_bg}>
          <section css={[global.container, intro]}>
            <div css={desc}>
              <h2>rinaofk</h2>
              <p>{t('intro')}</p>
            </div>
            <div css={img}>
              <Image
                src="/about/img_main.jpg"
                alt="rinaofk"
                width={430}
                height={470}
                priority
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
              <li>{t('Experience.aden_engineer_01')}</li>
              <li>{t('Experience.aden_engineer_02')}</li>
            </ul>
          </div>
          <div css={ex_txt}>
            <h3>Aden.Corp,Inc.</h3>
            <p>Web Designer  /  Apr 2017  - Mar 2021</p>
            <ul>
              <li>{t('Experience.aden_designer_01')}</li>
              <li>{t('Experience.aden_designer_02')}</li>
              <li>{t('Experience.aden_designer_03')}</li>
              <li>{t('Experience.aden_designer_04')}</li>
              <li>{t('Experience.aden_designer_05')}</li>
              <li>{t('Experience.aden_designer_06')}</li>
            </ul>
          </div>
          <div css={ex_txt}>
            <h3>D.Flat Inc.</h3>
            <p>Part-time Web Designer  /  Apr - Sep 2016</p>
            <ul>
              <li>{t('Experience.dflat_parttime_01')}</li>
              <li>{t('Experience.dflat_parttime_02')}</li>
            </ul>
          </div>
        </section>

        <section css={[global.container, edu]}>
          <h2 css={edu_ttl}>Education</h2>
          <div css={edu_txt}>
            <h3>{t('Education.name')}</h3>
            <p>{t('Education.department')}  /  Apr 2013  - Mar 2017</p>
          </div>
        </section>
  
        <section css={[global.container, skill]}>
          <h2 css={skill_tll}>Skill set</h2>
          <div css={skill_wrap}>
            <div css={skill_item}>
              <h3>Design</h3>
              <ul className="design">
                <li>{t('Skill.Design.wireframing')}</li>
                <li>{t('Skill.Design.prototyping')}</li>
                <li>{t('Skill.Design.ui/ux')}</li>
                <li>{t('Skill.Design.accessibility')}</li>
                <li>{t('Skill.Design.bannerdesign')}</li>
                <li>{t('Skill.Design.lpdesign')}</li>
                <li>{t('Skill.Design.brand-sitedesign')}</li>
                <li>{t('Skill.Design.business-sitedesign')}</li>
                <li>{t('Skill.Design.supermarket-sitedesign')}</li>
                <li>{t('Skill.Design.photograph')}</li>
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
                <li>{t('Skill.Business.projectmanagement')}</li>
                <li>{t('Skill.Business.projectdirection')}</li>
                <li>{t('Skill.Business.progressmanagement')}</li>
                <li>{t('Skill.Business.meeting')}</li>
                <li>{t('Skill.Business.createdocuments')}</li>
                <li>{t('Skill.Business.seo')}</li>
                <li>{t('Skill.Business.training')}</li>
                <li>{t('Skill.Business.improveworkefficiency')}</li>
              </ul>
            </div>
            <div css={skill_item}>
              <p>{t('Skill.learningmore')}</p>
            </div>
          </div>
        </section>

        <div css={consist_bg}>
          <section css={[global.container, consist]}>
            <h2>{t('Constitute.title')}</h2>
            <div css={consist_wrap}>
              <div css={consist_img}>
                <Image
                  src="/about/img_consist_01.jpg"
                  alt="Travel"
                  width={336}
                  height={318}
                />
                <p>{t('Constitute.travel')}</p>
              </div>
              <div css={consist_img}>
                <Image
                  src="/about/img_consist_02.jpg"
                  alt="spicy food"
                  width={336}
                  height={318}
                />
                <p>{t('Constitute.spicy')}</p>
              </div>
              <div css={consist_img}>
                <Image
                  src="/about/img_consist_03.jpg"
                  alt="the goofy faces"
                  width={336}
                  height={318}
                />
                <p>{t('Constitute.goofy')}</p>
              </div>
            </div>
          </section>
        </div>
  
    </main>
  )
}

/*---------- css ----------*/
const main = css`
  margin-top: 100px;
  
  ${global.sp} {
    margin-top: 60px;
  }
`;
const title = css`
  font-size: var(--font-01);
  font-weight: bold;
  margin-bottom: 100px;
  
  ${global.sp} {
    margin-bottom: 40px;
  }
`
const intro_bg = css`
  background-color: var(--color-primary);
  margin-bottom: 160px;
  
  ${global.sp} {
    margin-bottom: 100px;
    padding-bottom: 60px;
  }
`
const intro = css`
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${global.sp} {
    margin-top: 140px;
    flex-direction: column-reverse;
  }
`
const desc = css`
  width: 42.7%;
  margin-right: 60px;

    ${global.sp} {
      width: 100%;
      margin-top: -45px;
      margin-right: 0;
    }
    
    p {
      white-space: pre-wrap;
    }

  > h2 {
    margin-bottom: 25px;
    font-size: var(--font-03);
    font-weight: bold;
    
    ${global.sp} {
      margin-bottom: .5em;
    }
  }
`
const img = css`
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
const ex = css`
  margin-bottom: 160px;
  
  ${global.sp} {
    margin-bottom: 100px;
  }
`
const ex_ttl = css`
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

const ex_txt = css`
  + div {
    margin-top: 60px;
    
    ${global.sp} {
      margin-top: 40px;
    }
  }
  
  > h3 {
    margin-bottom: 0.5em;
    font-size: var(--font-04);
    font-weight: bold;
    letter-spacing: 0.03em;
  }
  
  > p {
    margin-bottom: 0.9em;
    font-size: var(--font-lg);
    font-weight: bold;
  }
  
  > ul {
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
const edu = css`
  margin-bottom: 160px;
  
  ${global.sp} {
    margin-bottom: 100px;
  }
`
const edu_ttl = css`
  ${ex_ttl}
`
const edu_txt = css`
  font-weight: bold;

  > h3 {
    margin-bottom: 0.5em;
    font-size: var(--font-04);
  }
  
  > p {
    font-size: var(--font-lg);
  }
`
const skill = css`
  margin-bottom: calc(160px + 10px);
  
  ${global.sp} {
    margin-bottom: calc(100px + 10px);
  }
`
const skill_tll = css`
  ${ex_ttl}
`
const skill_wrap = css`
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
const skill_item = css`
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
      line-height: normal;
      border-radius: 3px;

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
const consist_bg = css`
  background-color: var(--color-tirminaly);
`
const consist = css`
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
const consist_wrap = css`
  display: flex;
  flex-wrap: wrap;
  gap: 2.9%;
  
  ${global.sp} {
    gap: 15px;
  }
`
const consist_img = css`
  width: 31.4%;

  ${global.sp} {
    width: 100%;
    
    + div {
      margin-top: 40px;
    }
  }

  img {
    margin-bottom: 15px;
    border: 2px solid var(--color-black);
    border-radius: 10px;
  }
  
  p {
    padding: 0 0.5em;
    color: var(  --color-white);
  }
`
