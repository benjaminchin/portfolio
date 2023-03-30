import React from "react";

interface Props {
  img?: string;
  video?: string;
  hasVideo: boolean;
  featured: boolean;
  liveDemo?: string;
  hasLiveDemo: boolean;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Card = ({
  img,
  video,
  hasVideo,
  featured,
  title,
  description,
  tags,
  liveDemo,
  hasLiveDemo,
  link,
}: Props) => {
  return (
    <div className="card max-w-sm bg-base-200 shadow-xl font-inter min-h-[32rem]">
      <figure className="pt-8">
        {hasVideo && (
          <iframe
            src={video}
            title="seveneightsix"            
          ></iframe>
        )}
        {!hasVideo && (
          <img
            src={`/assets/${img}`}
            className="w-[300px] h-[150px] object-cover"
            alt="img"
          />
        )}
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">
          <span className="text-gradient">{title}</span>
          {featured && <div className="badge badge-info">FEATURED</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags.map((item) => (
            <div className="badge badge-outline">{item}</div>
          ))}
        </div>
        <div className="card-actions">
          <a href={link}>
            <button className="btn btn-primary">LEARN MORE</button>
          </a>
          {hasLiveDemo && (
            <a href={liveDemo}>
              <button className="btn btn-secondary">LIVE DEMO</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
