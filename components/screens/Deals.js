import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StyleSheet,   
 StatusBar,
     Image
} from "react-native";
import { Container, Header,  DeckSwiper, Card, CardItem, Thumbnail,  Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../assets/deal1.jpg'),
  },
  {
    text: 'Card two',
    name: 'two',
    image: require('../../assets/deal2.jpg'),
  },

  {
    text: 'Card three',
    name: 'three',
    image: require('../../assets/car9.jpg'),
  },

  {
    text: 'Card four',
    name: 'four',
    image: require('../../assets/car8.jpg'),
  },
  {
    text: 'Card five',
    name: 'five',
    image: require('../../assets/deal3.jpg'),
  },
  {
    text: 'Card six',
    name: 'six',
    image: require('../../assets/blue-wash.jpg'),
  },

];

  export default class Deals extends Component {    constructor(props) {
    super(props)
    this.state = {
    }}    

componentWillMount() {
    this.startHeaderHeight = 60
    if (Platform.OS == 'android') {
        this.startHeaderHeight = 80 + StatusBar.currentHeight
    }
}



render() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ height: this.startHeaderHeight, backgroundColor: '#0B3364', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                    <View style={{
                         marginHorizontal: 20,
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: 'black',
                        shadowOpacity: 0.2,
                        elevation: 1,
                        marginTop: Platform.OS == 'android' ? 30 : null
                    }}>
                        <Text style={{color:'white',fontSize:22,fontWeight:'600',paddingLeft:10,textAlign:'justify',paddingTop:10}}>Hot Deals🔥</Text>
                        </View>
                </View>


          <Container>
            <View>
              <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={require('../../assets/mock.jpg')} />
                        <Body>
                          <Text style={{fontSize:20,fontWeight:'600'}}>HOT DEALS🔥</Text>
                          <Text note style={{fontSize:16,fontWeight:'600'}}>FreedomAuto</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Icon name="heart" style={{ color: '#0B3364' }} />
                      <Text style={{fontSize:16,fontWeight:'600'}}>Comming Soon!!</Text>
                    </CardItem>
                  </Card>
                }
              />
            </View>
          </Container>
          </View>
          </SafeAreaView>
        );
      }
  }

