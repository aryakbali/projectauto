import React, { Component } from "react";
import {
    View,
    
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableHighlight,Alert
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Category from './category';
import Home from './home';
import { Container, Content, Card, CardItem, Text,Body,Header,Fab ,Button } from 'native-base';

const { height, width } = Dimensions.get('window')

class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false
        }}    

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
   
   

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: '#0B3364', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search for Services"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>

                            <View style={{ height: 250, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../../assets/car4.jpg')}
                                    />
                                    
                                    <Category imageUri={require('../../assets/car9.jpg')}
                                    />
                                    <Category imageUri={require('../../assets/car3.jpg')}
                                    />
                                     <Category imageUri={require('../../assets/car8.jpg')}
                                    />

                                     <Category imageUri={require('../../assets/car7.jpg')}
                                    />
                                    <Category imageUri={require('../../assets/carrr.jpg')}
                                    />
                                    <Category imageUri={require('../../assets/car5.jpg')}
                                    />

                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 21, fontWeight: '700' }}>
                                    INTRODUCING FREEDOMAUTO
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                Get instant access to reliable and affordable services

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../../assets/blue-wash.jpg')}
                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', textAlign:'center',paddingHorizontal: 20 }}>
                                OUR SERVICES
                            </Text>
                           

                            <View style={{ paddingHorizontal: 20, marginTop: 20,marginBottom:10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <TouchableHighlight
                         underlayColor={"grey"}
                         onPress={() => {
                            Alert.alert('Comming Soon!');
                          }}        >

                                <Home itemImage={require('../../assets/wash.png')}
                                width={width}
                                    name="CAR WASHING"
                                    rating={4}
                                />
                                </TouchableHighlight>

                                <TouchableHighlight
                         underlayColor={"grey"}
                         onPress={() => {
                            Alert.alert('Comming Soon!');
                          }}        >

                                <Home itemImage={require('../../assets/carpaint.png')}
                                width={width}
                                    name="CAR PAINTING"
                                    rating={4}
                                /></TouchableHighlight>

<TouchableHighlight
                         underlayColor={"grey"}
                         onPress={() => {
                            Alert.alert('Comming Soon!');
                          }}        >

                                <Home 
                                itemImage={require('../../assets/punch.png')}
                                width={width}
                                    name="PUNCTURE/CHANGE"
                                    rating={4}
                                /></TouchableHighlight>

<TouchableHighlight
                         underlayColor={"grey"}
                         onPress={() => {
                            Alert.alert('Comming Soon!');
                          }}        >

                                     <Home
                                     itemImage={require('../../assets/nut.jpg')}
                                      width={width}
                                    name="ROUTINE SERVICES"
                                    rating={4}
                                /></TouchableHighlight>

<TouchableHighlight
                         underlayColor={"grey"}
                         onPress={() => {
                            Alert.alert('Comming Soon!');
                          }}        >

                                 <Home itemImage={require('../../assets/deco.jpg')}
                                  width={width}
                                    name="CAR DECORATION"
                                    rating={4}
                                />
                                </TouchableHighlight>
<TouchableHighlight
                         underlayColor={"grey"}
                         onPress={() => {
                            Alert.alert('Comming Soon!');
                          }}        >

                                  <Home itemImage={require('../../assets/insure.png')} 
                                     width={width}
                                    name="INSURANCE"
                                    rating={4}
                                />
</TouchableHighlight>




                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', textAlign:'center',paddingHorizontal: 20 }}>
                                RECOMMENDED SERVICES
                            </Text>

                        <View style={{ marginTop: 30, paddingHorizontal: 20,paddingBottom: 10}}>
                    <Container>
        <Content>
        <Card  >
 
      <CardItem  bordered button onPress={() => alert("This Service is comming soon!!")} style={{ paddingBottom:20,borderWidth:2.5,padding:10}}>
        <Entypo name='tools' size={70} color='#0B3364' style={{ marginRight: 10 }} />
<Body>
        <Text style={{fontSize:18,fontWeight:'700',textAlign:'center'}}>Car Service and Repair@1999</Text>
        </Body>
      </CardItem>
      <CardItem bordered button onPress={() => alert("This Service is comming soon!!")} style={{ paddingBottom:20,borderWidth:2.5,padding:10}}>
      <Icon name='ios-settings' size={70} color='#0B3364' style={{ marginRight: 10 }} />

    <Body >
          <Text style={{fontSize:18,fontWeight:'700',textAlign:'center'}}>Puncture Service at your Doorstep @499 </Text>
          </Body>
      </CardItem>

      <CardItem  bordered button onPress={() => alert("This Service is comming soon!!")} style={{ paddingBottom:20,borderWidth:2.5,padding:10}}> 
      <FontAwesome name='paint-brush' color='#0B3364'  size={70} style={{ marginRight: 10 }} />
<Body>
        <Text style={{fontSize:18,fontWeight:'700',textAlign:'center'}}>Car Decoration and Painting  @3999</Text>
        </Body>
      </CardItem>
     < CardItem  bordered button onPress={() => alert("This Service is comming soon!!")} style={{ paddingBottom:20,borderWidth:2.5,padding:10}} >
     <Icon name="ios-card" size={70} color='#0B3364' style={{ marginRight: 10 }} />
<Body>
        <Text style={{fontSize:18,fontWeight:'700',textAlign:'center'}}>Premium Insurance Services @1999</Text>
        </Body>
      </CardItem>
      
     < CardItem  bordered button onPress={() => alert("This Service is comming soon!!")} style={{ paddingBottom:20,borderWidth:2.5,padding:10}} >
     <Entypo name="water" size={70} color='#0B3364' style={{ marginRight: 10 }} />
<Body>
        <Text style={{fontSize:18,fontWeight:'700',textAlign:'center'}}>Car Washing and Cleaning @499</Text>
        </Body>
      </CardItem>

    </Card>

    
          
        </Content>
        
      </Container>

      <View >
                    <Container style={{backgroundColor:'white'}}>
        <Content >
        <Card  >

        <CardItem header style={{paddingBottom:20,borderWidth:2.5,padding:10,borderColor:'#a8a4a3',backgroundColor:'#0B3364'}}>
            <Body>
              <Text style={{fontSize:22,fontWeight:'700',color:'white'}}>ABOUT US</Text>
              </Body>
            </CardItem>


        <CardItem footer bordered style={{paddingBottom:20,borderWidth:2.5,padding:10 ,borderColor:'#a8a4a3',backgroundColor:'#0B3364'}}>
        <Body>

              <Text style={{fontSize:17,color:'white'}} >
              It is such a busy world these days. We do not get time to pamper ourselves, forget about our equipments, furniture, vehicle etc. Freedom Auto is a one stop destination for your vehicle. We use the latest equipments and technology to pamper your car. Through our well trained experts we ensure the best solutions and services for your automobile. Your vehicle is in safe hands if it is with skks. We offer doorstep services i.e. you can call us anywhere in Delhi/NCR, you only have to provide us electricity and water and we will clean your car.
                  </Text>
              </Body>

            </CardItem>
            <CardItem bordered style={{paddingBottom:20,borderWidth:2.5,padding:10,borderColor:'#a8a4a3',backgroundColor:'#0B3364'}}>
              <Body>
                <Text style={{fontSize:15,textAlign:'center',color:'white'}}>
                © Copyrights 2019 FREEDOMAUTO | All Rights Reserved. Created by FREEDOMAUTO


                </Text>
              </Body>
            </CardItem>


    </Card>

    
          
        </Content>
        
      </Container>
</View>
</View>
</View>


      { <View style={{ flex: 1,paddingTop:20 }}>
          <Fab
            active={this.state.active}
            direction="left"
            containerStyle={{ }}
            style={{ backgroundColor: '#0B3364' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Entypo name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Entypo name="mail" />
            </Button>
          </Fab>
        </View>

 }

                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
