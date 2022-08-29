import React,{ Component } from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    appBarStyle: {
     backgroundColor: '#299647',height:56,top: 24 , 
    },
    appBarTitleFontStyle: {
             fontFamily: "Inter",
             fontStyle: 'normal',
             fontSize: 20,
             fontWeight: '600',
             color: "white"
    },
    appBarTitleStyle:{
             position: 'absolute',
             width: 162,
             height: 24,
             left: 56,
             top: 40,
    },
    appBarIconStyle:{
        position: 'absolute',
        color: 'white',
        height: 56,
        width: 411,
        left: 20,
        top: 44,
},
 H1Text:{
    top:70,
    width: 181,
    height: 30,
    fontSize:20,
    left: 120,
    fontFamily: 'Inter',
    color: 'grey',
    fontWeight: '700',
    lineHeight:30,
    fontSize:20
   },
   H2Text:{
    top:70,
    width: 181,
    height: 20,
    fontSize:20,
    left: 120,
    fontFamily: 'Inter',
    color: 'grey',
    fontWeight: '400',
    lineHeight:20,
    fontSize:16,
   },
   H3Text:{

    width: 150,
    height: 24,
    fontStyle: 'normal',
    color:' #344054',
    fontFamily: 'Inter',
    color: 'grey',
    fontWeight: 'bold',
    lineHeight:24,
    fontSize:16,
   },
   H4Text:{
    width: 150,
    height: 24,
    fontStyle: 'normal',
    color:'#667085',
    fontFamily: 'Inter',
    color: 'grey',
    fontWeight: '400',
    lineHeight:18,
    fontSize:12,
   },
   TopBodyIconStyle:{
    width:20,
    height:18,
    top:22,
    left:20
   },
   AfterAppBarContainer:{
    flexDirection:'column',
    top:20,
    left: 40,
   
   },
   CardH1Text:{
    fontSize:18,color: 'grey',fontWeight:'600'
   },

   cardH2Text: {  
    fontSize:14,
    lineHeight:24,
    color:'#299647',
    bottom:8,
     
    fontWeight: '400',  
      
  },  
  card: {
    top:10,  
    backgroundColor: 'white',  
    borderRadius: 8,  
    paddingVertical: 10,  
    paddingHorizontal: 25,  
    width: 350,  
    marginVertical: 1,  
    height:330
  },  
  elevation: {  
    shadowColor: '#52006A',  
    elevation: 20,  
  },  
  FlatButtonContainer: {
    height:40,
   top:20,
   left:130,
   backgroundColor:'#299647',
   width:80,
   borderRadius:90

 },
 FlatButtonTitleCenter:{
  top:10,textAlign:'center' , color: 'white'
 },
 LeftIconWithLable:{
  right:0,top:-2,paddingRight:15,color:'#34A853'
 },
 TextInputWithOutRightIcon:{
  width:300,borderBottomWidth:1,borderBottomColor:'#D0D5DD'
 },
 TextInputWithRightIcon:{
  width:150,borderBottomWidth:1,borderBottomColor:'#D0D5DD'
 },
 CircleButtonContainer: {
  top:10,
  height:88,
  width:88,
  backgroundColor:'#D444F1',
  borderRadius:99


},
 });

 export default styles;