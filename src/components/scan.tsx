import { useEffect, useRef } from "react";
import gsap from "gsap";

const Scan = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const moveDistance = containerRef.current!.clientHeight - lineRef.current!.clientHeight;

    gsap.to(lineRef.current, {
      top: moveDistance, // 移动到扫描框底部
      ease: "none", // 匀速运动
      duration: 1, // 动画时长
      repeat: -1, // 无限循环
      yoyo: true // 来回运动
    });

  }, []);

  return (
    <div className="relative w-[100px] h-[100px] border-4 border-green-500 overflow-hidden shadow-lg shadow-green-500/50 rounded-lg" ref={containerRef}>
      <div
        className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-green-500 to-transparent shadow-md shadow-green-500/80" ref={lineRef}></div>
    </div>
  );
};

export default Scan;