import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';
import { ChatPage } from './pages/chat-page';
import { AuthProvider } from './contexts/auth-context';
import { ThemeProvider } from './contexts/theme-provider';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </Router>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;