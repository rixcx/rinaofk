'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '@/app/[locale]/common/global'

import { Work } from '@/components/Work/Work';

export default function Works() {
  return (
    <main css={main}>
      <section css={[global.container]}>
        <h1 css={title}>Works</h1>
        <Work />
      </section>
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