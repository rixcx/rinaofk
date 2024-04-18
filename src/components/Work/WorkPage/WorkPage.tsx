'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '../../../app/common/global'

import Link from "next/link";

import Image from "next/image";
import { Button } from '../../../components/elements/button/button';

import Data from '../data';

export const PrePortfolio = () => {
  return (
    <section css={[global.container]}>
      <h1 css={title}>Previous Portfolio - and-rix</h1>
      <div css={img}>
        <Image
          src="/works/img_main_preportfolio.png"
          alt="Previous portfolio website"
          width={1280}
          height={600}
        />
      </div>
      <section css={overview}>
        <h2>Overview</h2>
        <p>This website was produced not only to introduce who I am and what I create but also for the purpose of learning to use tools that I haven’t had experience such as VS code, git (CUI), and GitHub.</p>
        <dl css={specifics}>
          <div>
            <dt>Duration</dt>
            <dd>2022  / 1 month（2021/12/10 - 2022/1/4）</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Adobe XD,  VScode,  HTML,  Sass(SCSS),  gulp,  git(CUI),  GitHub,  Docker</dd>
          </div>
        </dl>
          <Button
          type="borderd"
          link="/about"
        >See this project ➔</Button>
      </section>
      
      <section css={detail}>
        <div css={detail_item}>
          <div css={detail_txt}>
            <h3>Behind the creative</h3>
            <p>I had no prior experience with commonly used tools; VScode, GitHub, etc. To acquire these tools knowledge, I decided to use them in creating my own website. Additionally, I actively used properties and functions that I had not had the opportunity to use in my work.</p>
          </div>
          <div css={detail_img}>
            <Image
              src="/works/img_sub_preportfolio.png"
              alt="detail"
              width={612}
              height={394}
            />
          </div>
        </div>
      </section>

      <section css={discover}>
        <div css={global.container}>
          <h3>What discovered</h3>
          <p>When I set up the environment, I made a conscious effort to grasp the purpose behind each step, rather than simply going through set up it. Moreover, by utilizing new tools on projects with a simple structure, I was able to understand their basic usage. The knowledge gained through creating this work has been used in the production of subsequent projects.</p>
        </div>
      </section>
    </section>
  );
}

export const Rblog = () => {
  return (
    <section css={[global.container]}>
      <h1 css={title}>r.blog</h1>
      <div css={img}>
        <Image
          src="/works/img_main_rbrog.png"
          alt="r.blog"
          width={1280}
          height={600}
        />
      </div>
      <section css={overview}>
        <h2>Overview</h2>
        <p>r.blog is a technology blog about production flow, solutions, and technical memos. It is used JAMstack with Next.js and microCMS.</p>
        <dl css={specifics}>
          <div>
            <dt>Duration</dt>
            <dd>2022  / 1 month（2021/12/28 - 2022/1/25）</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Figma,  VScode,  Next.js,  HTML,  Sass(SCSS)  git(CUI),  GitHub,  Docker-compose</dd>
          </div>
        </dl>
          <Button
          type="borderd"
          link="/about"
        >See this project ➔</Button>
      </section>
      
      <section css={detail}>
        <div css={detail_item}>
          <div css={detail_txt}>
            <h3>Different approaches</h3>
            <p>I was following the tutorial for most of the process of making it. However, I devised some points, for example, using docker-compose, CSS Modules, and libraries to add new functions.</p>
          </div>
          <div css={detail_img}>
            <Image
              src="/works/img_sub_rblog.png"
              alt="detail"
              width={612}
              height={394}
            />
          </div>
        </div>
      </section>

      <section css={discover}>
        <div css={global.container}>
          <h3>What discovered</h3>
          <p>Initially, setting up the environment by using Docker posed a challenge, especially in understanding the concept of containers. After through trial and error, I was able to visualize how containers work in my mind. The process of implementing data get and display using API in Next.js led me to understand how Next.js manages data.</p>
        </div>
      </section>
    </section>
  );
}

export const Portfolio = () => {
  return (
    <section css={[global.container]}>
      <h1 css={title}>Portfolio - rinaofk</h1>
      <div css={img}>
        <Image
          src="/works/img_main_portfolio.png"
          alt="r.blog"
          width={1280}
          height={600}
        />
      </div>
      <section css={overview}>
        <h2>Overview</h2>
        <p>This website was created with the purpose of replacing an existing portfolio site and building a project using Next.js.</p>
        <dl css={specifics}>
          <div>
            <dt>Duration</dt>
            <dd>2024  / 2 month（2024/2/19 - 3/19 - 4/15）</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Figma,  VScode,  Next.js(Typescript),  HTML,  Sass(SCSS),  Emotion,  git(CUI),  GitHub,  Docker-compose</dd>
          </div>
        </dl>
          <Button
          type="borderd"
          link="/about"
        >See this project ➔</Button>
      </section>
      
      <section css={detail}>
        <div css={detail_item}>
          <div css={detail_txt}>
            <h3>Generate a new one</h3>
            <p>I proceeded with the work with extreme care in making components, markup, and CSS design to ensure the site wouldn't be just HTML website. In addition, to gain new insights, I adopted Typescript and Emotion of CSS in JS, which tools could not be used for HTML or PHP.</p>
          </div>
          <div css={detail_img}>
            <Image
              src="/works/img_sub_portfolio.png"
              alt="detail"
              width={612}
              height={394}
            />
          </div>
        </div>
      </section>

      <section css={discover}>
        <div css={global.container}>
          <h3>What discovered</h3>
          <p>I encountered challenges in applying CSS in JS to components, understanding the usage of props, and considering directory structure. Even though just one component, I realized that it requires skills different from Markup languages. This work enabled me to gain a basic usage of Next.js, React, and Typescript.</p>
        </div>
      </section>
    </section>
  );
}

/*---------- css ----------*/
export const title = css`
  font-size: var(--font-01);
  font-weight: bold;
  margin-bottom: 100px;
  
  ${global.sp} {
    margin-bottom: 40px;
  }
`
export const img = css`
  width: 100vw;
  height: 100%;
  margin: 0 calc(50% - 50vw) 80px;
    
  ${global.sp} {
    margin-bottom: 40px;
  }
`
export const overview = css`
  margin-bottom: 160px;

  ${global.sp} {
    margin-bottom: 100px;
  }

  > h2 {
    font-size: var(--font-04);
    font-weight: bold;
    margin-bottom: 0.6em;
  }
`
export const specifics = css`
  margin: 60px 0 80px;
  display: flex;

    ${global.sp} {
      margin: 30px 0 40px;
      flex-direction: column;
    }
  
  > div {
    + div {
      margin: 0 0 0 80px;
      
      ${global.sp} {
        margin: 30px 0 0 0;
      }
    }
    
    > dt {
      font-size: var(--font-05);
      margin-bottom: 10px;
    }
  }
`
export const detail = css`
  margin-bottom: 160px;
  padding-top: 160px;
  border-top: 2px solid var(--color-black);
  
  ${global.sp} {
    margin-bottom: 100px;
    padding-top: 100px;
  }
`
export const detail_item = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${global.sp} {
    flex-direction: column;
  }

  + div {
    margin-top: 100px;
    
    ${global.sp} {
      margin-top: 60px;
    }
  }
`
export const detail_txt = css`
  width: 40%;

  ${global.sp} {
    width: 100%;
  }

  > h3 {
    margin-bottom: 0.5em;
   font-size: var(--font-03);
   font-weight: bold;
  }
`
export const detail_img = css`
  width: 612px;
  
  ${global.sp} {
    margin-top: 20px;
    width: 100%;
  }
`
export const discover = css`
  width: 100vw;
  height: 100%;
  margin: 0 calc(50% - 50vw);
  padding: 80px 0;
  background-color: var(--color-tirminaly);
  color: var(--color-white);
  
  h3 {
    margin-bottom: 0.6em;
    font-size: var(--font-05);
    font-weight: bold;
  }
`