import React, { Component } from 'react';
import { Container, Header, Content, Toast, Button, Text, Root } from 'native-base';
export default class ToastExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: this.props.visible
        }
      }
      static getDerivedStateFromProps(nextProps) {
        return {
          visible: nextProps.visible
        };
      }
  render() {
    return (
        <Root>
      {/* <Container> */}
        {/* <Header /> */}
        {/* <Content> */}

            {
                this.state.visible ? 

                Toast.show({
                    text: 'Wrong password!',
                    buttonText: 'Okay'
                  })
                  : 
                  null
            }

          {/* <Button onPress={
              
              ()=> }>

                
            
          </Button> */}
        {/* </Content> */}
      {/* </Container> */}
      </Root>
    );
  }
}