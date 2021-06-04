import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  
  import {Button} from 'react-native-paper'

const SignUpScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <Button
                mode="contained"
                onPress={()=>navigation.navigate('ForgotPassWordScreen',{title:'Forgot Password'})}
                style={{width:200,alignSelf:'center',marginVertical:20}}
            >Forgot PassWord ?</Button>
            <Button
                mode="contained"
                onPress={()=>navigation.navigate('ForgotPassWordScreen',{title:'create an account'})}
                style={{width:200,alignSelf:'center',marginVertical:0}}
            >Register</Button>
        </View>
    )
}

const Styles = StyleSheet.create({})

export default SignUpScreen
