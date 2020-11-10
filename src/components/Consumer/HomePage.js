import React from "react";
import Introduce from "./Introduce";
import HomeContent from "./HomeContent";
import Consulting from "./Consulting";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Introduce />
      <HomeContent />
      <Consulting />
    </div>
  );
}
