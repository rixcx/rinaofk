'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '../../app/[locale]/common/global'

import Data from './data';

import Image from "next/image";
import Link from "next/link";

import { Tools } from '../../components/elements/tools/tools';

export const Work = () => {

  return (
    <div css={list}>
      {Data.map((work) => (
          <div css={item} key={work.id}>
            <Link href={`/works/${work.url}`} >
              <div css={inner}>
                <div css={img}>
                  <Image
                    src={work.imageSrc}
                    alt="Vercel Logo"
                    width={295}
                    height={200}
                    priority
                  />
                </div>
                <dl css={desc}>
                  <dt>{work.title}</dt>
                </dl>
                <Tools
                  tools={work.tools}
                  css={tags}
                ></Tools>
                <div css={link} className="hover">Read more</div>
              </div>
            </Link>
          </div>
      ))}
    </div>
  );
}

/*---------- css ----------*/
const list = css`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  gap: 21px;
  
  ${global.sp} {
    grid-template-columns: auto;
  }
`
const item = css`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  border: 2px solid var(--color-black);
  border-radius: 10px;
  background-color: var(--color-white);
  transition: all .15s;
  
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-black);
    border-radius: 10px;
    background-color: var(--color-tirminaly);
    transition: all .15s;
  }
  
  &:hover {
    top: -10px;
    left: -10px;
    
    &::after {
      top: 10px;
      left: 10px;
    }
    
    & .hover {
      text-decoration: underline 1.5px;
    }
  }
  
  a {
  display: flex;
  }
`
const inner = css`
  display: flex;
  flex-direction: column;
  padding: 22px 20px 30px 20px;
`

const img = css`
  margin-bottom: 26px;

  > img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`

const desc = css`
  margin-bottom: 26px;
  
  > dt {
    margin-bottom: 10px;
    font-size: var(--font-05);
  }
`
const tags = css`
  margin-bottom: 26px;
`
const link = css`
  text-align: right;
  margin-top: auto;
  display: inline-block;
  transition: all .15s;
  text-decoration: underline transparent;
  text-underline-offset: 3px;
`
