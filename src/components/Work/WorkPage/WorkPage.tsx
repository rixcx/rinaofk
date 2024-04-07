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
      <h1 css={title}>Title</h1>
      <div css={img}>
        <Image
          src="https://placehold.co/1280x600.png"
          alt="Title"
          width={1280}
          height={600}
        />
      </div>
      <section css={overview}>
        <h2>Overview</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <dl css={specifics}>
          <div>
            <dt>Duration</dt>
            <dd>2021 1month</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Adobe XD, VSCode, HTML, Sass(SCSS), gulp, git(CUI), GitHub, Docker</dd>
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
            <h3>Subtitle</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div css={detail_img}>
            <Image
              src="https://placehold.co/612x394.png"
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
    </section>
  );
}

export const Rblog = () => {
  return (
    <section css={[global.container]}>
     【Rblog】
    </section>
  );
}

export const Portfolio = () => {
  return (
    <section css={[global.container]}>
     【Portfolio】
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