import { useEffect } from "react";

const DEVFOLIO_SDK_SRC = "https://apply.devfolio.co/v2/sdk.js";
const DEVFOLIO_BUTTON_SELECTOR = ".apply-button[data-hackathon-slug]";
const DEVFOLIO_API_PREFIX = "https://api.devfolio.co/api/hackathons/";

const useDevfolioSdk = (rerunKey = "") => {
  useEffect(() => {
    const isSecureContextForDevfolio =
      window.location.protocol === "https:" || window.location.hostname.endsWith("localhost");

    if (!isSecureContextForDevfolio) {
      // Devfolio SDK does not initialize over insecure URLs except localhost.
      console.warn("[Devfolio] Use https or localhost to test the Apply button.");
      return;
    }

    const placeholders = document.querySelectorAll(DEVFOLIO_BUTTON_SELECTOR);
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

    const onLoad = () => {
      if (canceled) {
        return;
      }

      window.setTimeout(() => {
        if (canceled) {
          return;
        }

        const hasUninitializedButtons = document.querySelectorAll(DEVFOLIO_BUTTON_SELECTOR).length > 0;
        if (hasUninitializedButtons) {
          mountSdk();
        }
      }, 700);
    };

    const firstSlug = placeholders[0].getAttribute("data-hackathon-slug")?.trim();
    if (!firstSlug) {
      return;
    }

    let script: HTMLScriptElement | null = null;

    const loadSdkIfActive = () => {
      if (canceled) {
        return;
      }

      script = mountSdk();
      script.addEventListener("load", onLoad);
    };

    void fetch(`${DEVFOLIO_API_PREFIX}${encodeURIComponent(firstSlug)}`)
      .then((response) => {
        if (!response.ok) {
          console.warn(
            `[Devfolio] Could not pre-validate hackathon slug "${firstSlug}" (status: ${response.status}). Continuing SDK initialization.`,
          );
        }

        loadSdkIfActive();
      })
      .catch(() => {
        // Fallback to normal SDK loading when validation request fails due network blockers.
        loadSdkIfActive();
      });

    return () => {
      canceled = true;
      script?.removeEventListener("load", onLoad);
    };
  }, [rerunKey]);
};

export default useDevfolioSdk;
