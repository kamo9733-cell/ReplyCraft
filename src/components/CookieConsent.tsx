// src/components/CookieConsent.tsx
import React, { useEffect, useState } from "react";

type CookiePreference = {
  necessary: boolean;
  analytics: boolean;
};

const COOKIE_KEY = "cookiePreferences";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreference>({
    necessary: true,
    analytics: false,
  });
  const [showSettings, setShowSettings] = useState(false);

  // Load preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (saved) {
      const prefs: CookiePreference = JSON.parse(saved);
      setPreferences(prefs);
      if (prefs.analytics) initializeAnalytics();
    } else {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreference) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    if (prefs.analytics) initializeAnalytics();
  };

  const acceptAll = () => savePreferences({ necessary: true, analytics: true });
  const acceptNecessary = () => savePreferences({ necessary: true, analytics: false });
  const rejectAll = () => savePreferences({ necessary: true, analytics: false });

  const initializeAnalytics = () => {
    if ((window as any).gtagInitialized) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID";
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any) { (window as any).dataLayer.push(args); }
    (window as any).gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-BNJBLKRYEB");

    (window as any).gtagInitialized = true;
  };

  if (!showBanner && !showSettings) return null;

  return (
    <div className="fixed bottom-0 w-full z-50 bg-background/95 shadow-lg p-4 md:p-6">
      {!showSettings ? (
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <p className="text-sm md:text-base text-foreground max-w-2xl">
            We use cookies to improve your experience and analyze site traffic. You can accept all, accept necessary only, or reject optional cookies.
          </p>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={acceptAll}
              className="bg-primary text-background px-4 py-2 rounded hover:opacity-90 transition"
            >
              Accept All
            </button>
            <button
              onClick={acceptNecessary}
              className="bg-secondary/80 text-foreground px-4 py-2 rounded hover:opacity-90 transition"
            >
              Accept Necessary
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="bg-muted/80 text-foreground px-4 py-2 rounded hover:opacity-90 transition"
            >
              Manage Preferences
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 text-foreground">Cookie Preferences</h3>
            <p className="text-sm text-foreground mb-4">
              Select which cookies you allow. Necessary cookies are always enabled.
            </p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-foreground">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="accent-primary"
                />
                Necessary Cookies
              </label>
              <label className="flex items-center gap-2 text-foreground">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="accent-primary"
                />
                Analytics Cookies
              </label>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => savePreferences(preferences)}
              className="bg-primary text-background px-4 py-2 rounded hover:opacity-90 transition"
            >
              Save Preferences
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="bg-muted/80 text-foreground px-4 py-2 rounded hover:opacity-90 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
