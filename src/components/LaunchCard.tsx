import React from "react";

interface Rocket {
  rocket_name: string;
}

interface RocketLink {
  flickr_images: string[];
}

export interface Launch {
  missionName: string;
  rocket: Rocket;
  links: RocketLink;
}

const LaunchCard = ({ missionName, rocket, links }: Launch) => (
  <div className="space-card hover-ease-scale cursor-pointer">
    <p className="text-black text-lg font-black cursor-text">
      {missionName}
    </p>
    <p className="text-base font-extralight tracking-widest cursor-text">
      {rocket.rocket_name}
    </p>
    {!!links.flickr_images.length && <img alt="Ship" className="bg-gray-300 flex flex-shrink-0" src={links.flickr_images[0]} />}
  </div>
);

export { LaunchCard };
