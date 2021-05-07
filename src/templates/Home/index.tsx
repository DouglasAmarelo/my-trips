import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from '@components/LinkWrapper';
import { MapProps } from '@components/Map';

const Map = dynamic(() => import('@components/Map'), { ssr: false });

const Home = ({ places }: MapProps) => {
  return (
    <>
      <Map places={places} />
      <LinkWrapper href="/about" aria-label="About">
        <InfoOutline size={32} />
      </LinkWrapper>
    </>
  );
};

export default Home;
