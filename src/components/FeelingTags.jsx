import React from 'react';

const FeelingTags = ({ onSelect }) => {
  const emotions = [
    'Happy', 'Sad', 'Anxious', 'Angry', 'Excited',
    'Stressed', 'Calm', 'Confused', 'Hopeful', 'Lonely'
  ];

  return (
    <div className="hidden md:flex flex-wrap gap-2 p-2">
      {emotions.map((emotion) => (
        <button
          key={emotion}
          onClick={() => onSelect(emotion)}
          className="px-3 py-1.5 text-sm rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
        >
          {emotion}
        </button>
      ))}
    </div>
  );
};

export default FeelingTags; 