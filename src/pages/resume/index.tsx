import Link from "next/link";

export default function resume() {
  return (
    <div className="w-full h-full p-3">
      <h1 className="py-2 px-3 text-xl">
        <strong>Experience:</strong>
      </h1>
      <div className="py-1 px-3 mb-3">
        <Link href="https://www.commenda.io/">Commenda</Link>
        {" | "}
        <em>Software Development Engineer Intern</em>
        {" | "}
        <em>Aug 2022 - Apr 2023</em>
        {" | "}
        <em>Bengaluru, Karnataka, India (Remote)</em>
        <ul className="ml-4">
          <li>
            - Contributed to building a web-based software suite to make it
            easier for international startups to manage legal and financial
            requirements as their companies grow
          </li>
          <li>
            - Used <strong>Next.js</strong> and <strong>Prisma</strong> to
            develop a full-stack application that streamlines the process for
            startups to get from product conception to fundraising
          </li>
          <li>
            - Focused on a cap table management application to make it easier
            for founders and investors to handle exits and vesting of shares
          </li>
          <li>
            - Leveraged the <strong>Liquid Network</strong> to test out private
            asset digitization and issuance with <strong>Node.js</strong>
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://www.tableau.com/">Salesforce (Tableau)</Link>
        {" | "}
        <em>Tableau Software Engineer Intern</em>
        {" | "}
        <em>May 2022 - Aug 2022</em>
        {" | "}
        <em>Seattle, Washington, United States</em>
        <ul className="ml-4">
          <li>
            - Developed nickname feature to simplify the displaying and sorting
            of nodes in Tableau Services Manager (TSM) in an agile kanban
            environment
          </li>
          <li>
            - Wrote design documentation considering data flow from the user to
            a <strong>Zookeeper</strong> backend, edge cases, and several
            implementation possibilities
          </li>
          <li>
            - Created administrator commands using <strong>Spring Boot</strong>{" "}
            to manage nicknames and allow for their execution using the TSM
            command-line interface
          </li>
          <li>
            - Updated TSM Web UI utilizing <strong>React</strong> to allow for
            nickname management within a browser
          </li>
          <li>
            - Applied <strong>JUnit Testing</strong> to validate the output and
            execution of the CLI commands
          </li>
          <li>- Proposed feature additions to implement in future releases</li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://icodeschool.com/">iCode School Franchise</Link>
        {" | "}
        <em>Technical Instructor</em>
        {" | "}
        <em>Oct 2021 - Apr 2022</em>
        {" | "}
        <em>Wylie, Texas, United States</em>
        <ul className="ml-4">
          <li>
            - Taught students programming fundamentals in{" "}
            <strong>Python</strong>
          </li>
          <li>- Managed an orderly classroom of 10 students</li>
          <li>
            - Provided feedback to parents about class material and student
            development
          </li>
          <li>
            - Encouraged collaboration and creativity to stimulate learning
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://www.jpmorganchase.com/">JPMorgan Chase & Co.</Link>
        {" | "}
        <em>Software Engineer Intern</em>
        {" | "}
        <em>Jun 2021 - Aug 2021</em>
        {" | "}
        <em>Plano, Texas, United States (Remote)</em>
        <ul className="ml-4">
          <li>
            - Worked in an agile scrum environment to develop and migrate full
            stack web applications to an internal cloud server called Gaia
          </li>
          <li>
            - Created and exposed REST API endpoints using{" "}
            <strong>Spring Boot</strong> to connect an <strong>Angular</strong>{" "}
            frontend with a <strong>MS SQL Server</strong> backend
          </li>
          <li>
            - Collaborated on producing a UI to validate Excel data and convert
            it to JSON objects in order to post it to a database
          </li>
          <li>
            - Designed a UI to download data from a database by exporting it as
            a CSV file
          </li>
          <li>
            - Implemented <strong>JUnit Testing</strong> to optimize the
            functionality of various functions and methods
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://www.dominos.com/">Domino&apos;s</Link>
        {" | "}
        <em>Delivery Expert</em>
        {" | "}
        <em>Mar 2021 - May 2021</em>
        {" | "}
        <em>Richardson, Texas, United States</em>
        <ul className="ml-4">
          <li>- Delivered products by car and to the door of customers</li>
          <li>- Prepared orders in a timely manner</li>
          <li>
            - Provided excellent customer service as the last impression for
            customers
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://www.dallascountyvotes.org/">
          Dallas County Elections Department
        </Link>
        {" | "}
        <em>Poll Worker</em>
        {" | "}
        <em>Nov 2020</em>
        {" | "}
        <em>Richardson, Texas, United States</em>
        <ul className="ml-4">
          <li>
            - Responsible for greeting and assisting each voter as they came
            into the polling place
          </li>
          <li>- Verified the eligibility of potential voters</li>
          <li>
            - Assisted the Election Judge on all Election Day duties as assigned
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://www.whataburger.com/">Whataburger</Link>
        {" | "}
        <em>Team Member</em>
        {" | "}
        <em>Jul 2020</em>
        {" | "}
        <em>Friendswood, Texas, United States</em>
        <ul className="ml-4">
          <li>
            - Responsible for fulfilling Whataburger’s customer service
            commitment to excellence
          </li>
          <li>
            - Ensured each customer enjoyed a hot, freshly-prepared product, of
            the highest quality ingredients
          </li>
          <li>
            - Served customers in a comfortable, clean, and friendly environment
          </li>
        </ul>
      </div>
      <h1 className="py-2 px-3 text-xl">
        <strong>Education:</strong>
      </h1>
      <div className="py-1 px-3 mb-3">
        <Link href="https://www.utdallas.edu">
          The University of Texas at Dallas
        </Link>
        {" | "}
        <em>B.S., Computer Engineering</em>
        {" | "}
        <em>Aug 2019 - May 2023</em>
        <p className="ml-4 mb-2">
          - Graduated with a cumulative GPA of 3.473 on a 4 PT scale
        </p>
        <p className="ml-4">
          <em>Activities and Societies</em>: Kappa Sigma Nu-Omicron Chapter,
          Student Chapter of the Institute of Electrical and Electronics
          Engineers, Blockchain and Cryptographic Systems Organization
        </p>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://summer.stanford.edu">Stanford Summer Session</Link>
        {" | "}
        <em>Jun 2018 - Aug 2018</em>
        <p className="ml-4">
          - Attended the Stanford High School Summer Session and took two
          classes in Computer and Data Science
        </p>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://fhs.myfisd.com/">Friendswood High School</Link>
        {" | "}
        <em>Distinguished High School Diploma</em>
        {" | "}
        <em>Aug 2015 - May 2019</em>
        <p className="ml-4 mb-2">
          - Graduated in the top 3.6% of my class (18/500) with a cumulative
          unweighted GPA of 4.0000 on a 4 PT scale and a cumulative weighted GPA
          of 101.1379 on a 100 PT scale
        </p>
        <p className="ml-4">
          <em>Activities and Societies</em>: Varsity Cross Country, Junior
          Varsity Track & Field, Math & Science Organization, Recycling Club,
          Computer Science Club, Stock Market Club, UIL Science, UIL
          Mathematics, UIL Computer Science, National Honor Society, Mu Alpha
          Theta
        </p>
      </div>
      <h1 className="py-2 px-3 text-xl">
        <strong>Projects:</strong>
      </h1>
      <div className="py-1 px-3 mb-3">
        <Link href="https://shopstr.store/">Shopstr</Link>
        {" | "}
        <em>Apr 2023 - Present</em>
        <ul className="ml-4">
          <li>
            - Building a decentralized marketplace utilizing the{" "}
            <strong>Nostr</strong> protocol with Bitcoin as the native payment
            rail
          </li>
          <li>
            - Developing an API and UI with <strong>TypeScript</strong> and{" "}
            <strong>React</strong> that interacts with Nostr relays to handle
            account management and note propagation
          </li>
          <li>
            - Working with <strong>Cashu</strong> and the{" "}
            <strong>Lightning Network</strong> to facilitate instant, anonymized
            cross-border payments
          </li>
          <li>- Designing a native wallet to simplify payment UX</li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <strong>Network Down-Converter Plug</strong>
        {" | "}
        <em>Aug 2022 - May 2023</em>
        <ul className="ml-4">
          <li>
            - Designed a plug for Juniper Networks to allow for the transmission
            of high volume test data to network switches for analysis
          </li>
          <li>
            - Proof of concept estimated to reduce cost of currently implemented
            solution from $10k to around $700
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://github.com/calvadev/bitcoinpy">
          Bitcoin Implementation
        </Link>
        {" | "}
        <em>Aug 2022 - May 2023</em>
        <ul className="ml-4">
          <li>
            - Built a mainnet and testnet implementation of Bitcoin using{" "}
            <strong>Python</strong>
          </li>
          <li>
            - Wrote several class definitions and methods to initiate
            transactions, check block validity, and implement opcodes
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://github.com/AustinGirouard/3354-Palendar">
          Palendar
        </Link>
        {" | "}
        <em>Oct 2021 - Dec 2021</em>
        <ul className="ml-4">
          <li>
            - Planned the implementation and feature set of a calendar sharing
            software following real-world software development processes
          </li>
          <li>
            - Designed the class diagram showing how each class involved in the
            system relates to each other and the variables and methods used
            within them
          </li>
          <li>
            - Estimated the cost associated with the development process based
            on hardware, software, travel, training, and effort requirements
          </li>
          <li>
            - Determined the pricing model for the software based on cost and
            effort estimations with the goal of maximizing competitiveness in
            the market and profitability
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <Link href="https://github.com/calvadev/codeforgood">
          Code for Good Hackathon
        </Link>
        {" | "}
        <em>Sep 2020</em>
        <ul className="ml-4">
          <li>
            - Tasked with developing a financial literacy web application for
            the nonprofit MyPath in under twenty-four hours
          </li>
          <li>
            - <strong>TypeScript</strong> was used for API and backend
            implementation while <strong>React</strong> was used for frontend
            implementation of the navbar and various pages
          </li>
          <li>
            - Articles page implemented button components for quizzes as well as
            card components that, when clicked, hyperlink to external articles
            and original posts from MyPath leaders
          </li>
          <li>
            - Made use of shadows, borders, and images to add more contrast and
            give the site a crisper look
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <strong>Traffic Light Control System</strong>
        {" | "}
        <em>Aug 2019 - Dec 2019</em>
        <ul className="ml-4">
          <li>
            - Developed a functioning and accurately timed four-way traffic
            light control system
          </li>
          <li>
            - Built the system with resistors of different values and external
            buttons to act as pressure plates to simulate a large amount of
            traffic to activate an infrared LED
          </li>
          <li>
            - Implemented infrared LED and infrared photo-diode to act as flow
            of traffic and activate on button press to trigger an LED light
            change
          </li>
          <li>
            - Programmed through the <strong>Energia</strong> programming
            software and <strong>TI LaunchPad</strong> to signal when lights
            should change between red, green, and yellow and to set pressure
            plate activations
          </li>
        </ul>
      </div>
      <h1 className="py-2 px-3 text-xl">
        <strong>Volunteering:</strong>
      </h1>
      <div className="py-1 px-3 mb-3">
        <strong>Kappa Sigma Fraternity</strong>
        {" | "}
        <em>Donation Collector</em>
        {" | "}
        <em>Sep 2019</em>
        <ul className="ml-4">
          <li>
            - Helped to raise over $6,000 for the Kappa Sigma Military Heroes
            Campaign
          </li>
          <li>
            - Talked to students and faculty members of the University of Texas
            at Dallas about the goal and mission of the campaign
          </li>
          <li>
            - Helped to collect over 200 canned goods for the NTX Food Drive
          </li>
          <li>
            - Helped to collect and donate over 6,000 pieces of clothing to the
            Goodwill
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <strong>Mu Alpha Theta</strong>
        {" | "}
        <em>Tutor</em>
        {" | "}
        <em>Aug 2017 - May 2019</em>
        <ul className="ml-4">
          <li>
            - Helped kids struggling with math at my local junior high and
            elementary schools
          </li>
          <li>
            - Drove down to the schools at the designated times set aside for
            tutoring
          </li>
          <li>
            - Would lead kids through various exercises and card games that
            helped them focus on their multiplication, division, addition, and
            subtraction skills
          </li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <strong>City of Friendswood</strong>
        {" | "}
        <em>Community Volunteer</em>
        {" | "}
        <em>Aug 2017</em>
        <ul className="ml-4">
          <li>
            - Helped to organize people to help clean up houses that were
            affected by Hurricane Harvey
          </li>
          <li>
            - Went door to door seeing if homeowners needed help picking up
            trash and cleaning
          </li>
          <li>- Supplied homeowners with a truck to help dispose of waste</li>
        </ul>
      </div>
      <div className="py-1 px-3 mb-3">
        <strong>Houston Food Bank</strong>
        {" | "}
        <em>Meal Server</em>
        {" | "}
        <em>Aug 2015</em>
        <ul className="ml-4">
          <li>- Prepared, served, and packed food for those in need</li>
          <li>
            - Helped leaders talk to people arriving at the food bank to make
            them feel more comfortable
          </li>
        </ul>
      </div>
    </div>
  );
}
