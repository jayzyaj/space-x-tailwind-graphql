import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LAUNCH_DETAIL_QUERY } from "../services/query";

const LaunchDetail = () => {
  const { launchID }: any = useParams();
  const { loading, error, data } = useQuery(LAUNCH_DETAIL_QUERY, {
    variables: { id: launchID },
  });
  
  if (loading) return (
    <div className="flex justify-center items-center flex-col">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black" />
      <p className="text-black text-lg font-black mt-3">Loading Launch Detail for {launchID}</p>
    </div>
  );

  if (error) return <p>Error :(</p>;

  const { launch } = data;
  const { mission_name, rocket, links } = launch;

  return (
    <div className="space-card cursor-pointer">
      <p className="text-black text-lg font-black cursor-text">
        {mission_name}
      </p>
      <p className="text-base font-extralight tracking-widest cursor-text">
        {rocket.rocket_name}
      </p>
      {!!links.flickr_images.length && <img alt="Ship" className="bg-gray-300 flex flex-shrink-0" src={links.flickr_images[0]} />}
    </div>
  );
};

export { LaunchDetail };
