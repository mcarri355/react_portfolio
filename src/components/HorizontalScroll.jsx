import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import '../Styles/css/scroll.css';

const HorizontalScroll = () => {
  return (
    <div className="">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["3%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group relative cardSize overflow-hidden bg-white border-2 border-black">
      <div className="absolute inset-0 z-0 scrollFlex flex flex-col justify-start items-center">
        <div className="p-4 bg-opacity-50 text-black text-lg text-center cardTitle">{card.title}</div>
        <div className="p-4 bg-opacity-50 text-black text-lg text-center cardDesc">{card.description}</div>
        {card.id === 7 && (
          <button onclick="window.location.href='/resume'" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white px-4 py-2 rounded">View Full Resume</button>
        )}
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Education",
    description: "Sunrise Mountain High School : 2020-Present,  West-Mec: 2022-Present, Arizona State University - Future" ,
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Volunteer",
    description: "Isaac E. Imes - Assisted with special events or programs Maintained clean, neat and operational facilities to serve program needs. Used strong interpersonal communication skills to convey information to others. Supported engaging, fun and smooth-running events by helping with organization and planning",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Work Experience",
    description: "Dairy Queen: June 2023 - November 2023, Pet Sitter: May 2018-March 2020",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Skills", 
    description: "Understands the process of decomposing a large programming problem into smaller, more manageable procedures. . Experience with creating and implementing basic algorithms. Knowledge of problem-solving and troubleshooting strategies applicable to software development. Teamwork and Collaboration",
    id: 4,  
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Hobbies",
    description: "Engaging in hobbies like basketball and gaming cultivates vital workplace skills. Basketball fosters teamwork, leadership, and quick decision-making, while gaming enhances strategic thinking and problem-solving. Both hobbies promote resilience and adaptability, valuable traits for professional success. Overall, they offer a diverse skill set beneficial for thriving in dynamic work environments.",
    id: 5,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Certificates & Awards",
    description: "Winning awards in FBLA and obtaining HTML and JavaScript certifications have bolstered my technical prowess and leadership abilities. Through FBLA, I refined skills in communication and project management, while certifications in web development enhanced my coding and problem-solving skills. These experiences underscore my commitment to excellence and readiness to excel in dynamic work environments.",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Resume",
    description: "Click The Button To View Full Resume",
    id: 7,
  },
];

export default HorizontalScroll;
