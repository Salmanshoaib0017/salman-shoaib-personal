import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './pages/About'
import { ArticleDetail } from './pages/ArticleDetail'
import { Book } from './pages/Book'
import { Contact } from './pages/Contact'
import { Disclaimer } from './pages/Disclaimer'
import { Home } from './pages/Home'
import { Insights } from './pages/Insights'
import { Media } from './pages/Media'
import { NotFound } from './pages/NotFound'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="my-book" element={<Book />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<ArticleDetail />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
