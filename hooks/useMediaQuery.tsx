import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Initial check
    setMatches(mediaQuery.matches);

    // Event listener for changes
    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", updateMatches);

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
