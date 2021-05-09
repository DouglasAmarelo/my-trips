import { GetStaticProps } from 'next';

import HomeTemplate from '@templates/Home';
import { MapProps } from '@components/Map';

import client from '@graphql/client';
import { GET_PLACES } from '@graphql/queries';
import { GetPlacesQuery } from '@graphql/generated/graphql';

const Home = ({ places }: MapProps) => <HomeTemplate places={places} />;

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    revalidate: 3600,
    props: {
      places,
    },
  };
};

export default Home;
