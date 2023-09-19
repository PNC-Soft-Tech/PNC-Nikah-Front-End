

import { useState } from 'react';
import {  Colors } from '../../constants/colors'; 
const Faq = () => {
  // Initialize state to keep track of the open/closed status of each FAQ item
  const [faqItems, setFaqItems] = useState([
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
    // Add more FAQ items as needed
  ]);

  // Function to toggle the open/closed state of an FAQ item
  const toggleItem = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 mb-8">
      <h1 className="text-3xl font-semibold mb-4" style={{color:Colors.titleText}}>Frequently Asked Questions</h1>
      <ul>
        {faqItems.map((item, index) => (
          <li key={index}   onClick={() => toggleItem(index)} className="border-b py-4 bg-gray-300 px-8 py-4 mb-4 rounded cursor-pointer" style={{borderBottomColor:`rgba(${Colors.titleText}, 0.7)`}} >
            <div className="flex justify-between items-center">
              <h2 onClick={() => toggleItem(index)} className="text-lg font-medium">{item.question}</h2>
              <button
                onClick={() => toggleItem(index)}
                className="text-gray-900 hover:text-gray-900 text-xl"
              >
                {item.isOpen ? '-' : '+'}
              </button>
            </div>
            {item.isOpen && <p className="mt-2">{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
