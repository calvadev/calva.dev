import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/calvadev.ico" />
      </Head>
      <body>
        <h1 className="py-2 px-3 text-3xl">
          calva.dev⚡
        </h1>
        <h1 className="pl-3.5">
          <span>
            <Link href="/">
              About
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="/resume">
              Resume
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="https://shopstr.store">
              Shopstr
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="/thoughts">
              Thoughts
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="mailto:calvadev@reacher.me">
              Email
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="https://t.me/calvadev">
              Telegram
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="https://nostr.com/npub16dhgpql60vmd4mnydjut87vla23a38j689jssaqlqqlzrtqtd0kqex0nkq">
              Nostr
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="https://twitter.com/calvadev">
              Twitter
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="https://github.com/calvadev">
              GitHub
            </Link>
          </span>
          {' | '}
          <span>
            <Link href="https://replit.com/@calvadev">
              Replit
            </Link>
          </span>
        </h1>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
