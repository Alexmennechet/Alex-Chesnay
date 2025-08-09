import { useEffect, useState } from 'react';

// Load third-party scripts (e.g., analytics) after consent
function loadThirdPartyScripts() {
  if (typeof window === 'undefined' || window.thirdPartyScriptsLoaded) return;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (gaId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaId);
  }
  window.thirdPartyScriptsLoaded = true;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      loadThirdPartyScripts();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
    loadThirdPartyScripts();
  };

  const refuse = () => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('cookieConsent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
      <div className="actions">
        <button onClick={accept}>Accepter</button>
        <button onClick={refuse}>Refuser</button>
      </div>
      <style jsx>{`
        .cookie-banner {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          color: #fff;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
          z-index: 1000;
        }
        .actions button {
          margin: 0 0.5rem;
        }
      `}</style>
    </div>
  );
}
