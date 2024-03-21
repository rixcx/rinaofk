'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '../../app/common/global'

export default function Footer() {
  return (
  <footer css={global.container}>
    <div css={wrapper}>
      <small>&copy; 2023 rinaofk</small>
      <nav>
        <ul css={link}>
          <li><a href="#">xxx@gmail.com</a></li>
          <li><a href="#">Github</a></li>
          <li><a href="#">Linkedin</a></li>
          <li><a href="#">Resume</a></li>
        </ul>
      </nav>
    </div>
  </footer>
  );
}

/*---------- css ----------*/
export const wrapper = css`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
`;

export const link = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-small);
  
  li {
    + li {
      margin-left: 30px
    }
    
    a {
      display: inline-block;
      transition: all .15s;

      &:hover {
        opacity: .8;
      }
    }
  }
`;
