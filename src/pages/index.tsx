import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@components/Map'), { ssr: false });

const Home = () => {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Petrópolis',
          slug: 'petropolis',
          location: {
            latitude: 35,
            longitude: -12,
          },
        },
        {
          id: '2',
          name: 'Reykjavik',
          slug: 'reykjavik',
          location: {
            latitude: 45,
            longitude: -10,
          },
        },
      ]}
    />
  );
};

export default Home;
