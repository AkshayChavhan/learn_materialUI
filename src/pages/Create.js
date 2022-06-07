import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from "@material-ui/core"


const theme = createTheme({
  palette : {
    primary :{
       main :"#d500f9",
    }
  }
})

export default function Create() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Button variant="contained"
            color="secondary">
            Click Me (secondary)
          </Button>
          <br /><br />
          <Button variant="contained"
            color="primary">
            Click Me with style(primary)
          </Button>
        </Container>
      </ThemeProvider>
    </>
  )
}




