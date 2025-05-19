import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Ripple() {
  const rippleRef = useRef(null)

  const init  = {
    scale: 0,
    opacity: 0.7
  }

  const mid  = {
    scale: 1.5,
    opacity: 0.4
  }

  const final  = {
    scale: 2.5,
    opacity: 0
  }

  const durationStage1 = 1;       // 第一阶段扩散的持续时间 (秒)
  const durationPause = 0.2;    // 暂停的持续时间 (秒)
  const durationStage2 = 1;       // 第二阶段扩散的持续时间 (秒)
  const repeatCycleDelay = 0.4; // 每次完整动画循环结束后的延迟时间 (秒)

  useEffect(()=> {
    if (!rippleRef.current) return

    const tl = gsap.timeline({ repeat: -1, // 无限循环
      repeatDelay: repeatCycleDelay // 每次循环之间的延迟
    });

    tl.fromTo(rippleRef.current,
      { // 起始状态 (每次循环开始时重置)
        scale: init.scale,
        opacity: init.opacity
      },
      { // 第一阶段扩散结束状态
        scale: mid.scale,
        opacity: mid.opacity,
        duration: durationStage1,
        ease: "power1.out" // 缓动函数
      }
    )
      // 在此期间，波纹的 scale 和 opacity 保持 midScale 和 midOpacity
      .to(rippleRef.current,
        {
          duration: durationPause,

        },
      )
      // 从暂停状态到最终扩散并消失
      .to(rippleRef.current,
        { // 第二阶段扩散结束状态
          scale: final.scale,
          opacity: final.opacity,
          duration: durationStage2,
          ease: "power1.in" // 缓动函数，模拟逐渐消失的感觉
        }
      );

  }, [])
  return (
    <>
      <div className="w-[180px] h-[180px] relative flex justify-center items-center">
        <div className="w-[60px] h-[60px] bg-blue-500 rounded-full shadow-lg flex justify-center items-center"></div>
        <div ref={rippleRef} className="absolute left-1/2 top-1/2 w-[60px] h-[60px] bg-blue-500/70 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </>
  )
}