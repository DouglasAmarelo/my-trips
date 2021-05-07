import LinkWrapper from '@components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import Image from 'next/image';

import { NextSeo } from 'next-seo';

import * as S from './styles';

export type ImageProps = {
  fileName: string;
  url: string;
  height: number;
  width: number;
};

export type PlacesTemplateProps = {
  place: {
    id: number;
    slug: string;
    name: string;
    location: {
      latitude: number;
      longitude: number;
    };
    description: {
      html: string;
      text: string;
    };
    gallery: ImageProps[];
  };
};

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        openGraph={{
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />

      <S.Wrapper>
        <LinkWrapper href="/" aria-label="Voltar para o mapa">
          <CloseOutline size={32} />
        </LinkWrapper>
        <S.Container>
          <S.Heading>PlacesTemplate: {place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html }}
          />
          <S.Gallery>
            {place.gallery.map(({ fileName, url, height, width }, idx) => {
              return (
                <Image
                  key={`photo-${idx}`}
                  src={url}
                  alt={fileName}
                  height={height}
                  width={width}
                  quality={75}
                />
              );
            })}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default PlacesTemplate;
