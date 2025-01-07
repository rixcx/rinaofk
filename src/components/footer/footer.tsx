'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '@/app/[locale]/common/global'

import Link from 'next/link'

export default function Footer() {

  return (
    <footer css={[global.container,footer]}>
      <small>&copy; 2023 rinaofk</small>
      <nav>
        <ul>
          <li>
            <span css={mail}>rs.ivy04</span>
          </li>
          <li>
            <Link href="https://github.com/rixcx" rel="noopener noreferrer" target="_blank">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="/common/RinaOfuku-resume.pdf?240812" rel="noopener noreferrer" target="_blank">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

/*---------- css ----------*/
const footer = css`
  display: flex;
  justify-content: space-between;
  padding-top: 160px;
  padding-bottom: 60px;
  
  ${global.sp} {
    flex-direction: column-reverse;
    padding-top: 120px;
    padding-bottom: 40px;
  }
  
  > nav {
    > ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: var(--font-sm);
      
      ${global.sp} {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 40px;
      }
      
      > li {
        + li {
          margin-left: 30px;
          
          ${global.sp} {
            margin-top: 1.7em;
            margin-left: 0;
          }
        }
        
        > a {
          display: inline-block;
          transition: all .15s;

          &:hover {
            opacity: .7;
          }
        }
      }
    }
  }
`;

const mail = css`
  &::after {
    content:"@gmail.com"
  }
`