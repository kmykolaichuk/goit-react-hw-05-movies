import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  -webkit-box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);
  margin-top: 20px;
`;

export const Poster = styled.img`
  height: 300px;
  margin-right: 20px;
`;

export const GenreWrapper = styled.div`
  display: flex;
  p:not(:last-child) {
    margin-right: 20px;
  }
  p {
    margin-top: 0px;
  }
`;

export const InfoWrapper = styled.div`
  -webkit-box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 5px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const CastLink = styled(NavLink)`
  margin-right: 20px;
`;
