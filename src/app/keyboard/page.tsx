"use client"
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleGeometryChange = (event: Event) => {
      const target = event.target as any; // Type assertion
      const { height } = target.boundingRect;
      setKeyboardHeight(height);
      setIsKeyboardVisible(height > 0);
    };

    if ('virtualKeyboard' in navigator) {
      (navigator as any).virtualKeyboard.addEventListener('geometrychange', handleGeometryChange);
    }

    // Cleanup event listener on component unmount
    return () => {
      if ('virtualKeyboard' in navigator) {
        (navigator as any).virtualKeyboard.removeEventListener('geometrychange', handleGeometryChange);
      }
    };
  }, []);

  const handleSubmit = () => {
    alert('Form submitted!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Virtual Keyboard Example</h1>
      <input
        type="text"
        placeholder="Type something..."
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      {isKeyboardVisible && (
        <button
          onClick={handleSubmit}
          className="fixed left-1/2 transform -translate-x-1/2 bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg"
          style={{
            bottom: keyboardHeight + 20, // Adjust the position above the keyboard
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default App;