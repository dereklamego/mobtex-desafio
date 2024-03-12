import { Alert, Box} from '@mui/material';
import styled from 'styled-components';


export const Item = styled(Box)`
  background: #fff;
  position: relative;
  overflow: hidden;
  width: 90%; 
  padding-top: 90%; 
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border-radius: 10px; 

  &:hover {
    transform: scale(1.1);
  }

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

`;

export const ImageName = styled.p`
  position: absolute;
  margin:0;
  bottom: 5%; 
  left: 2%; 
  color: white;
  z-index: 1; 
  font-size: max(1.5vw, 1.9rem); 
`;

export const ImageDescription = styled.p`
  position: absolute;
  margin:0;
  bottom: 0px; 
  left: 2%;
  color: white;
  z-index: 1; 
  font-size: max(1vw, 1rem);
`;

export const ErrorMessage = styled(Alert)`
  align-items:center;
  justify-content:center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  height:100%
`;




