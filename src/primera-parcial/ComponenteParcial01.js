import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Input, ListItem } from '@rneui/base';

const ComponenteParcial01 = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
        
            <Text style={styles.text}>Examen Primera Parcial</Text>
            <Input
                placeholder='Ingresar Nombre'
                value={inputValue}
                onChangeText={setInputValue}
            />
            <ScrollView>
                <ListItem bottomDivider onPress={() => navigation.navigate('PropsParcial02', {
                    inputValue,
                    semestre: '8',
                })}>
                    <ListItem.Content>
                        <ListItem.Title>PropsParcial02</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider onPress={() => navigation.navigate('AxiosParcial03')}>
                    <ListItem.Content>
                        <ListItem.Title>AxiosParcial03</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorageParcial04')}>
                    <ListItem.Content>
                        <ListItem.Title>Async AsyncStorageParcial04</ListItem.Title>
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
        backgroundColor: 'green',
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20, // Espacio entre el logo y el texto
    },
    text: {
        marginTop: 10,
        fontSize: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
});

export default ComponenteParcial01;
