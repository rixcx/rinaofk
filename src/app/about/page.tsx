'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '../common/global'


export default function About() {
  return (
    <main css={main}>
        <h1 css={[global.container,title]}>About</h1>

        <div css={intro_bg}>
          <section css={[global.container, intro]}>
            <div css={desc}>
              <h2>rinaofk</h2>
              <p>I am a Web developer with experience in designing multiple websites for BtoC and developing various functions.<br />I have experienced practical works in renewing old sites, creating attractive LP and adding new features.<br />I feel fulfillment in ensuring customer and user satisfaction by solving problems and by giving them value through web solutions.</p>
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
    margin-top: 60px;
  }
`;
export const title = css`
  font-size: var(--font-01);
  font-weight: bold;
  margin-bottom: 100px;
  
  ${global.sp} {
    margin-bottom: 40px;
  }
`
export const intro_bg = css`
  background-color: var(--color-primary);
  margin-bottom: 160px;
  
  ${global.sp} {
    margin-bottom: 100px;
    padding-bottom: 60px;
  }
`
export const intro = css`
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${global.sp} {
    margin-top: 140px;
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
    margin-bottom: 25px;
    font-size: var(--font-03);
    font-weight: bold;
    
    ${global.sp} {
      margin-bottom: .5em;
    }
  }
`
export const photo = css`
  position: relative;
  top: -80px;
  width: 430px;
  
  ${global.sp} {
    top: -100px;
    width: 80%;
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
