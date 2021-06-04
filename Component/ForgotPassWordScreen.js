
import LinearGradient from 'react-native-linear-gradient';
import React,{useState} from 'react';
import {
    RadialGradient
  } from 'react-native-image-filter-kit'

  import {Button,Appbar,IconButton} from 'react-native-paper'
  import { mdiArrowLeft } from '@mdi/js';
  import {Icon} from 'react-native-elements'
  import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    Image
  } from 'react-native';
  const initialValue={
      mobile:"",
      otp:"",
  }
  const initialdetails={
      userName:"",
      mobile:"",
      email:"",
      otp:"",
  }

const ForgotPassWordScreen = (props) => {
    const [label,setLabel]=useState(true)
    const [otpLabel,setOtpLabel]=useState(true)
    const [usernamelabel,setUsernameLabel]=useState(true)
    const [emaillabel,setEmailLabel]=useState(true)
    const [otp,setOtp]=useState("")
    const [values,setValues]=useState(initialValue)
    const [details,setDetails]=useState(initialdetails)
    const [mobile,setMobile]=useState("")
    // const [border,setBorder] = useState(true)

    const onInputMobileClick=()=>{
        setLabel(false)
    }
    const onInputOtpClick=()=>{
        setOtpLabel(false)
    }
    const onInputUsernameClick=()=>{
        setUsernameLabel(false)
    }
    const onInputEmailClick=()=>{
        setEmailLabel(false)
    }
    const onMobileChange=(e)=>{
        setValues({
            ...values,
            mobile:e
        })
        setDetails({
            ...details,
            mobile:e
        })
        setMobile(e)
    }
    const onOtpChange=(e)=>{
        setValues({
            ...values,
            otp:e
        })
        setDetails({
            ...details,
            otp:e
        })
        setOtp(e)
    }
    const onUsernameChange=(e)=>{
        setDetails({
            ...details,
            userName:e
        })
    }
    const onEmailChange=(e)=>{
        setDetails({
            ...details,
            email:e
        })
    }
    const onBlurUsernameInput=()=>{
        if(details.userName === "")
        {
            setUsernameLabel(true)
        }
    }
    const onBlurEmailInput=()=>{
        if(details.mobile === ""){
            setEmailLabel(true)
        }
    }
    const onBlurOtpInput=()=>{
        if(otp==="")
        {
            setOtpLabel(true)
        }
    }
    const onBlurMobileInput=()=>{
        if(mobile==="")
        {
            setLabel(true)
        }
    }
    const title = props.route.params.title
    console.log(details,values)
    if(title === "Forgot Password"){
    return (
        <View style={styles.Container}>
            <LinearGradient colors={['#14626c','#68d8e4']}>
                <View style={styles.HeaderContainer}>
                    <View style={styles.Icon}>
                        <Icon
                            name="arrow-left"
                            type="font-awesome-5"
                            color="white"
                            size={30}
                            onPress={()=>props.navigation.navigate('home')}
                        ></Icon>
                    </View>
                    <Text style={styles.HeaderText}>{title}</Text>
                </View>
            </LinearGradient>
            <View style={styles.formContainer}>
                <TextInput 
                    onPressIn={(e)=>onInputMobileClick(e)}
                    onBlur={()=>onBlurMobileInput()}
                    style={{
                        height:60,
                        borderBottomWidth:2,
                        borderBottomColor:!label?"red":"grey",
                        marginHorizontal:20,
                        marginVertical:20,
                        padding:10,
                    }} 
                    onChangeText={(e)=>onMobileChange(e)}
                >
                    <Text style={styles.inputLabel}>{label?"Mobile":""}</Text>
                </TextInput>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        onPressIn={(e)=>onInputOtpClick(e)}
                        onBlur={()=>onBlurOtpInput()}
                        style={{
                            height:60,
                            width:'60%',
                            borderBottomWidth:2,
                            borderBottomColor:!otpLabel?"red":"grey",
                            marginHorizontal:20,
                            marginVertical:20,
                            padding:10,
                        }} 
                        onChangeText={(e)=>onOtpChange(e)}
                    >
                        <Text style={styles.inputLabel}>{otpLabel?"Enter OTP":""}</Text>
                    </TextInput>
                    <Button
                        mode="contained"
                        style={styles.btnContainer}
                    >Get OTP</Button>
                </View>
                <Button mode='contained' style={styles.btnSubmitContainer}
                        onPress={()=>props.navigation.navigate('passwordScreen')}
                >Submit</Button>
            </View>
        </View>
    )
    }
    if(title === "create an account"){
        return(
            <View style={styles.Container}>
                <ScrollView>
                <LinearGradient colors={['#14626c','#68d8e4']} style={styles.HeaderContainer}>
                    <Appbar.Header style={{ backgroundColor: 'transparent',width:400,height:"100%",justifyContent:'space-between'}}> 
                            <Appbar.BackAction
                                onPress={()=>props.navigation.navigate('home')}
                                color="#FFFFFF"
                                size={40}
                            ></Appbar.BackAction>
                            <Text style={styles.HeaderText}>{title}</Text>
                    </Appbar.Header>
                </LinearGradient>
                <View style={styles.formContainer}>
                    <TextInput 
                        onPressIn={(e)=>onInputUsernameClick(e)}
                        onBlur={()=>onBlurUsernameInput()}
                        autoCapitalize='none'
                        style={{
                            height:60,
                            borderBottomWidth:1,
                            borderBottomColor:!usernamelabel?"blue":"grey",
                            marginHorizontal:20,
                            fontSize:20,
                            textDecorationLine:'none',
                            textDecorationStyle:'solid',
                            paddingBottom:25,
                        }} 
                        onChangeText={(e)=>onUsernameChange(e)}
                    >
                        <Text style={styles.inputLabel}>{usernamelabel?"Username":""}</Text>
                    </TextInput>
                    <TextInput 
                            onPressIn={(e)=>onInputEmailClick(e)}
                            onBlur={()=>onBlurEmailInput()}
                            style={{
                                height:60,
                                borderBottomWidth:0.8,
                                borderBottomColor:!emaillabel?"red":"grey",
                                marginHorizontal:20,
                                marginVertical:20,
                                paddingBottom:25,
                            }} 
                            onChangeText={(e)=>onEmailChange(e)}
                        >
                        <Text style={styles.inputLabel}>{emaillabel?"Email":""}</Text>
                    </TextInput>
                    <TextInput 
                            onPressIn={(e)=>onInputMobileClick(e)}
                            onBlur={()=>onBlurMobileInput()}
                            style={{
                                height:60,
                                borderBottomWidth:0.8,
                                borderBottomColor:!label?"red":"grey",
                                marginHorizontal:20,
                                marginVertical:20,
                                paddingBottom:25,
                            }} 
                            onChangeText={(e)=>onMobileChange(e)}
                        >
                        <Text style={styles.inputLabel}>{label?"Mobile":""}</Text>
                    </TextInput>
                    <View style={{flexDirection:'row'}}>
                        <TextInput 
                                onPressIn={(e)=>onInputOtpClick(e)}
                                onBlur={()=>onBlurOtpInput()}
                                style={{
                                    height:60,
                                    width:'60%',
                                    borderBottomWidth:0.8,
                                    borderBottomColor:!otpLabel?"red":"grey",
                                    marginHorizontal:20,
                                    marginVertical:20,
                                    paddingBottom:25,
                                }} 
                                onChangeText={(e)=>onOtpChange(e)}
                            >
                            <Text style={styles.inputLabel}>{otpLabel?"Enter OTP":""}</Text>
                        </TextInput>
                        <Button
                            mode="contained"
                            style={styles.btnContainer}
                        >Get OTP</Button>
                    </View>
                    <View style={{height:40,width:"100%",alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:13,lineHeight:18}}>Didn't Recive the opt ? <Text style={{color:'blue'}}>Resend</Text></Text></View>
                    <Button mode='contained' style={styles.btnSubmitContainer}
                            onPress={()=>props.navigation.navigate('passwordScreen')}
                    >Verify and Continue</Button>
                </View>
                    <View style={{height:40,width:"100%",alignItems:'center',justifyContent:'center'}}><Text  style={{fontSize:13,lineHeight:18}}>Already have an account? <Text style={{color:'blue'}}>Sign in</Text></Text></View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    HeaderContainer:{
        height: 80,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        
    },
    HeaderText:{
        fontSize:25,
        color:'#FFFFFF',
        alignSelf:'center',
        paddingHorizontal:60,
    },
    formContainer:{
        height:"80%",
        backgroundColor:'#FFFFFF',
        display:"flex",
        marginTop:15,
        // justifyContent:'center',
    },
    formInput:{
        height:60,
        marginHorizontal:20,
        // marginBottom:30,
        padding:10,
    },
    inputLabel:{
        position:'absolute',
        fontSize:20,
        top:0,
    },
  btnContainer:{
    //   position:'relative',
      height:40,
      width:100,
      alignSelf:'center',
    //   marginVertical:30,
      backgroundColor:"#F5AA20",
  },
  btnSubmitContainer:{
    // position:'relative',
    height:60,
    width:370,
    marginVertical:30,
    marginHorizontal:20,
    backgroundColor:"#14626C",
    borderRadius:20,
    paddingTop:10,
},

Icon:{
    paddingHorizontal:24,
}
  
})

export default ForgotPassWordScreen



{/* <TextInput 
                    onPressIn={(e)=>onInputMobileClick(e)}
                    onBlur={()=>onBlurMobileInput()}
                    style={{
                        height:60,
                        borderBottomWidth:2,
                        borderBottomColor:!label?"red":"grey",
                        marginHorizontal:20,
                        marginVertical:20,
                        padding:10,
                    }} 
                    onChangeText={(e)=>onMobileChange(e)}
                >
                <Text style={styles.inputLabel}>{label?"Mobile":""}</Text>
                </TextInput>
                
                <Button
                    mode="contained"
                    style={styles.btnContainer}
                >Get OTP</Button>
                
                <TextInput 
                    onPressIn={()=>onInputOtpClick()}
                    onBlur={()=>onBlurOtpInput()}
                    style={{
                        height:60,
                        borderBottomWidth:2,
                        borderBottomColor:!otpLabel?"red":"grey",
                        marginHorizontal:20,
                        marginVertical:20,
                        padding:10,
                    }}  
                    onChangeText={(e)=>onOtpChange(e)}
                >
                <Text style={styles.inputLabel}>{otpLabel?"Enter OTP":""}</Text>
                </TextInput>             
                <Button mode='contained' style={styles.btnSubmitContainer}
                    onPress={()=>props.navigation.navigate('passwordScreen')}
                >Submit</Button> */}





{
    // label?
    // <View 
    //     style={{
    //         height:2,
    //         backgroundColor:'grey',
    //         marginHorizontal:20,
    //         borderBottomWidth:2,
    //     }}
    // ></View>
    // :
    // <LinearGradient colors={['red','blue']} style={styles.linearGradient} >
    
    // <RadialGradient
    //     colors={["blue","white"]}
    //     stops={[0.2, 0.35]}
        
    //     // style={{height:10,borderBottomWidth:2}}
    //     center={{ x: '50w', y: '110h' }}
    //     >
        // <View 
        //     style={{
        //         height:10,
        //         // backgroundColor:'red',
        //         marginHorizontal:20,
        //         borderBottomWidth:2,
        //     }}>
        // </View>
        // </RadialGradient>
    // </LinearGradient>
    }
