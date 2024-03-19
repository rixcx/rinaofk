/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react'

type ButtonPropProps = {
  type?: string;
  children?: React.ReactNode;
  className? : string;
};

export const ButtonProp = (props: ButtonPropProps) => {

//props.typeをそのままindexに使うことができないため、indexで使える型に変換する
const type = (!props.type ? "base": props.type as keyof typeof styles);

  return (
    //indexからcssを検索して当てる
    <div css={styles[type]} className={props.className}>
      {props.children}
    </div>
  );

};

//ベースのcss、@extend用
const base = css`
    padding: 20px;
    width: 400px;
    border-radius: 4px;
    font-weight: bold;;
    border: 1px solid #333;
    background-color: #fff;
`;

//styles配列
const styles = {
  base: css`
    ${base}
  `,

  primary: css`
    ${base}
    color: #3176e5;
  `,
  
  secondary:  css`
    ${base}
    color: #3e9979;
  `,
}