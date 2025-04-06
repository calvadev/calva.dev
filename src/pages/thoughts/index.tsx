import Link from "next/link";

export default function thoughts() {
  return (
    <div className="w-full h-full p-3">
      <h1 className="py-2 px-3 text-xl">
        <strong>Blog Posts:</strong>
      </h1>
      <ul className="ml-4 mb-6">
        <li>
          -{" "}
          <Link href="/thoughts/posts/reflections-on-college">
            Reflections On College
          </Link>{" "}
          (tbd)
        </li>
        <li>
          -{" "}
          <Link href="/thoughts/posts/bitcoin-and-the-lightning-network">
            Bitcoin and the Lightning Network
          </Link>{" "}
          (May 9th, 2022)
        </li>
      </ul>
      <h1 className="py-2 px-3 text-xl">
        <strong>Talks, Pitches, and Podcasts:</strong>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
        <div className="video-container">
          <h3 className="mb-2">- Top Builder Season II Final Round: Shopstr</h3>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wYaw3C7k_yo?si=zDm5I1vpd1sODzYZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-container">
          <h3 className="mb-2">- Early Days Podcast: Shopstr</h3>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tx3Pw3Ap_88?si=zh-6km2ny_8bEd2Z"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-container">
          <h3 className="mb-2">- Adopting Bitcoin El Salvador: Nostr Panel</h3>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eRgHb8BGs18?si=VRovVTuWx7gQKHQs&amp;start=17045"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-container">
          <h3 className="mb-2">
            - Suriname Decentralized: Circular Economies in the Age of
            Self-Sovereignty
          </h3>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SoPiNp83I78?si=6sheAf_S87MWUrDB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-container">
          <h3 className="mb-2">- bitcoin++ Berlin: Cashu on Shopstr</h3>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wPZo6cYBleE?si=TtZQ7yvO5qyHjRQ4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-container">
          <h3 className="mb-2">
            - bitcoin++ Berlin: Unsiloed Data, Unsiloed Money
          </h3>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KD735kbjLZ0?si=Mn1k9ieWNA60W9ZN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-container">
          <h3 className="mb-2">- PlebLab Startup Day CDMX: Shopstr</h3>
          <div className="relative pb-[56.25%] h-0">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Tupe63Y8UT4?si=Qs-yv9Jt0woDW6Hr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
