import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StyleSheet,   
 StatusBar,

} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { Container, Header, Content, Button } from 'native-base';



class Saved extends Component {
    constructor(props) {
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
                            <Text style={{color:'white',fontSize:22,fontWeight:'600',paddingLeft:10,textAlign:'justify',paddingTop:10}}>My Booking</Text>
                            </View>
                    </View>

                        <View style={{marginTop: 60, paddingHorizontal: 110,paddingBottom: 10}}>
                        <AntIcon name="addfile" color="#0B3364" size={150} />

                        </View>
                        <View style={{marginTop: 30, paddingHorizontal: 30,paddingBottom: 20}}>

                            <Text style={{fontSize:18 ,textAlign:'center',fontWeight:'500',padding:10}}>Whoops, No projects!</Text>
                            <Text style={{fontSize:18,textAlign:'center',fontWeight:'500',padding:10}}>You can start a new project by placing a request now</Text>
                        </View>

                        <View style={{marginTop: 20,paddingHorizontal: 70, paddingBottom: 20}}>
                        <Button rounded dark style={{backgroundColor:'#0B3364'}}
                         onPress={() => this.props.navigation.navigate('Explore')}
                                            >
            <Text style={{color:'white',fontSize:18,fontWeight:'600',paddingHorizontal:50}}>Book Service</Text>
          </Button>
  
                        </View>

                    </View>
                    </SafeAreaView>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});