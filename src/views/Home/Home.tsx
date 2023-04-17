import { HomeContainer, HomeWelcomeTextContainer } from 'views/Home/Home.styles'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <HomeContainer>
      <HomeWelcomeTextContainer style={{ margin: '10px 20px 10px 20px' }}>
        <Typography variant='h4' gutterBottom>Welcome to DataMelt</Typography>
        <Typography variant='body1' paragraph>DataMelt is a powerful and flexible open-source software package for
          scientific computing, data analysis, and data visualization.</Typography>
        <Typography variant='body1' paragraph>To get started with DataMelt, click the button below! </Typography>
        <Button variant={'contained'} style={{ textTransform: 'none', marginTop: '10px' }}
                onClick={() => navigate('install')}>
          Click to Install
        </Button>
      </HomeWelcomeTextContainer>
    </HomeContainer>
  )
}

export default Home
