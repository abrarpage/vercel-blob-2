"use client";

import { useState, useEffect } from "react";
import useDetectKeyboardOpen from "use-detect-keyboard-open";

export default function App() {
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [bottomInset, setBottomInset] = useState(0);

  useEffect(() => {
    console.log("berjalan di luar");
    
    console.log("window.visualViewport",window.visualViewport);
    console.log("type of window.visualViewport",typeof window.visualViewport);
console.log("isKeyboardOpen && window.visualViewport",isKeyboardOpen && window.visualViewport);

    const updateBottomInset = () => {
      
      if (isKeyboardOpen && window.visualViewport) {
        console.log("berjalan");
        
        const viewportHeight = window.visualViewport.height;
        const screenHeight = window.innerHeight;
        setBottomInset(screenHeight - viewportHeight);
      } else {
        setBottomInset(0);
      }
    };

    window.visualViewport?.addEventListener("resize", updateBottomInset);
    return () => {
      window.visualViewport?.removeEventListener("resize", updateBottomInset);
    };
  }, [isKeyboardOpen]);
console.log("isKeyboardOpen",isKeyboardOpen);

  console.log("bottomInset",bottomInset);
  

  return (
    <div className="relative min-h-screen">
      <h2 className="text-center mt-4">
        {`Soft keyboard is ${isKeyboardOpen ? "open" : "close"}`}
      </h2>
      <div className="p-4">
        <input
          className="border w-full p-2"
          placeholder="Click here to open keyboard"
        />
      </div>
      {isKeyboardOpen && (
        <div
          className="fixed left-0 w-full bg-red-500"
          style={{ bottom: `${bottomInset}px` }}
        >
          <div className="w-full flex justify-center py-2">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
