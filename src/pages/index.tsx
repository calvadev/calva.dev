import Link from "next/link";

export default function About() {
  return (
    <div className="w-full h-full p-3">
      <p className="py-1 px-3 mb-3">My name is Cristian Alvarez-Hernandez.</p>
      <p className="py-1 px-3 mb-3">
        I am currently working as a software engineer in Seattle, WA, U.S.A. and
        have a deep interest in freedom tech, particulary Bitcoin and Nostr.
      </p>
      <p className="py-1 px-3 mb-3">
        I believe that Bitcoin has the potential to open up previously ignored
        or irrelevant countries to the rest of the world in regards to financial
        access and tapping into their human capital. I think it is the most open
        and important free market monetary system that has existed in the
        history of humanity.
      </p>
      <p className="py-1 px-3 mb-3">
        Nostr, on the other hand, facilitates the adoption and spread of Bitcoin
        while also allowing for the construction of globally distributed,
        decentralized, and interoperable applications, whether that be social
        media platforms, marketplaces, or anything else you can think of that
        can handle JSON objects.
      </p>
      <p className="py-1 px-3 mb-3">
        Outside of full-time work, I have been focused on building a Nostr
        marketplace client called{" "}
        <Link href="https://shopstr.store/">Shopstr</Link> and on contributing
        to <Link href="https://cashu.space/">Cashu</Link>, a Chaumain ecash
        system built for Bitcoin.
      </p>
      <div className="w-1/2 mx-auto my-4">
        <img alt="" src="/calvadevbtc.jpg" />
      </div>
      <div className="py-1 px-3 mb-3">
        Some facts about me:
        <ul className="ml-4">
          <li>
            - I was born in Los Angeles, CA, U.S.A. and raised in Houston, TX,
            U.S.A.
          </li>
          <li>- I know English, Spanish, and have been learning Portuguese</li>
          <li>
            - I have been to 15 countries across 3 continents
          </li>
          <li>
            - My favorite books are Zero to One, Great Expectations, Animal
            Farm, The Network State, and The Creative Act
          </li>
          <li>
            - My favorite movies are The Shawshank Redemption, The Social
            Network, Whiplash, Once Upon a Time in Hollywood, and One Flew Over
            the Cuckoo&apos;s Nest
          </li>
          <li>
            - My favorite shows are The Rehearsal, BoJack Horseman, Fargo,
            Hamilton&apos;s Pharmacopeia, and Lost
          </li>
          <li>
            - I put 100% of the money that does not go towards my living
            expenses into Bitcoin
          </li>
          <li>
            - If I lived close enough to a casino I could potentially develop a
            gambling addiction
          </li>
          <li>
            - I am obsessed with &quot;barefoot&quot;/grounding shoes and
            sandals
          </li>
        </ul>
      </div>
    </div>
  );
}
