import { FiExternalLink, FiCalendar, FiType } from 'react-icons/fi';

const MediaCard = ({ item }) => {
  const badgeClass =
    item.type === 'News Article'
      ? 'bg-[#C79A43]/10 text-[#8A641F] border-[#C79A43]/25'
      : item.type === 'Interview'
        ? 'bg-[#1C2833]/6 text-[#1C2833] border-[#1C2833]/15'
        : 'bg-[#D9E5E4]/50 text-[#2E4053] border-[#AAB7B8]/30';

  return (
    <div className="premium-panel rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1C2833]/10 transition-all duration-300">
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
            className="text-sm text-[#8A641F] hover:text-[#1C2833] inline-flex items-center font-semibold transition-colors"
          >
            Read More <FiExternalLink className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
