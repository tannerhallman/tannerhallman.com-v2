import coworks from "../public/work/coworks-product/coworks.png";
import coworksproduct1 from "../public/work/coworks-product/product-1.webp";
import coworksproduct2 from "../public/work/coworks-product/product-2.webp";
import coworksproduct3 from "../public/work/coworks-product/product-3.webp";

import thefacelessmany from "../public/work/tfm-product/fm-logo.png";
import thefacelessmanyproduct1 from "../public/work/tfm-product/product-1.png";
import thefacelessmanyproduct2 from "../public/work/tfm-product/product-2.png";

import mkr from "../public/work/mkr-product/mkr-logo.png";
import mkrproduct1 from "../public/work/mkr-product/product-1.png";
import mkrproduct2 from "../public/work/mkr-product/product-2.png";
import mkrproduct3 from "../public/work/mkr-product/product-3.png";

const data = [
  {
    id: 1,
    image: coworks,
    title: "Coworks",
    subtext: "Coworking Saas Platform",
    description:
      "A robust SaaS product built to help coworking spaces manage and automate the member and guest experience.",
    paragraphs: [
      "I am a proud co-founder of Coworks, a comprehensive platform tailored for the modern coworking space. The platform offers a complete suite of solutions designed to cater to the diverse needs of today's coworking environments. From flex office spaces to makerspaces, entrepreneurship centers, and even coworking combined with childcare, my platform provides an all-encompassing solution.",
      "One of the core strengths of the platform platform is its user-friendly platform, which is designed to delight both members and managers. With features such as a mobile app, member directory, automated billing, events management, room booking, and more, I've ensured that every aspect of coworking management is covered. The platform also boasts advanced features like analytics, software integrations, and resource booking, setting it apart from other platforms in the market.",
      "Testimonials from satisfied users further validate the platform's efficacy. Comments like 'The analytics and dashboard are where Coworks sets themselves apart' and 'Having Coworks is like an extra team member' highlight the tangible benefits users have experienced. ",
      "The inspiration behind Coworks stems from personal experience. Having worked out of coworking spaces myself, we recognized the challenges faced by operators and managers. With this insight, we built a platform that offers intuitive tools, mobile-first apps, and smart solutions, all while avoiding unnecessary, bloated features that can hinder daily operations.",
      "In essence, Coworks is not just a website; it's a reflection of my commitment to enhancing the coworking experience. Through this platform, I aim to streamline operations, foster community connections, and support the growth of coworking spaces globally.",
    ],
    slug: "coworks",
    link: "/work/coworks",
    liveURL: "https://coworks.com",
    target: "_self",
    productShots: [coworksproduct1, coworksproduct2, coworksproduct3],
  },
  {
    id: 2,
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
    id: 3,
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
