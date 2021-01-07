import React, { useEffect } from "react";
import Introduce from "./Introduce";
import HomeContent from "./HomeContent";
import Consulting from "./Consulting";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="HomePage">
      <Introduce />
      <HomeContent />
      <Consulting />
    </div>
  );
}
