import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-full p-3">
      <p className="py-1 px-3 mb-3">Hi 👋, I&apos;m calvadev!</p>
      <p className="py-1 px-3 mb-3">
        Commerce cowboy, free market maximalist, nurture capitalist, and
        founder/CEO of{" "}
        <Link href="https://shopstrmarkets.com/">Shopstr Markets</Link>.
      </p>
      <p className="py-1 px-3 mb-3">
        In the age of automation, human inputs become the most valuable resource
        in determining the quality of mechanical outputs. The knowledge, care,
        and passion that goes into the creation of a product or service is what
        makes it truly valuable. The daily inputs that we put into our work are
        what make us who we are. Key in that, the daily inputs we put into our
        bodies, mind, and soul are the foundation, which is why I see open food
        access and the fostering of local circular economies as the most
        important problem to tackle in our world today. You'd be hard-pressed to
        find someone who doesn't eat food or engage in commerce on a daily
        basis.
      </p>
      <p className="py-1 px-3 mb-3">
        Information yearns to be free, and the most impactful and high-signal
        form of information is how our money flows. How it flows through our
        world, how it flows to our communities, and how it flows to the inputs
        that go towards supporting our lives. How our money flows and how we
        allow it to flow have a direct impact on the structure and development
        of our society. The more we can decentralize and democratize the flow of
        money and commerce, the more we can shift the world towards a future of
        our own creation.
      </p>
      <p className="py-1 px-3 mb-3">
        The building blocks are there, we just need to put them together.
      </p>
      <div className="w-3/4 mx-auto my-4">
        <div className="flex gap-4">
          <Image
            alt="Young cowboy"
            src="/cowboy-kid.jpg"
            width={600}
            height={800}
            style={{ width: "50%", height: "auto", objectFit: "cover" }}
          />
          <Image
            alt="Cowboy now"
            src="/cowboy-now.jpg"
            width={600}
            height={800}
            style={{ width: "50%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <p className="text-center italic text-sm mt-2">
          Being a commerce cowboy wasn&apos;t a phase, it&apos;s a lifestyle
        </p>
      </div>
      <div className="py-1 px-3 mb-3">
        Some facts about me:
        <ul className="ml-4">
          <li>- I&apos;m a 2nd generation Mexican-American</li>
          <li>
            - I was born in Los Angeles, CA, U.S.A. and raised in Houston, TX,
            U.S.A.
          </li>
          <li>- I know English, Spanish, and have been learning Portuguese</li>
          <li>- I have been to 23 countries across 4 continents</li>
          <li>
            - I own nothing but my business, computer, clothes, books, and
            Bitcoin (not crypto)
          </li>
          <li>
            - My favorite books are Zero to One, Great Expectations, Animal
            Farm, The Network State, and Everything I Want To Do Is Illegal
          </li>
          <li>
            - My favorite movies are The Shawshank Redemption, The Social
            Network, The Big Short, Once Upon a Time in Hollywood, and One Flew
            Over the Cuckoo&apos;s Nest
          </li>
          <li>
            - My favorite shows are The Rehearsal, BoJack Horseman, Fargo,
            Hamilton&apos;s Pharmacopeia, and Lost
          </li>
          <li>
            - I prioritze eating local, grass-fed, pasture-raised, regenerative,
            and organic foods
          </li>
          <li>- I&apos;ve run one marathon (never again)</li>
          <li>- I train Brazilian Jiu Jitsu</li>
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
