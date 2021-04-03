import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import LinkWrapper from '@components/LinkWrapper';

const Map = dynamic(() => import('@components/Map'), { ssr: false });

const Home = () => {
  return (
    <>
      <Map />
      <LinkWrapper href="/about" aria-label="About">
        <InfoOutline size={32} />
      </LinkWrapper>
    </>
  );
};

export default Home;
