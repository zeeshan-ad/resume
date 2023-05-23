import React from 'react';
import Marquee from "react-fast-marquee";

const FlowingText = ({ text }) => {
  let repeatedText = [];
  for (let i = 0; i < 20; i++) {
    repeatedText.push(text);
  }
  return (
    <Marquee>
      <p className="text-2xl whitespace-nowrap text-indigo-700 uppercase font-bold pr-2">{repeatedText.join(' ')}</p>
    </Marquee>
  )
}

export default FlowingText