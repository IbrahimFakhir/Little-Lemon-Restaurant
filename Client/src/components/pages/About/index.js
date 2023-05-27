import marioAndAdrian1 from "./assets/mario-adrian-1.jpg"
import marioAndAdrian2 from "./assets/mario-adrian-2.jpg"

import "./index.css"

export default function About() {
    return (
        <>
            <div className="headline">
                <h2>About Little Lemon</h2>
            </div>
            <section className="story-beginning">
                <div className="container about-content">
                    <div className="about-text">
                        <p>
                            Welcome to Little Lemon - a place that tells the heartwarming story of a family and their culinary passion. Our restaurant emerged from a deep love for Mediterranean cuisine and the desire to present traditional recipes with a modern twist.
                        </p>
                        <p>
                            The story of Little Lemon begins many years ago in a small village along the sun-kissed coast of the Mediterranean. There, lived a vibrant family named Rossi, who were known for their hospitality and remarkable culinary talent. The Rossis took pride in delighting their guests with delicious dishes made from fresh ingredients carefully sourced from nearby markets and farms.
                        </p>
                    </div>
                    <div className="about-images">
                        <img
                            src={ marioAndAdrian1 }
                            alt="Mario and Adrian"
                        />
                    </div>
                </div>
            </section>
            <section className="story-middle">
                <div className="container about-content">
                    <div className="about-images">
                        <img
                            src={ marioAndAdrian2 }
                            alt="Mario and Adrian"
                        />
                    </div>
                    <div className="about-text">
                        <p>
                            It was Giovanna Rossi, the matriarch of the family, who had the idea of sharing their culinary passion with the world. With her expertise in Mediterranean cuisine and her distinctive sense of taste and aesthetics, she decided to open her own restaurant. She affectionately named it "Little Lemon" - an homage to the vibrant yellow lemon trees that adorned the village and symbolized the characteristic flavor of Mediterranean cuisine.
                        </p>
                        <p>
                            Giovanna and her family began building the restaurant with dedication and care. They renovated a charming old building, creating a welcoming atmosphere where guests could feel at home. The menu at Little Lemon was thoughtfully curated to encompass a wide range of Mediterranean flavors and aromas, from delicate seafood to hearty meat dishes and fresh vegetables.
                        </p>
                    </div>
                </div>
            </section>
            <section className="story-end">
                <div className="container about-content">
                    <div className="about-text">
                        <p>
                            Word quickly spread about the extraordinary food and warm hospitality found at Little Lemon. The restaurant became a gathering place for locals and visitors alike, drawn to the unique blend of traditional recipes and innovative creations. The love and passion of the Rossi family for their cuisine were reflected in every dish that came out of the kitchen at Little Lemon.
                        </p>
                        <p>
                            Today, many years after its humble beginnings, Little Lemon has become a popular culinary destination. Our family takes pride in indulging our guests with authentic Mediterranean cuisine that pays homage to our roots while offering a modern touch. We warmly invite you to discover the story of Little Lemon and join us in celebrating the joy of food and community.
                        </p>
                    </div>
                    <div className="about-images">
                        <img src={ marioAndAdrian1 } alt="Image 3" />
                    </div>
                </div>
            </section>
        </>
    )
}