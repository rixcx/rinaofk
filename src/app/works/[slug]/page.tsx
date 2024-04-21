'use client'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as global from '../../common/global'

import Image from "next/image";

import { useParams } from 'next/navigation'
// slugからそれぞれのデータを抜き出す
// →追々slugからMDファイルのデータを読み込む形式とする

// →一旦各ページごとに作ったcomponentを読み込む
import { PrePortfolio, Rblog, Portfolio } from '../../../components/Work/WorkPage/WorkPage';

export default function WorkPage() {

const params = useParams<{slug: string}>()
const url = params.slug;

// slugに応じたcomponentを読み込む
function Page() {
  if (url == "pre_portfolio") {
    return <PrePortfolio />;
  } else if (url == "rblog") {
    return <Rblog />;
  } else if (url == "portfolio"){
    return <Portfolio/>;
  }
}

  return (
    <main css={main}>
      <Page />
    </main>
  )
}

/*---------- css ----------*/
const main = css`
  margin-top: 100px;
  
  ${global.sp} {
    margin-top: 60px;
  }
`;
const title = css`
  font-size: var(--font-01);
  font-weight: bold;
  margin-bottom: 100px;
  
  ${global.sp} {
    margin-bottom: 40px;
  }
`