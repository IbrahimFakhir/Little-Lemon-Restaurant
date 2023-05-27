import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
    {
      fullName: 'Maria Sanchez',
      image: customer1Image,
      rating: [1, 1, 1, 1, 0.5],
      says: `Little Lemon is a culinary gem! The flavors are divine, capturing the essence of the Mediterranean. A must-visit for every food enthusiast!`,
    },
    {
      fullName: 'Antony Clifton',
      image: customer2Image,
      rating: [1, 1, 1, 1, 1],
      says: `I'm in love with Little Lemon! The food is exquisite, prepared with care and attention to detail. A delightful dining experience.`,
    },
    {
      fullName: 'Tamika Jackson',
      image: customer3Image,
      rating: [1, 1, 1, 1, 0.5],
      says: `Little Lemon is a hidden treasure. The dishes are bursting with flavor, and the cozy ambiance makes it the perfect spot for a memorable meal.`,
    },
    {
      fullName: 'Brandon Ming',
      image: customer4Image,
      rating: [1, 1, 1, 1],
      says: `I can't get enough of Little Lemon! The menu is a delightful blend of traditional and modern Mediterranean cuisine. It's a food lover's paradise!`,
    },
];

export default function Testimonials () {
    return (
        <section className='testimonials'>
            <div className='container grid'>
                <h2>What people say about us!</h2>
                {customers.map((customer, index) => 
                    <TestimonialCard key={index} customer={customer} />
                )}
            </div>
        </section>
    )
}