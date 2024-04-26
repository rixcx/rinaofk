'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '../../app/[locale]/common/global'

import { useTranslations } from 'next-intl';

import Image from "next/image";
import Link from 'next/link'

export default function Header() {

  return (
    <header css={[global.container, header]}>
      <nav css={wrap}>
        <h1 style={{display: 'none'}}>rinaofk</h1>
        <Link css={logo} href="/" >
          <Image
            src="/common/logo.svg"
            alt="rinaofk"
            width={32}
            height={50.20}
            priority
          />
        </Link>
        <ul css={menu}>
          <li><a href="/about">About</a></li>
          <li><a href="/works">Works</a></li>
        </ul>
      </nav>
    </header>
  );
}

/*---------- css ----------*/
const header = css`
  position: relative;
  z-index: 99;
`;

const wrap = css`
  display: flex;
  justify-content: space-between;
  padding: 35px 0;

  ${global.sp} {
    padding: 20px 0;
  }
`;

const logo = css`
  width: 32px;
  
  ${global.sp} {
    width: 25px;
  }
`;

const menu = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-lg);
  
  li {
    padding: 10px 30px;
    
    ${global.sp} {
      padding: 5px 15px;
    }

    + li {
      margin-left: 20px
      
      ${global.sp} {
        margin-left: 10px
      }
    }
    
    a {
      display: inline-block;
      transition: all .15s;
      text-decoration: underline transparent;
      text-underline-offset: 3px;

      &:hover {
        text-decoration: underline 1.5px;
      }
    }
  }
`;