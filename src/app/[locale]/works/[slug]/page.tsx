'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '@/app/[locale]/common/global'

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation'

import Image from "next/image";

import { Tools } from '@/components/elements/tools/tools';

import JsonData from '@/../messages/en.json'; // 生のjsonデータをオブジェクトで受取
import WorksInterface from '@/../messages/WorksInterface' //オブジェクトの型を指定
const Works: WorksInterface = JsonData.Works //worksのデータを型指定してWorksに代入

export default function WorkPage() {

  const params = useParams()
  const url: string | string[] = params.slug
  const t = useTranslations('Works.'+ url);
  const work = Works[url as keyof typeof Works]

  return (
    <main css={main}>
      <section css={[global.container]}>
        <h1 css={title}>{work.title}</h1>
        <div css={[img]}>
          <Image
            src={work.mainImageSrc}
            alt={t('title')}
            width={1280}
            height={600}
            priority
          />
        </div>
        <section css={overview}>
          <h2>Overview</h2>
          <p>{t('overview')}</p>
          <dl css={specifics}>
            <div>
              <dt>Duration</dt>
              <dd>{work.duration}</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>
              <Tools
                tools={work.tools}
                css={tags}
              ></Tools>
              </dd>
            </div>
          </dl>
            {/* <Button
            type="borderd"
            link="/"
            css={link}
          >See this project</Button> */}
        </section>
        
        <section css={detail}>
          <div css={detail_item}>
            <div css={detail_txt}>
              <h3>{t('pointTitle01')}</h3>
              <p>{t('pointText01')}</p>
            </div>
            <div css={detail_img}>
              <Image
                src={work.subImageSrc}
                alt={t('pointTitle01')}
                width={612}
                height={394}
              />
            </div>
          </div>
        </section>
        <section css={discover}>
          <div css={global.container}>
            <h3>{t('discoveredTitle')}</h3>
            <p>{t('discoveredText')}</p>
          </div>
        </section>
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
`
const title = css`
  font-size: var(--font-01);
  font-weight: bold;
  margin-bottom: 100px;
  
  ${global.sp} {
    margin-bottom: 40px;
  }
`
const img = css`
  width: 100vw;
  height: 100%;
  margin: 0 calc(50% - 50vw) 80px;
    
  ${global.sp} {
    margin-bottom: 40px;
  }
`
const overview = css`
  margin-bottom: 160px;

  ${global.sp} {
    margin-bottom: 100px;
  }

  > h2 {
    font-size: var(--font-04);
    font-weight: bold;
    margin-bottom: 0.6em;
  }
`
const tags = css`
  margin-bottom: 26px;
  > li {
    padding: 5px 15px;
    border-radius: 30px;
    font-size: 12px;
    line-height: normal;
    color: var(--color-gray-dark);
    background-color: var(--color-white);
  }
`
const specifics = css`
  margin: 60px 0 80px;
  display: flex;

    ${global.sp} {
      margin: 30px 0 40px;
      flex-direction: column;
    }
  
  > div {
    + div {
      width: 60%;
      margin: 0 0 0 80px;
      
      ${global.sp} {
        width: 100%;
        margin: 30px 0 0 0;
      }
    }
    
    > dt {
      font-size: var(--font-05);
      margin-bottom: 10px;
    }
  }
`
const link = css`
  position: relative;
  padding: 17px 80px 17px 60px;

  &::before, &::after {
    content: '';
    position: absolute;
    background:#333;
    height:2px;
    transition: all .3s;
  }
  
  &::before {
    top: calc(50% + 2px);
    right: 20px;
    width: 30px;
  }
  
  &::after {
    top: calc(50% - 2px);
    right:20px;
    width: 12px;
    transform: rotate(35deg);
  }
  
  &:hover {
    &::before{
      right:16px;
    }
    
    &::after{
      right:16px;
    }
  }
`
const detail = css`
  margin-bottom: 160px;
  padding-top: 160px;
  border-top: 2px solid var(--color-black);
  
  ${global.sp} {
    margin-bottom: 100px;
    padding-top: 100px;
  }
`
const detail_item = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${global.sp} {
    flex-direction: column;
  }

  + div {
    margin-top: 100px;
    
    ${global.sp} {
      margin-top: 60px;
    }
  }
`
const detail_txt = css`
  width: 40%;
  min-width: 400px;
  padding-right: 30px;

  ${global.sp} {
    width: 100%;
    min-width: auto;
    padding-right: 0;
  }

  > h3 {
    margin-bottom: 0.5em;
   font-size: var(--font-03);
   font-weight: bold;
  }
`
const detail_img = css`
  width: 612px;
  
  ${global.sp} {
    margin-top: 20px;
    width: 100%;
  }
`
const discover = css`
  width: 100vw;
  height: 100%;
  margin: 0 calc(50% - 50vw);
  padding: 80px 0;
  background-color: var(--color-tirminaly);
  color: var(--color-white);
  
  h3 {
    margin-bottom: 0.6em;
    font-size: var(--font-05);
    font-weight: bold;
  }
`