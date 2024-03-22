'use client'
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react'

import Link from 'next/link'

type ButtonProps = {
  type?: string;
  children?: React.ReactNode;
  className? : string;
  link : string;
};

export const Button = (props: ButtonProps) => {

//props.typeをそのままindex検索に使うことができないため、index検索で使える型に変換する
const type = (!props.type ? "base": props.type as keyof typeof styles);

  return (
    //indexからcssを検索して当てる
    <Link href={props.link}  css={styles[type]} className={props.className}>
      {props.children}
    </Link>
  );

};

//ベースのcss、@extend用
const base = css`
  display: inline-block;
  padding: 17px 70px;
  border-radius: 35px;
  font-weight: 400;
  transition: all .15s;
`;

//styles配列
const styles = {
  base: css`
    ${base}
  `,

  whiteSolid: css`
    ${base}
    color: var(--color-black);
    background-color: #ffffffb7;
    
    &:hover {
      background-color: #ffffff;
    }
  `,

  greenSolid: css`
    ${base}
    color: var(--color-white);
    background-color: var(--color-tirminaly);
    
    &:hover {
      filter: brightness(1.1)
    }
  `,

  borderd: css`
    ${base}
    color: var(--color-black);
    border: 2px solid var(--color-black);
    
    &:hover {
      background-color: var(--color-white);
    }
  `,
}