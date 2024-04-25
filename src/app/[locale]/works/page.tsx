import Image from "next/image";

import { Work } from '../../../components/Work/Work';

import Data from '../../../components/Work/data';

export default function Works() {
  return (
    <main>
        <section>
          <h1>Works</h1>
          <Work />
        </section>
    </main>
  )
}
