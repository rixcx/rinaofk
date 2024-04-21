'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '../common/global'

export default function About() {
  return (
    <main css={test}>
        <h1 css={[global.container,taitoru]}>About</h1>


    </main>
  );
}

/*---------- css ----------*/
export const test = css`
  margin-top: 100px;
  
  ${global.sp} {
    margin-top: 60px;
  }
`;
export const taitoru = css`
  font-size: var(--font-01);
  font-weight: bold;
  margin-bottom: 100px;
  
  ${global.sp} {
    margin-bottom: 40px;
  }
`
