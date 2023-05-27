import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './About.css';

export default function About () {
    return (
        <section className='container grid about'>
            <div className='about-description'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    The story of Little Lemon is a tale of a family's passion for Mediterranean cuisine. It began years ago in a picturesque village along the sun-kissed coast of the Mediterranean. The vibrant Rossi family, renowned for their hospitality and remarkable culinary talent, delighted guests with delicious dishes made from fresh ingredients sourced from nearby markets and farms.
                    Driven by their love for Mediterranean flavors, the Rossi family decided to share their culinary passion with the world. They opened their own restaurant, affectionately named 'Little Lemon,' as a tribute to the vibrant yellow lemon trees that adorned the village and symbolized the characteristic flavor of Mediterranean cuisine.
                    Little Lemon quickly gained fame for its extraordinary food and warm hospitality, becoming a gathering place for locals and visitors. Today, it stands as a popular culinary destination, offering authentic Mediterranean cuisine with a modern touch. Discover the story of Little Lemon and join us in celebrating the joy of food and community.
                </p>
            </div>
            <div className="about-chefs">
                <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
                <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
            </div>    
        </section>
    )
}