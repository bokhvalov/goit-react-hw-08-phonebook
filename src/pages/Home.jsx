import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container
      component="main"
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to Phonebook online</h1>
      <p> Online storage for your contacts</p>
      <Button
        sx={{
          marginTop: 2,
        }}
        variant="contained"
        component={Link}
        to="/contacts"
      >
        Start
      </Button>
    </Container>
  );
};
