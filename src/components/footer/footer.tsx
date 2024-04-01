'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '../../app/common/global'

export default function Footer() {
  return (
  <footer css={[global.container,footer]}>
    <small>&copy; 2023 rinaofk</small>
    <nav>
      <ul>
        <li><a href="#">xxx@gmail.com</a></li>
        <li><a href="#">Github</a></li>
        <li><a href="#">Linkedin</a></li>
        <li><a href="#">Resume</a></li>
      </ul>
    </nav>
  </footer>
  );
}

/*---------- css ----------*/
export const footer = css`
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
