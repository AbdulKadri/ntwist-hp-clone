import "./Home.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import NewsSection from "../../components/NewsSection";

import homeImageIcons from "../../assets/images/home-image-icons.png";
import MillToMine from "../../assets/images/MillToMine.jpg";
import Sustainability from "../../assets/images/Sustainability.jpg";
import MineralProcessing from "../../assets/images/MineralProcessing.jpg";
import OilGas from "../../assets/images/OilGas.png";

const Home = () => {
  return (
    <div>
      <div className="heroSection">
        <Navbar />
        <section className="heroMainContent">
          <div className="leftSide">
            <h2>Data-powered solutions </h2>
            <h2>for Industrial Excellence</h2>
            <Button bgcolor="#007aff" text="Read More" />
          </div>
          <div className="rightSide">
            <img src={homeImageIcons} alt="Work Icons" />
          </div>
        </section>
      </div>

      <NewsSection
        title="Mine-To-Mill-To-Mine Optimization"
        text="NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
        imgSrc={MillToMine}
      />

      <NewsSection
        title="Sustainability"
        text="Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.

        With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics."
        imgSrc={Sustainability}
        reverse
      />

      <NewsSection
        title="Mineral Processing"
        text="NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."
        imgSrc={MineralProcessing}
      />

      <NewsSection
        title="Oil & Gas"
        text="Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 

        NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety."
        imgSrc={OilGas}
        reverse
      />

      <Footer />
    </div>
  );
};

export default Home;
