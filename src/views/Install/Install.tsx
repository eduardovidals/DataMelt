import { Link, List, ListItem, ListItemText, Typography } from '@mui/material'

function Install() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
      <div style={{display: 'flex', flexDirection: 'column', maxWidth: '700px', marginTop: '20px'}}>
        <Typography variant='h4' gutterBottom>Installing Datamelt</Typography>
        <Typography variant='body1' paragraph>Datamelt is an open-source software package that can be installed on
          Windows, Mac OS X, and Linux operating systems. Here's how to install it:</Typography>
        <Typography variant='h5' gutterBottom>Prerequisites</Typography>
        <Typography variant='body1' paragraph>Before installing Datamelt, you need to make sure that Java is installed on
          your system. You can download Java from the Oracle website: <Link
            href='https://www.oracle.com/java/technologies/javase-downloads.html'>https://www.oracle.com/java/technologies/javase-downloads.html</Link></Typography>
        <Typography variant='h5' gutterBottom>Downloading Datamelt</Typography>
        <Typography variant='body1' paragraph>To download Datamelt, go to the official website: <Link
          href='https://datamelt.org/download.html'>https://datamelt.org/download.html</Link></Typography>
        <Typography variant='body1' paragraph>Choose the appropriate version for your operating system and download the
          file.</Typography>
        <Typography variant='h5' gutterBottom>Installing Datamelt</Typography>
        <Typography variant='body1' paragraph>The installation process varies depending on your operating
          system:</Typography>
        <Typography variant='h6' gutterBottom>Windows</Typography>
        <List>
          <ListItem>
            <ListItemText primary='Double-click the downloaded file to open the installer.' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Follow the instructions on the screen to complete the installation process.' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Once the installation is complete, you can launch Datamelt from the Start menu.' />
          </ListItem>
        </List>
        <Typography variant='h6' gutterBottom>Mac OS X</Typography>
        <List>
          <ListItem>
            <ListItemText primary='Double-click the downloaded file to open the disk image.' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Drag the Datamelt application to the Applications folder.' />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Once the installation is complete, you can launch Datamelt from the Applications folder.' />
          </ListItem>
        </List>
        <Typography variant='h6' gutterBottom>Linux</Typography>
        <List>
          <ListItem>
            <ListItemText primary='Extract the downloaded file to a directory of your choice.' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Open a terminal window and navigate to the directory where you extracted the files.' />
          </ListItem>
          <ListItem>
            <ListItemText primary="Run the 'start.sh' script to launch Datamelt." />
          </ListItem>
        </List>
        <Typography variant='h5' gutterBottom>Conclusion</Typography>
        <Typography variant='body1' paragraph>Once you have installed Datamelt, you can start using it for scientific
          computing, data analysis, and data visualization. If you encounter any issues during the installation process,
          please consult the documentation or reach out to the Datamelt community for support.</Typography>
      </div>
    </div>
  )
}

export default Install
