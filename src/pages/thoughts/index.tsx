import Link from 'next/link'

export default function thoughts() {
  return(
    <div className="w-full h-full p-3">
      <p className="py-1 px-3 mb-3">
        Subscribe to my{' '} 
        <Link href="https://calvadev.substack.com/">
          Substack
        </Link>
        {' '}to stay regularly updated with my posts as they come out.
      </p>
      <ul className="ml-4">
          <li>
            -{' '}
            <Link href="/thoughts/posts/reflections-on-college">
              Reflections On College
            </Link>
            {' '}(tbd)
          </li>
          <li>
            -{' '}
            <Link href="/thoughts/posts/bitcoin-and-the-lightning-network">
              Bitcoin and the Lightning Network
            </Link>
            {' '}(May 9th, 2022)
          </li>
          <li>
            -{' '} 
            <Link href="/thoughts/posts/coming-soon">
              Coming Soon..
            </Link>
            {' '}(December 14th, 2021)
          </li>
        </ul>
    </div>
  )
}