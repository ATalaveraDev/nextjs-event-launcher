"use client";
import Image from 'next/image';
import { assets } from '@/utils/asset-utils';
import { type Framework, frameworks } from '@/utils/framework-utils';
import { useState, useEffect } from 'react';
import { cn } from '@/utils/tailwind-utils';

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex])
      currentIndex = (currentIndex + 1) % frameworks.length;
    }
    const intervalId = setInterval(rotateFrameworks, 2000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div 
      className={cn("fixed inset-0 transition-color delay-100 duration-700 opacity-25", 
      {
        "bg-purple-300": currentFramework === "qwik",
        "bg-sky-300": currentFramework === "safari",
        "bg-yellow-300": currentFramework === "chrome",
        "bg-teal-300": currentFramework === "tailwind",
        "bg-blue-300": currentFramework === "react",
        "bg-green-300": currentFramework === "vue",
        "bg-orange-400": currentFramework === "svelte",
        "bg-red-300": currentFramework === "mobile",
        "bg-neutral-300": currentFramework === "desktop"
      }  
      )}
      />
      <Image width={1200} height={1200} role="presentation" alt="gradient background" className="fixed inset-0 w-screen h-screen object-cover" src={assets.gradient} />
      <div className="fixed inset-0 opacity-30"
      style={{
        backgroundImage: `url(${assets.square})`,
        backgroundSize: "30px"
      }}
      />
    </main>
  )
}
