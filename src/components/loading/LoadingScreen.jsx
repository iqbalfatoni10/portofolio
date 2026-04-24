import React from 'react';
import './loading.css';
import { Loader2 } from 'lucide-react'; // Menggunakan Lucide agar konsisten

const LoadingScreen = () => {
  return (
    <div className="preloader">
      <div className="preloader_content">
        {/* Logo Anda atau Inisial */}
        <div className="preloader_logo">
          IQ<span>.</span>
        </div>
        {/* Animasi Progress Bar Halus */}
        <div className="preloader_bar">
          <div className="preloader_progress"></div>
        </div>
        <p className="preloader_text">Hi, I'm Iqbal👋</p>
      </div>
    </div>
  );
};

export default LoadingScreen;