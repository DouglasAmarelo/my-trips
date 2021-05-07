import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import PageTemplate, { PageProps } from '@templates/Pages';

import client from '@graphql/client';
import { GET_PAGES, GET_PAGE_BY_SLUG } from '@graphql/queries';
import { GetPageBySlugQuery, GetPagesQuery } from '@graphql/generated/graphql';

export default function Page({ pageData, heading, body }: PageProps) {
  const router = useRouter();

  // Aqui é possível retornar um Loading, enquanto a página está sendo criada.
  if (router.isFallback) return null;

  return <PageTemplate pageData={pageData} heading={heading} body={body} />;
}

export const getStaticPaths = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 3,
  });

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  // Caso não exista a página, retorna um 404
  if (!page) return { notFound: true };

  return {
    props: {
      pageData: {
        createdAt: page.createdAt,
        createdBy: page.createdBy,
        id: page.id,
        slug: page.slug,
      },
      heading: page.heading,
      body: page.body.html,
    },
  };
};

// getStaticPaths => Gera as URL's: /about | /trip/petropolis __ build time (estático)
// getStaticProps => Busca os dados da página (props) __ build time (estático)
// getServerSideProps => Busca os dados da página (props) __ runtime (toda requisição) __ bundle fica só no server
// getInitialProps => Busca os dados da página (props) __ runtime (toda requisição) __ bundle também vem para o client (hydrate)
