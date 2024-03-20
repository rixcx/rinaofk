'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Image from "next/image";

import { ButtonProp } from '../components/elements/button/ButtonProp';

export default function Home() {
  return (
    <main css={main}>
      <div css={description}>
        Hallo world.
        Whereas
        a
      </div>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/common/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <div>
        <Image
          src="/common/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      
      <ButtonProp
        css={button_props_item}
        type="primary"
      >
        <p>ButtonProp primary</p>
      </ButtonProp>
      <ButtonProp
        css={button_props_item}
        type="secondary"
      >
        <p>【ButtonProp secondary】</p>
      </ButtonProp>
      
    </main>
  );
}

/*---------- css ----------*/
export const main = css`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: var(--color-white);
`;

export const description = css`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

const button_props_item = css`
  margin-top: 20px;
`