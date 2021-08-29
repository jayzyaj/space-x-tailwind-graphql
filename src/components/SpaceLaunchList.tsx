import React from 'react';
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from '../services/query';
import './styles/space-launch-list.css';

function SpaceLaunchList() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: { limit: 10 },
  });

  if (loading) return (
    <div className="flex justify-center items-center flex-col">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
      <p className="text-black text-lg font-black mt-3">Loading Space-X Launches</p>
    </div>
  );
  if (error) return <p>Error :(</p>;

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
      {data.launchesPast.map(({ id, mission_name, rocket, links }: any) => (
        <div className="space-card hover-ease-scale" key={id}>
          <p className="text-black text-lg font-black">
            {mission_name}
          </p>
          <p className="text-base font-extralight tracking-widest">
            {rocket.rocket_name}
          </p>
          {!!links.flickr_images.length && <img alt="Ship" className="bg-gray-300 flex flex-shrink-0" src={links.flickr_images[0]} />}
        </div>
      ))}
    </div>
  );
}

export { SpaceLaunchList };