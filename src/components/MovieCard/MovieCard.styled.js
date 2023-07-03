import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 40px;
`;

export const Img = styled.img`
  width: 400px;
  box-shadow: 3px 1px 13px grey;
`;

export const MovieInfo = styled.div`
  font-size: 24px;
  font-family: Arial;
  display: flex;
  flex-direction: column;
`;
export const Overview = styled.div`
  font-size: 14px;
  font-family: Arial;
  margin-top: 250px;
`;
export const AdditionalInfo = styled.div`
  font-size: 24px;
  font-family: Arial;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  display: block;
`;
export const Title = styled.span`
  font-size: 18px;
`;
