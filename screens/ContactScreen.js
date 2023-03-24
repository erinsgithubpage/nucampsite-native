import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { createStackNavigator } from '@react-navigation/stack';

const ContactScreen = ({  }) => {
    const [campsites, setCampsites] = useState(CAMPSITES)
  return (
    <ScrollView>

    </ScrollView>
)
  }

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={Home} 
        options={{ title: 'Contact Us' }}/>
      
       
      </Stack.Navigator>

    );
  }
  
  
  export default ContactScreen;