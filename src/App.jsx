import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Views & Components
import SidebarComponent from './components/sidebar/SidebarComponent';
import AboutView from './views/about/AboutView';
import HomeView from './views/home/HomeView';
import PortofolioView from './views/portofolio/PortofolioView';
import ResumeView from './views/resume/ResumeView';
import AbilityView from './views/ability/AbilityView';
import ContactView from './views/contact/ContactView';

// Import Loading Component
import LoadingScreen from './components/loading/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading aset (2.5 detik)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="app-fade-in"> 
          <Container fluid className="p-0">
            <Row className="g-0">
              {/* Sidebar: Gunakan Col 1 atau Auto untuk kerapihan */}
              <Col md={1} sm={2} className="p-0">
                <SidebarComponent />
              </Col>
              
              {/* Main Content */}
              <Col md={11} sm={10} className="p-0">
                <Routes>
                  <Route path="/portofolio" element={<HomeView />} />
                  <Route path="about" element={<AboutView />} />
                  <Route path="porto" element={<PortofolioView />} />
                  <Route path="resume" element={<ResumeView />} />
                  <Route path="ability" element={<AbilityView />} />
                  <Route path="contact" element={<ContactView />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;