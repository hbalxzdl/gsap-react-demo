import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Ripple() {
  const zoomRef = useRef(null)

  useEffect(()=> {
    gsap.to(zoomRef.current, {
      scale: 1.5,             // 目标：放大到原始大小的1.5倍
      duration: 1,            // 动画持续时间：1秒 (从原始状态到放大状态)
      repeat: -1,             // 重复次数：-1 表示无限循环
      yoyo: true,             // 是否反向播放动画：true 表示会从放大状态再动画回原始状态
      ease: "power1.inOut",   // 缓动函数：使动画开始和结束时更平滑
    });
  }, [])

  return (
    <>
      <div ref={zoomRef} className="w-[60px] h-[60px] text-[50px] flex justify-center items-center">
        💗
      </div>
    </>
  )
}