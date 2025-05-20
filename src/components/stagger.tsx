import { useEffect } from "react";
import gsap from "gsap";

const Stagger = () => {

  useEffect(() => {

    const tl = gsap.timeline({ repeat: -1,
      repeatDelay: 2
    });

    tl.fromTo(".item",
      {
        opacity: 0,
      },
      {
        stagger: .3,
        opacity: 1,
        duration: .5,
        ease: "power1.out"
      }
    )

  }, []);

  return (
    <div className="relative w-full flex gap-2">
      <div className="w-[100px] h-[100px] bg-red-500 item"></div>
      <div className="w-[100px] h-[100px] bg-orange-500 item"></div>
      <div className="w-[100px] h-[100px] bg-amber-700 item"></div>
      <div className="w-[100px] h-[100px] bg-yellow-700 item"></div>
    </div>
  );
};

export default Stagger;