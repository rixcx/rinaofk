
import Image from "next/image";
import Desc from '../../../../components/Work/Desc';

import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function WorkPage() {
  const messages = useMessages();

  return (
    <main>
        <NextIntlClientProvider messages={messages}>
          <Desc/>
        </NextIntlClientProvider>
    </main>
  )
}
