import LinkWrapper from '@components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import * as S from './styles';

const About = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size="32" />
      </LinkWrapper>
      <S.Heading>About</S.Heading>

      <S.Body>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo
        rem perferendis modi odio repellat enim accusantium cumque, officiis
        quam explicabo tempora sit nemo necessitatibus officia molestiae,
        temporibus commodi delectus.
      </S.Body>
    </S.Content>
  );
};

export default About;
