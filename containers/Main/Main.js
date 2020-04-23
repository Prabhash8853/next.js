import React, { Suspense } from "react";
import "./main.css";
// import LoadingCards from "../Pages/Homepage/Components/Cards/LoadingCards/LoadingCards";
import MagazineSection from "../Homepage/MagazineSection/MagazineSection";
import Homepage from "../Homepage/MiddleSection/Homepage";
import FeaturedSection from "../Homepage/FeaturedSection/FeaturedSection";

class Main extends React.Component {
  render() {
    return (
      <div className="main_section">
        <MagazineSection />

        <Homepage />

        <div className="featuredSec_container">
          <FeaturedSection />
        </div>
      </div>
    );
  }
}

export default Main;
