import React from "react";
import { Pressable, View , StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";

function IconButton ({icon, size, color, onPress}){

   return <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <View  style={styles.buttonContainer}>
            <Icon
                name={icon}
                type="ionicon"
                color={color}
                size={size}
                />
            

        </View>
        </Pressable>

}
export default IconButton;
const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius:24,
      padding:6,
      marginHorizontal:8,
      marginVertical:2
   
    },
    pressed:{
        opacity:0.75

    }
  });