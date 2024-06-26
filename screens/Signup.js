import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator
} from 'react-native';
import { auth } from '../config/firebase';
import { Feather } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSignUp = async () => {
        try {
            setLoading(true); // Set loading to true when signing up
            if (!email || !password || !confirmPassword) {
                setError('Please enter email, password, and confirm password');
                setLoading(false); // Reset loading state
                return;
            }

            if (password !== confirmPassword) {
                setError('Passwords do not match');
                setLoading(false); // Reset loading state
                return;
            }

            // Implement Firebase sign up logic
            await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Signin'); // Redirect to SignIn screen upon successful sign up
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Error signing up. Please try again later.');
        } finally {
            setLoading(false); // Reset loading state after sign up attempt
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.welcome}>
                <Text style={styles.welcometext}>
                    Welcome Yo
                </Text>
                <Text style={styles.welcometext}>
                    Sign Up
                </Text>
            </View>
            <View style={styles.logo}>
                <Image source={require('../assets/icons/_Group_.png')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCorrect={false}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#888"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.togglePasswordVisibility}
                        onPress={togglePasswordVisibility}
                    >
                        <Feather
                            name={passwordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color="#888"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#888"
                        secureTextEntry={!confirmPasswordVisible}
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.togglePasswordVisibility}
                        onPress={toggleConfirmPasswordVisibility}
                    >
                        <Feather
                            name={confirmPasswordVisible ? 'eye-off' : 'eye'}
                            size={24}
                            color="#888"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity
                style={[styles.button, {display: confirmPassword === '' ? 'none' : 'flex'}]}
                onPress={handleSignUp}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Sign Up</Text>
                )}
            </TouchableOpacity>
            <Text style={styles.signUpText}>
                Already have an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.signUpLink}>Sign In</Text>
                </TouchableOpacity>
            </Text>
        </KeyboardAvoidingView>
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
        alignSelf: 'center',
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
    passwordContainer: {
        position: 'relative',
    },
    togglePasswordVisibility: {
        position: 'absolute',
        top: 12,
        right: 10,
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
    errorText: {
        color: '#ff0000',
        marginBottom: 20,
    },
});

export default SignUpScreen;
