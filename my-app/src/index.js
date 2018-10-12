import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, Divider, Input, Label } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Container>
            <Menu.Item >About</Menu.Item>
            <Menu.Item >Store</Menu.Item>
            <Menu.Item position="right">Gmail</Menu.Item>
            <Menu.Item>Images</Menu.Item>
            <Menu.Item><Image className="ui waffle image"
                                     src="https://2.bp.blogspot.com/-Yh4cJxF681U/V94jdCUSaSI/AAAAAAAAQMs/yqNhebQnNEUel6ZVDtbxRN_4Ia3oTVStwCLcB/s1600/Google%2BWaffle%2BIcon.png"></Image></Menu.Item>
            <Menu.Item><Label size="big" color="blue">Sign in</Label></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    return (
        <Container className="midthing">
        <Grid centered verticalAlign="middle" >
            <Grid.Row>
              <Grid.Column >
                <Image centered size="medium"
                       src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></Image>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Input fluid icon='microphone'/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column textAlign="right">
                <Label size="medium" color="gray">Google Search</Label>
              </Grid.Column>
              <Grid.Column textAlign="left">
                <Label size="medium" color="gray">I'm Feeling Lucky</Label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                Google AI: <a href = "http://reddit.com/r/diabetes">Helping doctors prevent blindness in diabetics</a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>


    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));