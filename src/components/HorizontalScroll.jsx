import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

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
    <div
      key={card.id}
      className="group relative h-[600px] w-[450px] overflow-hidden bg-neutral-200 border-2 border-black"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center p-4 bg-opacity-50">
          <p className="text-black text-lg">{card.title}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50">
          <p className="text-black text-lg">{card.description}</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30%", // Adjust this value to control the height of the image space
            top: "35%", // Adjust this value to position the image space vertically
          }}
          className="absolute left-0 right-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Education",
    description: "Description 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Volunteer",
    description: "Description 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Work Experience",
    description: "Description 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Skills", 
    description: "",
    id: 4,  
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Certications & Awards",
    description: "Description 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Hobbies",
    description: "Description 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Resume",
    description: "Description 7",
    id: 7,
  },
];

export default HorizontalScroll;
