import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet';
import { useRouter } from 'next/dist/client/router';

import * as S from './styles';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

const Map = ({ places }: MapProps) => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <MapContainer
        center={[0, 0]}
        minZoom={3}
        zoom={3}
        maxBounds={[
          [-180, 180], // Leste a Oeste (Limite máximo)
          [180, -180], // Norte ao Sull (Limite máximo)
        ]}
        style={{ height: '100%', width: '100%' }}
      >
        <MapConsumer>
          {map => {
            const desktopScreenWidth = 768;
            const windowWidth =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;

            if (windowWidth < desktopScreenWidth) {
              map.setMinZoom(2);
            }
            return null;
          }}
        </MapConsumer>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places?.map(({ id, location, name, slug }) => {
          const { latitude, longitude } = location;

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => router.push(`/place/${slug}`),
              }}
            />
          );
        })}
      </MapContainer>
    </S.Wrapper>
  );
};

export default Map;
