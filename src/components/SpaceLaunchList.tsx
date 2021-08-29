import React from 'react';
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from '../services/query';

function SpaceLaunchList() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    variables: { limit: 10 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launchesPast.map(({ id, mission_name, rocket, links }: any) => (
    <div className="hover:border-blue-200 hover:bg-blue-50 hover:bg-opacity-50 hover:cur bg-white rounded-xl p-8 border-gray-100 border-opacity-90 border-2" key={id}>
      <p className="text-black text-lg font-black">
        {mission_name}
      </p>
      <p className="text-base font-extralight tracking-widest">
        {rocket.rocket_name}
      </p>
      {!!links.flickr_images.length && <img alt="Ship" className="bg-gray-300 flex flex-shrink-0" src={links.flickr_images[0]} />}
    </div>
  ));
}

export { SpaceLaunchList };