import React, { useEffect, useState } from 'react';

const Confetti = ({ active }) => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (active) {
      const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
      const newConfetti = [];
      
      for (let i = 0; i < 50; i++) {
        newConfetti.push({
          id: i,
          x: Math.random() * 100,
          y: -10,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          size: Math.random() * 8 + 4,
          speed: Math.random() * 3 + 1,
        });
      }
      
      setConfetti(newConfetti);
      
      const interval = setInterval(() => {
        setConfetti(prev => 
          prev.map(item => ({
            ...item,
            y: item.y + item.speed,
            rotation: item.rotation + 5,
          })).filter(item => item.y < 110)
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map(item => (
        <div
          key={item.id}
          className="absolute w-2 h-2 rounded-sm opacity-80"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            backgroundColor: item.color,
            transform: `rotate(${item.rotation}deg)`,
            width: `${item.size}px`,
            height: `${item.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
