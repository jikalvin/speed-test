import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Image, StyleSheet } from 'react-native';

const SignupScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.welcometext}>
                    Welcome Yo
                </Text>
                <Text style={styles.welcometext}>
                    Signup
                </Text>
            </View>
            <View style={styles.logo}>
                <Image source={require('../assets/icons/_Group_.png')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username/Email"
                    placeholderTextColor="#888"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                />
            </View>
            <View style={styles.row}>
                <View style={styles.rememberMe}>
                    {/* <Switch value={false} /> */}
                    <Text style={styles.rememberMeText}></Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}></Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SpeedTest')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>
                Need an account? <Text style={styles.signUpLink}>Sign Up</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0f24',
        padding: 20,
    },
    logo: {
        marginBottom: 40,
        alignSelf: "center",
        marginTop: 40,
    },
    inputContainer: {
        flex: 1,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#1a1f36',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        color: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    rememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberMeText: {
        color: '#fff',
        marginLeft: 10,
    },
    forgotPasswordText: {
        color: '#fff',
    },
    button: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#6a1b9a',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpText: {
        color: '#fff',
        alignSelf: 'center',
    },
    signUpLink: {
        color: '#6a1b9a',
        fontWeight: 'bold',
    },
    welcome: {
        alignItems: 'center',
        marginBottom: 20,
    marginTop: 50,
    },
    welcometext: {
        color: '#B7B7B7',
        fontSize: 35,
        fontWeight: 'bold',
    },
});

export default SignupScreen;

