'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '../common/global'

export default function About() {
  return (
    <main css={main}>
      <div css={global.container}>
        About
      </div>
    </main>
  )
}

/*---------- css ----------*/
export const main = css`
  background-color: var(--color-white);
`;

