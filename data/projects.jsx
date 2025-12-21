import coworks from "../public/work/coworks-product/coworks.png";
import coworksproduct1 from "../public/work/coworks-product/product-1.webp";
import coworksproduct2 from "../public/work/coworks-product/product-2.webp";
import coworksproduct3 from "../public/work/coworks-product/product-3.webp";
import mkr from "../public/work/mkr-product/mkr-logo.png";
import mkrproduct1 from "../public/work/mkr-product/product-1.png";
import mkrproduct2 from "../public/work/mkr-product/product-2.png";
import mkrproduct3 from "../public/work/mkr-product/product-3.png";
import thefacelessmany from "../public/work/tfm-product/fm-logo.png";
import thefacelessmanyproduct1 from "../public/work/tfm-product/product-1.png";
import thefacelessmanyproduct2 from "../public/work/tfm-product/product-2.png";
import liquibaseLogo from "../public/work/liquibase-logo.svg";
import sikaLogo from "../public/work/sika-logo.svg";
import livethemesLogo from "../public/icons/live-themes.png";

const data = [
  {
    id: 1,
    image: liquibaseLogo,
    title: "Liquibase",
    subtext: "Cloud Database Migration Platform",
    description:
      "Building a greenfield SaaS platform extending Liquibase's core database migration platform into the cloud.",
    paragraphs: [
      "At Liquibase, I'm building a greenfield SaaS platform that extends their industry-leading database migration tool into the cloud. This platform enables teams to manage database migrations through an intuitive web interface, bringing enterprise-grade database DevOps to a broader audience.",
      "I've led architectural design initiatives and foundational implementations, including cloud-native microservices, CI/CD automation, and multi-tenant customer segmentation. A key contribution was designing and implementing a scalable, event-driven microservice using websockets to support real-time data synchronization for users.",
      "Beyond core engineering, I've championed an AI initiative across the company to leverage AI as a tool in our workflows. This includes helping lead the design and implementation of AI-powered features within the platform to provide insights on customer database migration pipelines and deliver proactive, actionable solutions.",
      "Working closely with product and design teams, I've helped simplify complex developer workflows into intuitive, easy-to-use interfaces - making database migrations accessible to teams of all sizes.",
    ],
    slug: "liquibase",
    link: "/work/liquibase",
    liveURL: "https://liquibase.com",
    target: "_self",
    productShots: [],
  },
  {
    id: 2,
    image: sikaLogo,
    title: "Sika Health",
    subtext: "Healthcare Spending Platform",
    description:
      "A platform revolutionizing HSA & FSA spending through automated healthcare transaction classification.",
    paragraphs: [
      "At Sika Health, I orchestrated a team of engineers in developing and maintaining a robust Healthcare Spending Account platform that's transforming how people use their HSA and FSA benefits.",
      "One of the most impactful projects was collaborating closely with the Stripe team to pioneer advancements in payment rails. We facilitated the seamless transmission of healthcare data to card networks for automated classification of healthcare card transactions (auto-substantiation), eliminating manual receipt submission for millions of transactions.",
      "I spearheaded the development of the 'Letter of Medical Necessity' feature, enabling automatic substantiation of healthcare item purchases approved by doctors. Additionally, I introduced an AI-driven customer service chat feature using RAG, optimizing support scalability while reducing resource allocation.",
      "On the infrastructure side, I directed platform architecture management using Terraform and Google Cloud Platform (GCP), achieving a 50% reduction in monthly architecture spending. I also planned and executed a migration from a fragmented tech stack (Rust, Python, Go, JavaScript) into a unified TypeScript architecture, significantly enhancing efficiency and maintainability.",
      "Other key contributions included engineering a scalable webhooks architecture for public API consumers, developing and maintaining a public API for partner integrations, and establishing internal engineering standards and best practices.",
    ],
    slug: "sikahealth",
    link: "/work/sikahealth",
    liveURL: "https://sikahealth.com",
    target: "_self",
    productShots: [],
  },
  {
    id: 3,
    image: coworks,
    title: "Coworks",
    subtext: "Coworking SaaS Platform",
    description:
      "A robust SaaS product built to help coworking spaces manage and automate the member and guest experience.",
    paragraphs: [
      "I am a proud co-founder of Coworks, a comprehensive platform tailored for the modern coworking space. We built and led this B2B2C SaaS product from 0 to ~500k ARR, hundreds of customers, and ~$1 million in seed funding.",
      "I was responsible for coding and maintaining a suite of software products: a React.js dashboard, a Rails API, two native mobile apps (iOS and Android) with React Native, and a NodeJS server powering conference room booking and front-desk guest check-in tablets. The stack included ReactJS Hooks, Redux, GraphQL, Apollo, NodeJS, ExpressJS, Socket.io, TailwindCSS, Prisma, NestJS, and Redis, with integrations to Stripe, Google Calendar, Twilio, SendGrid, Outlook, Firebase, and more.",
      "Beyond engineering, I wore many hats: Senior Engineer, DevOps Engineer, Product Manager, Sprint/Scrum Manager, Developer Experience Manager, Automation Engineer, Customer Experience Engineer, and Technical Manager. This breadth of experience gave me deep insight into building products that truly serve customers.",
      "Coworks was founded in 2017 as an internal product of Lithios and was officially incorporated in June 2019. We were also accepted into the Techstars Proptech Accelerator in 2019, where we refined our business and product strategy.",
      "The platform offers intuitive tools, mobile-first apps, and smart solutions for coworking spaces of all types - from flex offices to makerspaces and entrepreneurship centers.",
    ],
    slug: "coworks",
    link: "/work/coworks",
    liveURL: "https://coworks.com",
    target: "_self",
    productShots: [coworksproduct1, coworksproduct2, coworksproduct3],
  },
  {
    id: 4,
    image: livethemesLogo,
    title: "LiveThemes",
    subtext: "Theme Editor & Marketplace for Ableton Live",
    description:
      "A full-stack SaaS application for creating, sharing, and selling custom themes for Ableton Live.",
    paragraphs: [
      "LiveThemes is a passion project born from my love of music production. It's a complete theme editor and marketplace that enables Ableton Live users to customize their DAW's visual appearance with support for 300+ color properties across Ableton versions 10, 11, and 12.",
      "The platform features a real-time visual editor where users can see their color changes instantly applied to an SVG preview of the Ableton interface. Users can create themes from scratch, import existing .ask theme files, or remix other creators' themes with automatic attribution.",
      "I built a full community marketplace where creators can publish free themes or monetize their work through Stripe Connect integration. The platform handles payments, creator payouts (90% to creators), and purchase tracking - a complete e-commerce solution for digital goods.",
      "The tech stack showcases modern full-stack development: Next.js 15 with React Server Components, TypeScript throughout, Supabase for auth and PostgreSQL database, Drizzle ORM for type-safe queries, and AWS infrastructure via SST. I implemented ISR with optimized database queries that reduced bandwidth by 80-90%.",
      "Additional features include PostHog analytics, Sentry error tracking, comprehensive Zod validation for theme files, and a robust testing setup. This project demonstrates my ability to build production-grade applications from concept to deployment.",
    ],
    slug: "livethemes",
    link: "/work/livethemes",
    liveURL: "https://livethemes.app",
    target: "_self",
    productShots: [],
  },
  {
    id: 5,
    image: thefacelessmany,

    title: "The Faceless Many",
    subtext: "A Blockchain-based NFT Marketplace",
    description:
      "A Blockchain Marketplace built on MultiverseX (previously Elrond Blockchain).",
    paragraphs: [
      "A website that stands as a testament to my dedication and passion for the digital realm. As you navigate through the site, you'll immediately notice its unique design and user-centric interface, which I meticulously crafted to ensure an immersive experience for every visitor.",
      "The website showcases a blend of aesthetic appeal and functionality, reflecting my commitment to delivering top-notch quality in every project I undertake. Every element, from the color palette to the typography, has been chosen with care to resonate with the target audience and convey the core message effectively.",
      "One of the standout features of 'The Faceless Many' is its seamless navigation. I've ensured that users can easily access the information they seek, making their journey through the site both enjoyable and informative. The content is curated and presented in a way that engages the audience, keeping them hooked from the moment they land on the homepage.",
      "In addition to its visual appeal, the website is built on a robust technical foundation. I've incorporated the latest web technologies and best practices to ensure that it performs optimally across various devices and browsers. This ensures that every user, regardless of their device or location, can access the site with ease.",
      "In conclusion, it's more than just a website; it's a reflection of my dedication, skills, and vision in the digital space. I am immensely proud of this project and believe it serves as a shining example of what I can achieve when I put my heart and soul into my work.",
    ],
    slug: "thefacelessmany",
    link: "/work/thefacelessmany",
    liveURL: "https://www.thefacelessmany.com/marketplace",
    target: "_self",
    productShots: [thefacelessmanyproduct1, thefacelessmanyproduct2],
  },
  {
    id: 6,
    image: mkr,

    title: "Maiar Kart Racing",
    subtext: "A NFT minting website",
    description:
      "A NFT Minting Experience (including a Smart Contract) built on MultiverseX (previously Elrond Blockchain).",
    slug: "mkr",
    link: "/work/mkr",
    liveURL: "https://mkr-web.vercel.app/",
    target: "_self",
    githubURL: "https://github.com/tannerhallman/mkr-web",
    paragraphs: [
      "This is a dApp (decentralized application) dedicated to the minting of NFTs (Non-Fungible Tokens). Built on the robust foundation of the Elrond blockchain, which has since evolved into the MultiverseX Blockchain, this platform stands as a testament to the rapid advancements in the world of decentralized finance and digital assets.",
      "One of the standout features of this website is its seamless integration with blockchain wallets. This integration not only enhances the user experience but also ensures a secure and transparent transaction process. Users can effortlessly pay for their desired NFTs using this platform, which then liaises with a smart contract deployed on the blockchain.",
      "The smart contract, which was meticulously crafted and deployed by me, plays a pivotal role in the NFT creation process. Once a user completes the payment, the smart contract is triggered to mint a new NFT. This NFT is then securely delivered to the user's wallet, ensuring they have full ownership and control over their digital asset.",
      "In summary, the website serves as a bridge between users and the vast potential of the NFT world. By leveraging the power of the MultiverseX Blockchain and integrating with blockchain wallets, it offers a streamlined and secure process for NFT minting and acquisition. My contribution, especially in the deployment of the smart contract, is a clear indication of the expertise and vision I bring to the blockchain and NFT space. ",
    ],
    productShots: [mkrproduct1, mkrproduct2, mkrproduct3],
  },
];
export default data;
