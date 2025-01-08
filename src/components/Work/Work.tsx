'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as global from '@/app/[locale]/common/global'

import Image from "next/image";
import Link from "next/link";

import { Tools } from '@/components/elements/tools/tools';

import JsonData from '@/../messages/en.json'; // 生のjsonデータをオブジェクトで受取
import WorksInterface from '@/../messages/WorksInterface' //オブジェクトの型を指定
const Works: WorksInterface = JsonData.Works //worksのデータを型指定してWorksに代入

export const Work = () => {
  return (
    <div css={list}>
      {Object.keys(Works).map((key) => (
        <div css={item} key={Works[key].id}>
          <Link href={`/works/${Works[key].url}`} >
            <div css={inner}>
              <div css={img}>
                <Image
                  src={`/works/img_works_${Works[key].ImageName}.png`}
                  alt={Works[key].title}
                  width={295}
                  height={200}
                  priority
                />
              </div>
              <dl css={desc}>
                <dt>{Works[key].title}</dt>
              </dl>
              <Tools
                tools={Works[key].tools}
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
