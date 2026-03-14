import { useEffect } from "react";

const DEVFOLIO_SDK_SRC = "https://apply.devfolio.co/v2/sdk.js";
const DEVFOLIO_IFRAME_CLASS = "devfolio-button-iframe";

const useDevfolioSdk = () => {
  useEffect(() => {
    const isSecureContextForDevfolio =
      window.location.protocol === "https:" || window.location.hostname.endsWith("localhost");

    if (!isSecureContextForDevfolio) {
      // Devfolio SDK does not initialize over insecure URLs except localhost.
      console.warn("[Devfolio] Use https or localhost to test the Apply button.");
      return;
    }

    const placeholders = document.querySelectorAll(".apply-button");
    if (placeholders.length === 0) {
      return;
    }

    let canceled = false;

    const mountSdk = () => {
      const script = document.createElement("script");
      script.src = DEVFOLIO_SDK_SRC;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return script;
    };

    const script = mountSdk();
    script.addEventListener("load", () => {
      if (canceled) {
        return;
      }

      window.setTimeout(() => {
        if (canceled) {
          return;
        }

        const hasUninitializedButtons = document.querySelectorAll(".apply-button").length > 0;
        const hasDevfolioIframe = document.querySelectorAll(`.${DEVFOLIO_IFRAME_CLASS}`).length > 0;
        if (hasUninitializedButtons && !hasDevfolioIframe) {
          mountSdk();
        }
      }, 700);
    });

    return () => {
      canceled = true;
    };
  }, []);
};

export default useDevfolioSdk;
