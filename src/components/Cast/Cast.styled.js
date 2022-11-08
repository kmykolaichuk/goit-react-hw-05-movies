import styled from 'styled-components';

export const ActorImg = styled.img`
  height: 160px;
  width: 120px;
`;

export const ActorList = styled.ul`
  list-style: none;

  li:not(:last-child) {
    margin-right: 32px;
    align-items: center;
  }
`;
