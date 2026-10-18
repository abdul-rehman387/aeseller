import { blogPosts } from '../data/blogPosts'

// One entry per public route. This table drives <head> tags (client + prerender),
// JSON-LD, the XML sitemap and the SEO checks - keep it in sync with App.jsx.
//
// crumbs:  visible breadcrumb trail (excluding Home and the current page)
// service: Service schema name - only for pages describing a service AE Seller offers
// updated: ISO date of the last meaningful content change (used for <lastmod>);
//          leave unset rather than guessing.

const SERVICES = { name: 'Services', path: '/services' }
const MOBILE = { name: 'Mobile App Development', path: '/mobile-app-development' }

const pages = [
  {
    path: '/',
    title: 'Software Development Company | AE Seller',
    description: 'AE Seller is a software development company delivering custom software, web and mobile apps, AI automation, cloud solutions, and digital services.',
    // LCP element is the .hero-bg CSS background (index.css) - keep these in sync.
    preloadImage: 'https://images.unsplash.com/photo-1532190872407-280735d27e08?w=1600&q=80',
  },
  {
    path: '/services',
    title: 'Software Development Services | AE Seller',
    description: 'Explore AE Seller software development services: custom and enterprise software, web and mobile apps, SaaS, AI agents, workflow automation, cloud and DevOps.',
    name: 'Services',
  },
  {
    path: '/industries',
    title: 'AI & Automation for Tech Companies | AE Seller',
    description: 'AI agents, bots, and automation built for IT service providers, SaaS companies, fintech, and Web3 teams - designed around how technology businesses operate.',
    name: 'Industries',
  },
  {
    path: '/technologies',
    title: 'Our Technology Stack | AE Seller',
    description: 'The languages, frameworks, and cloud platforms AE Seller uses to build software - React, Node.js, Python, .NET, Flutter, AWS, Azure, PostgreSQL and more.',
    name: 'Technologies',
  },
  {
    path: '/insights',
    title: 'Software Development Blog & Insights | AE Seller',
    description: 'Practical, engineering-led articles on software development, mobile apps, AI, cloud, and DevOps from the AE Seller team.',
    name: 'Insights',
  },
  {
    path: '/portfolio',
    title: 'Software Development Portfolio | AE Seller',
    description: 'Browse AE Seller projects: e-commerce stores, CRM and inventory dashboards, institute management systems, tracking apps, and mobile applications.',
    name: 'Portfolio',
  },

  // Mobile
  {
    path: '/mobile-app-development',
    title: 'Mobile App Development Company | AE Seller',
    description: 'Native iOS, Android, and cross-platform mobile app development - from product strategy and UI/UX to App Store and Google Play launch and ongoing support.',
    name: 'Mobile App Development', service: 'Mobile App Development',
  },
  {
    path: '/ios-app-development',
    title: 'iOS App Development Services | AE Seller',
    description: 'Native iOS apps in Swift and SwiftUI - polished, secure, and App Store-ready - for startups launching a first product and businesses extending to Apple devices.',
    name: 'iOS App Development', crumbs: [MOBILE], service: 'iOS App Development',
  },
  {
    path: '/android-app-development',
    title: 'Android App Development Services | AE Seller',
    description: 'Native Android apps in Kotlin and Jetpack Compose, tested across real devices and taken all the way to a successful Google Play launch.',
    name: 'Android App Development', crumbs: [MOBILE], service: 'Android App Development',
  },
  {
    path: '/cross-platform-apps',
    title: 'Cross-Platform App Development | AE Seller',
    description: 'iOS and Android apps from one shared codebase - lower development time and cost without sacrificing native performance or platform feel.',
    name: 'Cross-Platform Apps', crumbs: [SERVICES], service: 'Cross-Platform App Development',
  },
  {
    path: '/react-native-apps',
    title: 'React Native App Development | AE Seller',
    description: 'React Native app development: one JavaScript codebase with real native UI on iOS and Android, built by engineers who ship production apps.',
    name: 'React Native Apps', crumbs: [SERVICES], service: 'React Native App Development',
  },

  // Custom software
  {
    path: '/enterprise-software',
    title: 'Enterprise Software Development | AE Seller',
    description: 'Custom enterprise software development: internal systems, ERPs, and multi-tenant platforms integrated with your existing infrastructure.',
    name: 'Enterprise Software', crumbs: [SERVICES], service: 'Enterprise Software Development',
  },
  {
    path: '/saas-development',
    title: 'SaaS Development Company | AE Seller',
    description: 'SaaS product development from prototype to billing-ready multi-tenant platform - subscription billing, usage metering, and role-based access built in.',
    name: 'SaaS Development', crumbs: [SERVICES], service: 'SaaS Development',
  },
  {
    path: '/legacy-modernization',
    title: 'Legacy System Modernization Services | AE Seller',
    description: 'Modernize legacy systems into maintainable platforms in phases - no risky rip-and-replace and no disruption to the business that depends on them.',
    name: 'Legacy Modernization', crumbs: [SERVICES], service: 'Legacy System Modernization',
  },
  {
    path: '/api-integration',
    title: 'API Development & Integration Services | AE Seller',
    description: 'API development and integration services: connect third-party SaaS tools or build the public API for your own platform - reliable, secure, and documented.',
    name: 'API Integration', crumbs: [SERVICES], service: 'API Development and Integration',
  },

  // Web
  {
    path: '/react-nextjs-development',
    title: 'React & Next.js Development Services | AE Seller',
    description: 'Fast, SEO-friendly web applications built with React and Next.js - from marketing sites with strong Core Web Vitals to complex authenticated dashboards.',
    name: 'React / Next.js', crumbs: [SERVICES], service: 'React and Next.js Web Development',
  },
  {
    path: '/nodejs-development',
    title: 'Node.js Development Services | AE Seller',
    description: 'Node.js back-end development: REST and GraphQL APIs, event-driven services, and the infrastructure to keep them fast and reliable in production.',
    name: 'Node.js Back-End', crumbs: [SERVICES], service: 'Node.js Back-End Development',
  },
  {
    path: '/ecommerce-development',
    title: 'E-Commerce Development Services | AE Seller',
    description: 'E-commerce development from headless storefronts to full platform migrations - built for conversion, page speed, and reliable checkout.',
    name: 'E-Commerce', crumbs: [SERVICES], service: 'E-Commerce Development',
  },
  {
    path: '/cms-solutions',
    title: 'CMS Development Services | AE Seller',
    description: 'CMS development and integration that lets marketing teams publish without waiting on engineering - without sacrificing performance or design control.',
    name: 'CMS Solutions', crumbs: [SERVICES], service: 'CMS Development',
  },

  // AI
  {
    path: '/machine-learning',
    title: 'Machine Learning Development Services | AE Seller',
    description: 'Machine learning models designed, trained, and deployed to solve a specific business problem - production systems, not notebook demos.',
    name: 'Machine Learning', crumbs: [SERVICES], service: 'Machine Learning Development',
  },
  {
    path: '/computer-vision',
    title: 'Computer Vision Development Services | AE Seller',
    description: 'Computer vision systems that detect, classify, and track objects in real time - from production-line quality control to automated document processing.',
    name: 'Computer Vision', crumbs: [SERVICES], service: 'Computer Vision Development',
  },
  {
    path: '/nlp-solutions',
    title: 'NLP Development Services | AE Seller',
    description: 'Natural language processing systems that read, classify, summarize, and respond to text and speech - for document intelligence and intent-aware search.',
    name: 'NLP Solutions', crumbs: [SERVICES], service: 'Natural Language Processing Development',
  },
  {
    path: '/ai-consulting',
    title: 'AI Consulting Services | AE Seller',
    description: 'AI consulting that identifies which AI use cases are worth building - and which are not - so your investment lands on measurable business outcomes.',
    name: 'AI Consulting', crumbs: [SERVICES], service: 'AI Consulting',
  },
  {
    path: '/ai-agents-chatbots',
    title: 'AI Agent & Chatbot Development | AE Seller',
    description: 'Custom AI agents and chatbots trained on your business - answering customers, qualifying leads, and automating back-office tasks around the clock.',
    name: 'AI Agents & Chatbots', crumbs: [SERVICES], service: 'AI Agent and Chatbot Development',
  },
  {
    path: '/workflow-automation',
    title: 'AI Workflow Automation Services | AE Seller',
    description: 'Workflow automation that connects your tools and removes busywork - lead routing, order processing, reporting, and data entry with AI decision steps.',
    name: 'Workflow Automation', crumbs: [SERVICES], service: 'Workflow Automation',
  },
  {
    path: '/telegram-discord-bots',
    title: 'Telegram & Discord Bot Development | AE Seller',
    description: 'Custom Telegram and Discord bots that moderate, engage, and monetize your community - AI assistants, verification flows, alerts, and gated access.',
    name: 'Telegram / Discord Bots', crumbs: [SERVICES], service: 'Telegram and Discord Bot Development',
  },
  {
    path: '/crypto-trading-bots',
    title: 'Crypto Trading Bot Development | AE Seller',
    description: 'Custom crypto trading bots that execute your strategy on centralized and decentralized exchanges, with backtesting, risk controls, and live monitoring.',
    name: 'Crypto Trading Bots', crumbs: [SERVICES], service: 'Crypto Trading Bot Development',
  },
  {
    path: '/mining-node-tools',
    title: 'Blockchain Node & Mining Tools | AE Seller',
    description: 'Tooling for blockchain infrastructure: automated node deployment, validator monitoring, and mining fleet dashboards with alerts before issues cause downtime.',
    name: 'Mining & Node Tools', crumbs: [SERVICES], service: 'Blockchain Node and Mining Tools Development',
  },

  // Blockchain
  {
    path: '/smart-contracts',
    title: 'Smart Contract Development Services | AE Seller',
    description: 'Smart contracts designed, reviewed, and deployed with a security-first process - because a production bug in a contract can mean lost funds.',
    name: 'Smart Contracts', crumbs: [SERVICES], service: 'Smart Contract Development',
  },
  {
    path: '/defi-platforms',
    title: 'DeFi Platform Development | AE Seller',
    description: 'DeFi platform development - lending protocols, DEXs, and yield products engineered for security, liquidity, and a usable experience.',
    name: 'DeFi Platforms', crumbs: [SERVICES], service: 'DeFi Platform Development',
  },
  {
    path: '/nft-marketplace',
    title: 'NFT Marketplace Development | AE Seller',
    description: 'NFT marketplaces and minting platforms - from single-collection drop sites to multi-category marketplaces with royalties, auctions, and cross-chain support.',
    name: 'NFT Marketplace', crumbs: [SERVICES], service: 'NFT Marketplace Development',
  },
  {
    path: '/web3-integration',
    title: 'Web3 Integration Services | AE Seller',
    description: 'Add wallet connections, on-chain data, and token-gated features to an existing product without rebuilding your app from scratch.',
    name: 'Web3 Integration', crumbs: [SERVICES], service: 'Web3 Integration',
  },

  // Cloud
  {
    path: '/aws-solutions',
    title: 'AWS Consulting & Development Services | AE Seller',
    description: 'AWS infrastructure design, migration, and management for production workloads - right-sized from day one so you only pay for what you need.',
    name: 'AWS Solutions', crumbs: [SERVICES], service: 'AWS Cloud Services',
  },
  {
    path: '/azure-devops',
    title: 'Azure DevOps Services | AE Seller',
    description: 'Azure DevOps CI/CD pipelines that move code from commit to production safely, with automated testing, staged rollouts, and built-in rollback.',
    name: 'Azure DevOps', crumbs: [SERVICES], service: 'Azure DevOps Services',
  },
  {
    path: '/cloud-migration',
    title: 'Cloud Migration Services | AE Seller',
    description: 'Phased cloud migration of on-premise and legacy workloads to modern infrastructure - tested at every step so the business never feels the move.',
    name: 'Cloud Migration', crumbs: [SERVICES], service: 'Cloud Migration',
  },
  {
    path: '/devops-cicd',
    title: 'DevOps & CI/CD Pipeline Services | AE Seller',
    description: 'DevOps and CI/CD pipeline services so your team can ship several times a day - automated tests, staged deploys, and rollback on every release.',
    name: 'DevOps CI/CD', crumbs: [SERVICES], service: 'DevOps and CI/CD',
  },

  // Games
  {
    path: '/unity-3d-games',
    title: 'Unity Game Development Services | AE Seller',
    description: 'Unity game development for mobile, PC, and console - from prototype to live, monetized title, tuned to hit frame-rate targets on real hardware.',
    name: 'Unity 3D Games', crumbs: [SERVICES], service: 'Unity Game Development',
  },
  {
    path: '/unreal-engine',
    title: 'Unreal Engine Development Services | AE Seller',
    description: 'High-fidelity games and interactive experiences built in Unreal Engine for teams that need console-quality visuals on a realistic budget.',
    name: 'Unreal Engine', crumbs: [SERVICES], service: 'Unreal Engine Development',
  },
  {
    path: '/ar-vr-games',
    title: 'AR & VR Game Development | AE Seller',
    description: 'AR and VR games and experiences for Quest, Vision Pro, and mobile AR - designed around comfort and presence rather than ported flat-screen games.',
    name: 'AR/VR Games', crumbs: [SERVICES], service: 'AR and VR Game Development',
  },
  {
    path: '/casual-mobile-games',
    title: 'Casual Mobile Game Development | AE Seller',
    description: 'Casual mobile games engineered for retention - fast load times, tight core loops, and monetization that does not ruin the fun.',
    name: 'Casual Mobile Games', crumbs: [SERVICES], service: 'Casual Mobile Game Development',
  },

  // Marketing
  {
    path: '/seo-content',
    title: 'SEO & Content Marketing Services | AE Seller',
    description: 'SEO and content marketing that compounds - technical SEO, content that answers real search intent, and the link-building to support it.',
    name: 'SEO / Content', crumbs: [SERVICES], service: 'SEO and Content Marketing',
  },
  {
    path: '/ppc-advertising',
    title: 'PPC Advertising Management | AE Seller',
    description: 'Paid search and social campaigns managed around cost per qualified lead - and how to bring that number down every month.',
    name: 'PPC Advertising', crumbs: [SERVICES], service: 'PPC Advertising Management',
  },
  {
    path: '/social-media-marketing',
    title: 'Social Media Marketing Services | AE Seller',
    description: 'Social media content planned, created, and scheduled to grow a real audience - tied to business goals, not just filling a content calendar.',
    name: 'Social Media', crumbs: [SERVICES], service: 'Social Media Marketing',
  },
  {
    path: '/brand-strategy',
    title: 'Brand Strategy Services | AE Seller',
    description: 'Brand strategy: positioning, voice, and visual identity that make your brand recognizable and consistent everywhere customers meet you.',
    name: 'Brand Strategy', crumbs: [SERVICES], service: 'Brand Strategy',
  },

  // Company
  {
    path: '/about',
    title: 'About AE Seller | Software & Automation Company',
    description: 'AE Seller builds software, bots, and automation that help businesses run smoother and grow faster, with a team across Karachi, Pakistan and Coquitlam, Canada.',
    name: 'About Us', type: 'AboutPage',
  },
  {
    path: '/contact',
    title: 'Contact AE Seller | Get a Software Development Quote',
    description: 'Contact AE Seller to discuss a software, web, mobile, or AI automation project. Email info@aeseller.com or send a message - we reply within one business day.',
    name: 'Contact', type: 'ContactPage',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | AE Seller',
    description: 'How AE Seller collects, uses, and protects information submitted through this website, and the choices you have.',
    name: 'Privacy Policy',
  },
  {
    path: '/terms',
    title: 'Terms of Service | AE Seller',
    description: 'The terms that apply when you use the AE Seller website or engage AE Seller for software development services.',
    name: 'Terms of Service',
  },
  {
    path: '/sitemap',
    title: 'Sitemap | AE Seller',
    description: 'A directory of every page on the AE Seller website - services, company information, insights, and legal pages.',
    name: 'Sitemap',
  },

  // Utility - not for search results
  {
    path: '/checkout',
    title: 'Checkout | AE Seller',
    description: 'Complete your AE Seller development package purchase.',
    name: 'Checkout', noindex: true, prerender: false,
  },
]

const INSIGHTS = { name: 'Insights', path: '/insights' }

const posts = blogPosts.map(post => ({
  path: `/insights/${post.slug}`,
  // Drop the brand suffix when it would push the title past ~60 chars.
  title: post.h.length <= 48 ? `${post.h} | AE Seller` : post.h,
  description: post.p,
  name: post.h,
  crumbs: [INSIGHTS],
  image: `https://images.unsplash.com/photo-${post.img}?w=1200&q=80`,
  article: post,
  updated: post.updated,
}))

export const routes = [...pages, ...posts]

export const NOT_FOUND = {
  path: '/404',
  title: 'Page Not Found | AE Seller',
  description: 'The page you are looking for does not exist or has been removed.',
  name: 'Page Not Found',
  noindex: true,
}

const byPath = new Map(routes.map(r => [r.path, r]))

export function normalizePath(pathname) {
  if (!pathname) return '/'
  const p = pathname.replace(/\/+$/, '')
  return p === '' ? '/' : p
}

export function findRoute(pathname) {
  return byPath.get(normalizePath(pathname)) || null
}
