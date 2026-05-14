import React from 'react';
import { FiExternalLink, FiCalendar, FiType } from 'react-icons/fi';

const MediaCard = ({ item }) => {
  const badgeClass =
    item.type === 'News Article'
      ? 'bg-[#1C2833]/5 text-[#1C2833] border-[#AAB7B8]/20'
      : item.type === 'Interview'
        ? 'bg-[#2E4053]/5 text-[#2E4053] border-[#AAB7B8]/20'
        : 'bg-[#AAB7B8]/10 text-[#2E4053] border-[#AAB7B8]/30';

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-[#1C2833]/5 border border-[#AAB7B8]/10 overflow-hidden hover:shadow-2xl hover:shadow-[#1C2833]/10 transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${badgeClass}`}
          >
            {item.type}
          </span>
          <span className="text-xs text-[#2E4053]/60 flex items-center">
            <FiCalendar className="mr-1" /> {item.date}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-[#1C2833] mb-3">{item.title}</h3>
        <p className="text-sm text-[#2E4053]/70 mb-5 leading-relaxed font-light">{item.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#2E4053]/60 flex items-center">
            <FiType className="mr-1" /> {item.source}
          </span>
          <a
            href={item.link}
            className="text-sm text-[#2E4053] hover:text-[#1C2833] inline-flex items-center font-semibold transition-colors"
          >
            Read More <FiExternalLink className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
