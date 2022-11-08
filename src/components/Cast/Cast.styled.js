import styled from 'styled-components';

export const ActorImg = styled.img`
  height: 240px;
  width: 200px;
`;

export const ActorList = styled.ul`
  list-style: none;
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  li:not(:last-child) {
    margin-right: 32px;
    align-items: center;
  }
`;
