import { useState, useEffect } from "react";

function getWindowWidth() {
  const width = window.innerWidth;
  return {
    width,
  };
}

export default function useWindowDimensions() {
  const [windowWidth, setWindowWidth] = useState(
    getWindowWidth()
  );
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(getWindowWidth());
    };
  }, []);

  return windowWidth;
}
