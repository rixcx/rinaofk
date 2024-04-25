import Link from "next/link";

import Image from "next/image";

import Data from './data';

import { Tools } from '../../components/elements/tools/tools';

export const Work = () => {

  return (
    <div>
      {Data.map((work) => (
          <div key={work.id}>
            <Link href={`/works/${work.url}`} >
              <div>
                <div>
                  <Image
                    src={work.imageSrc}
                    alt="Vercel Logo"
                    width={295}
                    height={200}
                    priority
                  />
                </div>
                <dl>
                  <dt>{work.title}</dt>
                </dl>
                <Tools
                  tools={work.tools}
                ></Tools>
                <div className="hover">Read more</div>
              </div>
            </Link>
          </div>
      ))}
    </div>
  );
}
