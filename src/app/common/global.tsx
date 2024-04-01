'use client'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const breakpoint = 768
export const sp  = `@media (max-width: ${breakpoint}px)`;

export const container = css`
  position: relative;
  z-index: 0;
  max-width: var(--container-width);
  margin: 0 auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);

  ${sp} {
    padding-left: calc(var(--container-padding)/2);
    padding-right: calc(var(--container-padding)/2);
  }
`
export const sp_only = css`
  display: none;
  
  ${sp} {
    display: block;
  }
`
