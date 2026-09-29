import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Technologies from './pages/Technologies'
import Insights from './pages/Insights'
import BlogArticle from './pages/BlogArticle'
import Portfolio from './pages/Portfolio'
import MobileApp from './pages/MobileApp'
import Checkout from './pages/Checkout'
import CrossPlatformApps from './pages/CrossPlatformApps'
import ReactNativeApps from './pages/ReactNativeApps'
import EnterpriseSoftware from './pages/EnterpriseSoftware'
import SaaSDevelopment from './pages/SaaSDevelopment'
import LegacyModernization from './pages/LegacyModernization'
import ApiIntegration from './pages/ApiIntegration'
import ReactNextjsDevelopment from './pages/ReactNextjsDevelopment'
import NodeJsDevelopment from './pages/NodeJsDevelopment'
import EcommerceDevelopment from './pages/EcommerceDevelopment'
import CmsSolutions from './pages/CmsSolutions'
import MachineLearning from './pages/MachineLearning'
import ComputerVision from './pages/ComputerVision'
import NlpSolutions from './pages/NlpSolutions'
import AiConsulting from './pages/AiConsulting'
import AiAgentsChatbots from './pages/AiAgentsChatbots'
import WorkflowAutomation from './pages/WorkflowAutomation'
import TelegramDiscordBots from './pages/TelegramDiscordBots'
import CryptoTradingBots from './pages/CryptoTradingBots'
import MiningNodeTools from './pages/MiningNodeTools'
import SmartContracts from './pages/SmartContracts'
import DefiPlatforms from './pages/DefiPlatforms'
import NftMarketplace from './pages/NftMarketplace'
import Web3Integration from './pages/Web3Integration'
import AwsSolutions from './pages/AwsSolutions'
import AzureDevOps from './pages/AzureDevOps'
import CloudMigration from './pages/CloudMigration'
import DevOpsCiCd from './pages/DevOpsCiCd'
import Unity3dGames from './pages/Unity3dGames'
import UnrealEngine from './pages/UnrealEngine'
import ArVrGames from './pages/ArVrGames'
import CasualMobileGames from './pages/CasualMobileGames'
import SeoContent from './pages/SeoContent'
import PpcAdvertising from './pages/PpcAdvertising'
import SocialMediaMarketing from './pages/SocialMediaMarketing'
import BrandStrategy from './pages/BrandStrategy'
import Contact from './pages/Contact'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Sitemap from './pages/Sitemap'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<BlogArticle />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/mobile-app-development" element={<MobileApp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cross-platform-apps" element={<CrossPlatformApps />} />
        <Route path="/react-native-apps" element={<ReactNativeApps />} />
        <Route path="/enterprise-software" element={<EnterpriseSoftware />} />
        <Route path="/saas-development" element={<SaaSDevelopment />} />
        <Route path="/legacy-modernization" element={<LegacyModernization />} />
        <Route path="/api-integration" element={<ApiIntegration />} />
        <Route path="/react-nextjs-development" element={<ReactNextjsDevelopment />} />
        <Route path="/nodejs-development" element={<NodeJsDevelopment />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/cms-solutions" element={<CmsSolutions />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/computer-vision" element={<ComputerVision />} />
        <Route path="/nlp-solutions" element={<NlpSolutions />} />
        <Route path="/ai-consulting" element={<AiConsulting />} />
        <Route path="/ai-agents-chatbots" element={<AiAgentsChatbots />} />
        <Route path="/workflow-automation" element={<WorkflowAutomation />} />
        <Route path="/telegram-discord-bots" element={<TelegramDiscordBots />} />
        <Route path="/crypto-trading-bots" element={<CryptoTradingBots />} />
        <Route path="/mining-node-tools" element={<MiningNodeTools />} />
        <Route path="/smart-contracts" element={<SmartContracts />} />
        <Route path="/defi-platforms" element={<DefiPlatforms />} />
        <Route path="/nft-marketplace" element={<NftMarketplace />} />
        <Route path="/web3-integration" element={<Web3Integration />} />
        <Route path="/aws-solutions" element={<AwsSolutions />} />
        <Route path="/azure-devops" element={<AzureDevOps />} />
        <Route path="/cloud-migration" element={<CloudMigration />} />
        <Route path="/devops-cicd" element={<DevOpsCiCd />} />
        <Route path="/unity-3d-games" element={<Unity3dGames />} />
        <Route path="/unreal-engine" element={<UnrealEngine />} />
        <Route path="/ar-vr-games" element={<ArVrGames />} />
        <Route path="/casual-mobile-games" element={<CasualMobileGames />} />
        <Route path="/seo-content" element={<SeoContent />} />
        <Route path="/ppc-advertising" element={<PpcAdvertising />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/brand-strategy" element={<BrandStrategy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </Router>
  )
}
