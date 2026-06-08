import MediaCard from '../Components/MediaCard';
import { mediaLinks } from '../Data/content';
import PageHero from '../Components/PageHero';

const Media = () => {
  return (
    <div className="section-surface">
      <PageHero title="Media Coverage" subtitle="News, interviews, and articles featuring milestones and impact." />

      {/* Media Grid */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaLinks.map((item, index) => (
              <MediaCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
