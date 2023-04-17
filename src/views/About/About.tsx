import { Typography } from '@mui/material'

function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '700px', marginTop: '20px' }}>
        <Typography variant='h4' gutterBottom>About Datamelt</Typography>
        <Typography variant='body1' paragraph>Datamelt is an open-source software package that provides a powerful
          computational environment for scientific computing, data analysis, and data visualization. It was created by a
          team of developers who were passionate about creating a tool that could help scientists, engineers, and
          researchers to solve complex mathematical problems and analyze data with ease.</Typography>
        <Typography variant='h5' gutterBottom>Development</Typography>
        <Typography variant='body1' paragraph>Datamelt was built using the Java programming language and several
          open-source libraries, including the JFreeChart library for data visualization and the Apache Commons Math
          library for mathematical functions. The development team aimed to create a platform that would provide a
          complete set of tools for numerical computation and data analysis, while also being easy to use and
          customizable.</Typography>
        <Typography variant='h5' gutterBottom>Features</Typography>
        <Typography variant='body1' paragraph>Datamelt includes a range of features to support scientific computing and
          data analysis. It provides a wide range of mathematical and statistical functions, including linear algebra,
          optimization, Fourier analysis, and data mining. In addition, it includes a number of data visualization
          tools, such as 2D and 3D plots, image processing, and animations.</Typography>
        <Typography variant='h5' gutterBottom>Open-Source</Typography>
        <Typography variant='body1' paragraph>Datamelt is released under the GNU General Public License (GPL), which
          means that it is free to use, modify, and distribute. This open-source approach has helped to build a
          community of developers and users who collaborate to improve the software and share their knowledge and
          expertise.</Typography>
        <Typography variant='h5' gutterBottom>Conclusion</Typography>
        <Typography variant='body1' paragraph>Datamelt is a powerful and flexible tool for scientific computing and data
          analysis. With its wide range of features and open-source approach, it has become a popular choice for
          scientists, engineers, and researchers who need a reliable and customizable platform for their
          work.</Typography>
      </div>
    </div>
  )
}

export default About
