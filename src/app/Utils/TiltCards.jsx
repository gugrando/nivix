import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Button from "./Button";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({founderName, founderText, founderImg}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div whileInView={{ opacity: 1}} initial={{ opacity: 0 }} className="mt-8 relative h-[32rem] w-[25rem] rounded-xl bg-gradient-to-br from-black to-neutral-800 shadow-lg" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transformStyle: "preserve-3d", transform, }} >
      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} className="inset-4 absolute flex flex-col items-center justify-start rounded-xl bg--700 shadow-lg" style={{transform: "translateZ(75px)", transformStyle: "preserve-3d",}} >
        <motion.img className="h-full w-full bg-black rounded-lg" src={founderImg}/>
        <motion.h1 className=" text-3xl font-bold text-white">
           {founderName}
        </motion.h1>
        <motion.p className="text-lg text-white">
            {founderText}
        </motion.p>
        <Button text={"Conheça mais"} className="mt-2 bg-blue-600 text-white font-bold px-8 py-2 rounded-full" whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}/>
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;