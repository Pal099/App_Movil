import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, ListItem } from '@rneui/base';

const Componente01 = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Primera Parcial</Text>
            {/* Cambiamos TextInput por Input */}
            <Input
                placeholder='Ingresar Nombre'
                value={inputValue}
                onChangeText={setInputValue}
            />
            <ScrollView>
                <ListItem bottomDivider onPress={() => navigation.navigate('Props02', {
                    inputValue,
                    estado: false,
                })}>
                    <ListItem.Content>
                        <ListItem.Title>PropsParcial02</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider onPress={() => navigation.navigate('Axios03')}>
                    <ListItem.Content>
                        <ListItem.Title>AxiosParcial03</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorage04')}>
                    <ListItem.Content>
                        <ListItem.Title>Async StorageParcial04</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
         backgroundColor: 'blue'
    },
    text: {
        marginTop: 10,
        fontSize: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: 'black' ,
        textAlign: 'center',
    },
});

export default Componente01;
