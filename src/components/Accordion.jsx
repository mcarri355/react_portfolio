import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./UseWindowSize";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[45vh] mx-auto shadow ">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>

        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "West-MEC",
    imgSrc:
      "https://www.west-mec.edu/cms/lib/AZ50010839/Centricity/Domain/10/SWC_F.png",
    description:
      "I Attend West-MEC as second year student in the coding program ",
  },
  {
    id: 2,
    title: "Coder",
    imgSrc:
      "https://images.prismic.io/turing/652ec6fefbd9a45bcec81a1f_Coder_a63a8aeefd.webp?auto=format%2Ccompress&fit=max&w=3840",
    description:
      "In the West-MEC program I have learned a number of languages that have helped me",
  },
  {
    id: 3,
    title: "SMHS",
    imgSrc:
      "https://www.peoriaunified.org/cms/lib/AZ01924969/Centricity/Domain/49/IMG_4261.jpg",
    description:
      "I attened Sunrise Mountain High School as a senior",
  },
  {
    id: 4,
    title: "Gamer",
    imgSrc:
      "https://store-images.s-microsoft.com/image/apps.30323.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.08703491-f5dc-4b00-bca6-486b7b293c17?q=90&w=480&h=270",
    description:
      "In my free time I like to play video games such as Elden Ring or Valorant",
  },
];
