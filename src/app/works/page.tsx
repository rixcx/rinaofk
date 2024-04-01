'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '../common/global'

import Image from "next/image";

import { Work } from '../../components/Work/Work';

export default function Works() {
  return (
    <main css={main}>
        <section css={[global.container]}>
          <h1 css={title}>Works</h1>
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
export const lists = css`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  gap: 21px;
  
  ${global.sp} {
    grid-template-columns: auto;
  }
`