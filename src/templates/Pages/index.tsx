import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import LinkWrapper from '@components/LinkWrapper';

import * as S from './styles';

export type PageProps = {
  pageData?: {
    createdAt: string;
    createdBy: {
      name: string;
      picture: string;
    };
    id: string;
    slug: string;
  };
  heading: string;
  body: string;
};

const Page = ({ pageData, heading, body }: PageProps) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>{heading}</S.Heading>

      {pageData && (
        <ul>
          <li>createdAt: {pageData.createdAt}</li>
          <li>
            createdBy: {pageData.createdBy.name}{' '}
            <img
              src={pageData.createdBy.picture}
              alt={pageData.createdBy.name}
              height={40}
            />
          </li>
          <li>id: {pageData.id}</li>
          <li>slug: {pageData.slug}</li>
        </ul>
      )}

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  );
};

export default Page;
