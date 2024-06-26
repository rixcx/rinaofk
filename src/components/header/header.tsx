'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '@/app/[locale]/common/global'

import Image from "next/image";
import Link from 'next/link'

import LocaleSwitcher from '@/components/LocaleSwitcher'

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
         <div css={switcher}><LocaleSwitcher /></div>
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
  align-items: center;
  padding: 35px 0;

  ${global.sp} {
    padding: 20px 0;
  }
`;

const logo = css`
  width: 32px;
  margin-right:auto;
  
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
const switcher = css`
  margin: 0 -15px 0 10px;
  font-size: var(--font-sm);

  button {
    width: 40px;
    text-align: center;
  }

 > button +  button {
  position:relative;
  
  &::before {
    position: absolute;
    top: calc(50% - 0.44em);
    left: 0px;
    content: "";
    display: inline-block;
    width: 1.5px;
    height: 12px;
    background-color: var(--color-black);
  }
}
`;