import React from 'react';
import { useQuery } from '@apollo/client';
import { LAUNCH_LIST_QUERY } from '../services/query';
import './styles/space-launch-list.css';
import { LaunchCard } from './LaunchCard';
import InfiniteScroll from 'react-infinite-scroll-component';

function LaunchList() {
  const { loading, error, data, fetchMore } = useQuery(LAUNCH_LIST_QUERY, {
    variables: { offset: 0, limit: 10 },
  });

  console.log('data:', data);

  if (loading) return (
    <div className="flex justify-center items-center flex-col">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black" />
      <p className="text-black text-lg font-black mt-3">Loading Space-X Launches</p>
    </div>
  );
  if (error) return <p>Error :(</p>;

  return (
    <InfiniteScroll
      dataLength={data.launchesPast.length}
      hasMore
      scrollThreshold={0.9}
      next={() => {
        fetchMore({
          variables: {
            offset: data.launchesPast.length,
            limit: 10,
          },
        });
        console.log(data);
      }}
      loader={(
        <div className="flex justify-center items-center flex-col">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black" />
          <p className="text-black text-lg font-black mt-3">Loading more...</p>
        </div>
      )}
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16">
        {data.launchesPast.map(({ id, mission_name, rocket, links }: any) => (
          <LaunchCard key={id} missionName={mission_name} rocket={rocket} links={links} />
        ))}
      </div>
    </InfiniteScroll>
  );
}

export { LaunchList };