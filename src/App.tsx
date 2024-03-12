import './style/global-styles.css'
import { Container} from '@mui/material';
import { StyledBox } from './components/StyledBox';
import { Title } from './components/Title/';
import { Gallery } from './components/Gallery';

export function App() {
  return (
    <Container maxWidth="lg" >
      <StyledBox>
        <Title text="MOBTEX - REACT CHALLENGE" />
        <Gallery />
      </StyledBox>
    </Container>

  );
}


