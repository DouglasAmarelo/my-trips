import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import LinkWrapper from '@components/LinkWrapper';

import * as S from './styles';

export type PageProps = {
  pageData: {
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
  const date = new Date(pageData.createdAt);

  const { year, month, day } = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDay(),
  };

  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>

      {pageData && (
        <S.PageData>
          <li>
            <div>
              <img
                src={pageData.createdBy.picture}
                alt={pageData.createdBy.name}
                height={40}
              />
            </div>
            {pageData.createdBy.name}{' '}
          </li>
          <li>{`${day}/${month}/${year}`}</li>
        </S.PageData>
      )}
    </S.Content>
  );
};

export default Page;
