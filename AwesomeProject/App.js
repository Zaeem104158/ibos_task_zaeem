
import React,{ Component } from 'react';
import { Pressable,StatusBar, Text, View, Button, TextInput, Image,ScrollView, TouchableOpacity} from 'react-native';
import styles from './components/styles_base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Divider } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import DropShadow from "react-native-drop-shadow";  



export default function App() {
     return (
         <ScrollView>
          <View>
          <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#096529" translucent = {true}/>
            <View style={styles.appBarStyle}></View>
           
           <View style={styles.appBarTitleStyle} >
            
            <Text style={styles.appBarTitleFontStyle}>
              Employee Profile
              </Text>
           </View>
           <FontAwesome5 name={'bars'} size={20} style={
            styles.appBarIconStyle
           } />
          <Text style={styles.H1Text}>Darlene Robertson</Text>
          <Text style={styles.H2Text}>Senior UX Designer</Text>
          <Text style={styles.H2Text}>ID43178</Text>
          <Text style={{
            padding:1,
            color:'#299647',
            backgroundColor: '#e6f9e9',
            textAlign:'center',
            borderRadius:99,
            left:330,
            top:175,height:20,width:53,position:'absolute'
          }}>Active</Text>
          <Image source = {require('./profile_pic_canva.jpg')} style={{ width: 72, height: 72, left:20,top:3, borderRadius:99 }} />
          <Divider style= {{
            top:10,
            height:1,
            width:360,
            left:20,
          }}/>
         <View style={{flexDirection:'row'}}><FontAwesome5 name={'briefcase'} size={20} style={styles.TopBodyIconStyle} />
         <View style={
         styles.AfterAppBarContainer
         }><Text style={styles.H3Text}>Human Resource</Text>
          <Text style={styles.H4Text}>Department</Text>
         </View>
         </View>
         <Divider style= {{
            top:18,
            height:1,
            width:360,
            left:20,
          }}/>
         <View style={{flexDirection:'row'}}><FontAwesome5 name={'birthday-cake'} size={20} style={styles.TopBodyIconStyle} />
         <View style={
         styles.AfterAppBarContainer
         }><Text style={styles.H3Text}>17 November, 1997</Text>
          <Text style={styles.H4Text}>Date of Birth</Text>
         </View>
         </View>
         <Divider style= {{
            top:18,
            height:1,
            width:360,
            left:20,
          }}/>
         <View style={{flexDirection:'row'}}><FontAwesome5 name={'user-alt'} size={20} style={styles.TopBodyIconStyle} />
         <View style={
         styles.AfterAppBarContainer
         }><Text style={styles.H3Text}>Female</Text>
          <Text style={styles.H4Text}>Gender</Text>
         </View>
         <View style={
         styles.AfterAppBarContainer
         }><Text style={styles.H3Text}>Islam</Text>
          <Text style={styles.H4Text}>Religion</Text>
         </View>
         </View>
         <Divider style= {{
            top:18,
            height:10,
            color:'#f2f2f2'
          }}/>
          <View style={{
            top:25,
            left:20,
            flexDirection:'column'
          }}><Text style={styles.CardH1Text}>Employee Application</Text>
          <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column'}}>
            
            <View style={{height:140}}>
              <View style={styles.CircleButtonContainer}>
                  <FontAwesome5 name='briefcase' size={40} style={{
                    top:20,
                    left:24,
                    color:'white',
                    
                  }}/>
                  <Text style={{top:50,left:25}}>Leave</Text>
              </View>
            </View>
            <View style={{height:140}}>
              <View style={{ top:10,
    height:88,
    width:88,
    backgroundColor:'#669F2A',
    borderRadius:99}}>
                  <FontAwesome5 name='receipt' size={40} style={{
                    top:25,
                    left:28,
                    color:'white',
                    
                  }}/>
                  <Text style={{top:50,left:25}}>Loan</Text>
              </View>
            </View>
  
            </View>
            <View style={{flexDirection:'column' ,left: 45}}>
            
            <View style={{height:140}}>
              <View style={{backgroundColor:'#2E90FA',top:10,  borderRadius:99,
                      height:88,
                      width:88,}}>
                  <FontAwesome5 name='car' size={40} style={{
                    top:20,
                    left:24,
                    color:'white',
                    
                  }}/>
                  <Text style={{top:50,left:10}}>Movement</Text>
              </View>
            </View>
            <View style={{height:140}}>
              <View style={{ top:10,
    height:88,
    width:88,
    backgroundColor:'#F63D68',
    borderRadius:99}}>
                  <FontAwesome5 name='map-marker-alt' size={40} style={{
                    top:25,
                    left:28,
                    color:'white',
                    
                  }}/>
                  <Text style={{top:50,left:20}}>Remote Attendance</Text>
              </View>
            </View>
  
            </View>
            <View style={{flexDirection:'column' ,left:90}}>
            
            <View style={{height:140}}>
              <View style={{ top:10,
    height:88,
    width:88,
    backgroundColor:'#F79009',
    borderRadius:99}}>
                  <FontAwesome5 name='briefcase' size={40} style={{
                    top:20,
                    left:24,
                    color:'white',
                    
                  }}/>
                  <Text style={{top:50,left:35}}>IOU</Text>
              </View>
            </View>
            <View style={{height:140}}>
              <View style={{ top:10,
                    height:88,
                    width:88,
                    backgroundColor:'#875BF7',
                    borderRadius:99}}>
                  <FontAwesome5 name='paper-plane' size={40} style={{
                    top:25,
                    left:23,
                    color:'white',
                    
                  }}/>
                  <Text style={{top:50,left:18}}>OverTime</Text>
              </View>
            </View>
  
            </View>
          </View>
          </View>
          <View style={{
            height:500,
            top:25,
            left:20,
            flexDirection:'column'
          }}><Text style={styles.CardH1Text}>Please input your information</Text>
           <View style={[styles.card, styles.elevation]}>  
        <View>  
          <Text style={styles.cardH2Text}>  
            Leave type
          </Text>  
          <View style={{flexDirection:'column',bottom:25}}>
          <View style={{flexDirection:'row'}}>
            <TextInput style={{width:300,borderBottomWidth:1,borderBottomColor:'#D0D5DD'}} />
            <FontAwesome5 name='caret-down' style={{right:15,top:30}}/>
          </View>
          </View>
        </View>


        <View style={{flexDirection:'row'}}>
        <View>  
          <Text style={styles.cardH2Text}>  
            From Date
          </Text>  
          <View style={{flexDirection:'column',bottom:25}}>
          <View style={{flexDirection:'row'}}>
            <TextInput style={styles.TextInputWithRightIcon} />
            <FontAwesome5 name='calendar-alt' style={{right:15,top:30}}/>
          </View>
          </View>
        </View>
        <View>  
          <Text style={styles.cardH2Text}>  
            From Date
          </Text>  
          <View style={{flexDirection:'column',bottom:25}}>
          <View style={{flexDirection:'row'}}>
            <TextInput style={styles.TextInputWithRightIcon} />
            <FontAwesome5 name='calendar-alt' style={{right:15,top:30}}/>
          </View>
          </View>
        </View>
        </View>
        <View>  
          <Text style={styles.cardH2Text}>  
            Location
          </Text>  
          <View style={{bottom:25,}}>
            <TextInput style={styles.TextInputWithOutRightIcon} />
          </View>
        </View>    
        <View>  
          <Text style={styles.cardH2Text}>  
            Reason
          </Text>  
          <View style={{bottom:25}}>
            <TextInput style={styles.TextInputWithOutRightIcon} />                      
          </View>
        </View>    
        <View style={{flexDirection:'row'}}>  
        <FontAwesome5 name='upload' style={styles.LeftIconWithLable}/>
          <Text style={styles.cardH2Text}>  
            File Upload
          </Text>  
          </View>          
          </View> 
          <TouchableOpacity>
            <View style={styles.FlatButtonContainer}>
              <Text style={styles.FlatButtonTitleCenter} >
                Apply
                 </Text>
                  </View>
                   </TouchableOpacity>
                 
            
               
          </View>
          </View>   
         </ScrollView>
      );
}


 