
"use client";

import React, { useRef, useEffect } from "react";
import { useState } from "react";

const Loader = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [initialAdjustment, setInitialAdjustment] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setInitialAdjustment((textRef.current as HTMLElement).offsetWidth);
    }
  });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i === 100) {
        setLoading(false);
      }
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
      i++;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const textAdjustment = initialAdjustment * (1 - loadingPercentage / 100);

  return (
    <div className="loading-page w-[100vw] h-[100vh] overflow-hidden relative z-10">
      <div className="bg-black h-full w-full z-[10]"></div>
      <div
        style={{ right: `${100 - loadingPercentage}%` }}
        className="bg-white h-full w-full absolute z-[30] top-0 overflow-hidden transition-all ease"
      >
        <div
          style={{ right: `-${textAdjustment}px` }}
          className="text-black z-[40] bottom-0 absolute text-[100px] px-5 inner-text"
        >
          {loadingPercentage}
        </div>
      </div>
      <div
        ref={textRef}
        style={{
          right: `calc(${100 - loadingPercentage}% - ${textAdjustment}px)`,
        }}
        className="text-white z-[20] bottom-0 absolute text-[100px] transition-all ease px-5 outer-text"
      >
        {loadingPercentage}
      </div>
    </div>
  );
};

export default Loader;