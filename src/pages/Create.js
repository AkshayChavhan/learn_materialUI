import React from 'react';
import { ButtonGroup, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AddAlertSharpIcon from '@material-ui/icons/AddAlertSharp';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
import AccessibilityNewRoundedIcon from '@material-ui/icons/AccessibilityNewRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  title: {
    backgroundColor: 'red',
    color: "pink",
    "&:hover":{
      backgroundColor:"black",
      color:"white",
      fontSize:"larger"
    }
  },
  header:{
    color:"red",
    textDecoration:"underline"
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <>
      {/* styling in material UI */}
      <Button className={classes.title}>Styled Applied in MUI</Button>
      <h1 className={classes.header}>This is header with applied CSS properties</h1>

      {/* by default the typography will show as paragraph (verify from inspect) */}
      <div>
        <Typography>
          Create a new Note
        </Typography>
      </div>

      {/*To change default typography you can go with props VARIANT  */}
      <div>
        <Typography variant="h1"
          component="h6"
          color="primary"
          align="center"
          gutterBottom
        >
          h1 primary center gutterBottom
        </Typography>
      </div>

      <div>
        <Typography variant="subtitle1">
          subtitle1
        </Typography>
      </div>

      <div>
        <Typography variant="subtitle2">
          subtitle2
        </Typography>
      </div>

      <div>
        <Typography variant="body1">
          body1
        </Typography>
      </div>

      <div>
        <Typography variant="body2">
          body2
        </Typography>
      </div>

      <div>
        <Typography variant="caption">
          caption
        </Typography>
      </div>

      <div>
        <Typography variant="button">
          button
        </Typography>
      </div>

      <div>
        <Typography variant="overline">
          overline
        </Typography>
      </div>

      <div>
        <Typography variant="srOnly">
          srOnly
        </Typography>
      </div>

      <div>
        <Button variant="contained">This is Buttons</Button>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
      <div>
        <ButtonGroup color="secondary" variant="contained"
          style={{
            bottonPadding: "10px",
            margin: "10px"
          }}>
          <Button>ButtonGroup One</Button>
          <Button>ButtonGroup Two</Button>
          <Button>ButtonGroup Three</Button>
        </ButtonGroup>
        <Button style={{ display: "block" }}
          variant="contained"
          color="primary"
          type="submit"
        // disableElevation       //(this is for disabling dropshadow)
        >
          Submit
        </Button>
      </div>
      <Container
        maxWidth="lg">
        <span style={{ color: "red" }}>lg</span>lg lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI
        as a dependency. To do this run npm install @material-ui/core
      </Container>
      <Container
        fixed
        component="div"
        maxWidth="md">
        <span style={{ color: "red" }}>md</span> lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI
        as a dependency. To do this run npm install @material-ui/core
      </Container>
      <Container
        fixed
        component="div"
        maxWidth="xl">
        <span style={{ color: "red" }}>xl</span>xl lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI
        as a dependency. To do this run npm install @material-ui/core
      </Container>
      <Container
        fixed
        component="div"
        maxWidth="xs">
        <span style={{ color: "red" }}>xs</span> lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI
        as a dependency. To do this run npm install @material-ui/core
      </Container>
      <Container
        fixed
        component="div"
        maxWidth="false">
        <span style={{ color: "red" }}>false</span> lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI lorem dskdewo enewnn Download the code & run npm install to install
        dependencies before starting the app.
        You'll also need to install Material UI
        as a dependency. To do this run npm install @material-ui/core
      </Container>
      <div>
        <AddAlertSharpIcon style={{ fontSize: "100px" }} />
        <AddAlertSharpIcon />
        <AccessibilityIcon />
        <AccessibilityNewOutlinedIcon />
        <AccessibilityNewRoundedIcon />
      </div>
      <Button
        startIcon={<SendRoundedIcon />}
        endIcon={<PrintRoundedIcon />}
        variant="contained"
        color="secondary"
        onClick={() => { alert("Message is send to the person") }}>SEND</Button>


    </>
  )
}




