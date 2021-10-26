import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(){
    super()
    this.state={
      email : "",
      password : ""
    }
  }

  showAlert(errorCode){
    switch(errorCode){
      case 'auth/user-not-found':
        alert('Invalid Email Id and Password.Please try again')
        this.setState({
          email:"",
          password : ""
        })
        break
      case 'auth/invalid-email':
        alert('Please enter Eamil Id and Password')
        this.setState({
          password : ""
        })
        break
      default:
        this.setState({
          email:"",
          password : ""
        })
        alert('Invalid email and password.Please try again')
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.container1}>
          <Text style={styles.title}>Bedtime Stories</Text>
         <Image
         style={styles.image}
         source = {{uri: 'https://static-s.aa-cdn.net/img/gp/20600008811619/VwMVJsT17lL_XnBHTTAhfsaesDAR13kqmEivdNPOcEcxwV-3y6MVNg6Pev8J1Ij2ccq_=s300?v=1',}}/>
          <TextInput
              placeholder="Email ID"
              placeholderTextColor = "black"
              onChangeText= {(emailText)=>{
                  this.setState({
                      email: emailText
                  })
              }}
              value={this.state.email}
              style={styles.textInput}
              />
          <TextInput
              placeholder="Password"
              placeholderTextColor = "black"
              onChangeText= {(passwordText)=>{
                  this.setState({
                      password: passwordText
                  })
              }}
              value={this.state.password}
              style={styles.textInput}
              secureTextEntry = {true}
              />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button}
            onPress = {async()=>{
              var email  = await this.state.email;
              var password = await this.state.password
              firebase.auth().signInWithEmailAndPassword(email, password)
              .then(()=>{
                this.props.navigation.navigate('WriteStory')
              })
              .catch((error)=> {
                var errorCode = error.code;
                var errorMessage = error.message;
                return this.showAlert(errorCode)
              })
            }}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'paleturquoise'
  },
  title:{
    fontWeight:"bold",
    fontSize:30,
    color:'white',
    fontFamily: 'arial black',
    marginTop: -5
  },
  image:{
    width:200,
    height:200,
    margin:20,
    borderWidth:5,
    borderColor:'white',
    borderRadius:20
  },
  container1:{
    justifyContent:'center',
    alignItems:'center',
    margin: 20,
    marginBottom: -10
  },
  container2:{
    alignItems:'center',
    margin: 10 
  },
  textInput : {
    width:250,
    height: 50,
    borderWidth:2,
    borderColor:'darkturqupise',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom:10,
    borderRadius:10,
    margin: 0,
    backgroundColor: 'white',
    fontWeight: 'bold'
  },
  button:{
    width:90,
    height:90,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 3,
    borderColor:'black',
    borderRadius: 100,
    marginTop: 1 
  },
  buttonText:{
    color:'darkturquoise',
    fontSize:25,
    fontWeight: 'bold'
  }
})