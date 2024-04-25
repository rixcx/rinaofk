import Link from "next/link";

import Image from "next/image";
import { Button } from '../../../components/elements/button/button';

import Data from '../data';

export const PrePortfolio = () => {
  return ( 
    <section>
      <h1>Previous Portfolio - and-rix</h1>
      <div>
        <Image
          src="/works/img_main_preportfolio.png"
          alt="Previous portfolio website"
          width={1280}
          height={600}
          priority
        />
      </div>
      <section>
        <h2>Overview</h2>
        <p>This website was produced not only to introduce who I am and what I create but also for the purpose of learning to use tools that I haven’t had experience such as VS code, git (CUI), and GitHub.</p>
        <dl>
          <div>
            <dt>Duration</dt>
            <dd>2022  / 1 month (2021/12/10 - 2022/1/4)</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Adobe XD,  VScode,  HTML,  Sass(SCSS),  gulp,  git(CUI),  GitHub,  Docker</dd>
          </div>
        </dl>
          {/* <Button
          type="borderd"
          link="/"
          css={link}
        >See this project</Button> */}
      </section>
      
      <section>
        <div>
          <div>
            <h3>Behind the creative</h3>
            <p>I had no prior experience with commonly used tools; VScode, GitHub, etc. To acquire these tools knowledge, I decided to use them in creating my own website. Additionally, I actively used properties and functions that I had not had the opportunity to use in my work.</p>
          </div>
          <div>
            <Image
              src="/works/img_sub_preportfolio.png"
              alt="detail"
              width={612}
              height={394}
            />
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3>What discovered</h3>
          <p>When I set up the environment, I made a conscious effort to grasp the purpose behind each step, rather than simply going through set up it. Moreover, by utilizing new tools on projects with a simple structure, I was able to understand their basic usage. The knowledge gained through creating this work has been used in the production of subsequent projects.</p>
        </div>
      </section>
    </section>
  );
}

export const Rblog = () => {
  return (
    <section>
      <h1>r.blog</h1>
    </section>
  );
}

export const Portfolio = () => {
  return (
    <section>
      <h1>Portfolio - rinaofk</h1>
    </section>
  );
}
