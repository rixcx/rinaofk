'use client'
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import * as global from '../app/common/global'

import { Ubuntu } from "next/font/google";

import './common/destyle.css';
import './common/variables.css';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const ubuntu = Ubuntu({
  weight: ['300','400','500','700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
    <Global
      styles={css`
        html {
          font-size: 62.5%;
        }
      
        body {
          overflow-x: hidden;
          font-family: sans-serif;
          font-size: var(--font-base);
          font-weight: 400;
          letter-spacing: 0.01em;
          line-height: 1.6;
          color: var(--color-black);
          background-color: var(--color-background);
        }
        
        h1,h2,h3,h4,h5,h6 {
          line-height: normal;
        }
        
      `}
    />
  
    <html lang="en">
     <head>
        <title>rinaofk</title>
        <meta name='description' content='Hello. I’m Rina, Web Designer and developer.' />
      </head>
      <body className={ubuntu.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  </>
  );
}
