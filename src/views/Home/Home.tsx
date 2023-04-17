import { HomeContainer, HomeWelcomeTextContainer } from 'views/Home/Home.styles'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeWelcomeTextContainer>
        <h1> Welcome to DataMelt! </h1>
        <p style={{marginTop: '10px'}}>
          DataMelt is an open-source computational environment for scientific computation, data analysis,
          and data visualization. With its wide range of mathematical and statistical functions,
          DataMelt is designed to help scientists, engineers, and researchers analyze data and solve complex
          mathematical problems.

          <br />
          <br />

          Explore our powerful and flexible tool today and see how it can help you unlock insights and make discoveries.
        </p>
        <Button variant={'contained'} style={{ textTransform: 'none', marginTop: '20px' }}
          onClick={() => navigate('install')}>
          Click to Install
        </Button>
      </HomeWelcomeTextContainer>
    </HomeContainer>
  )
}

export default Home
