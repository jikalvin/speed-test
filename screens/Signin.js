import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator
} from 'react-native';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Feather } from '@expo/vector-icons';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true); // Set loading to true when logging in
            if (!email || !password) {
                setError('Please enter both email and password');
                setLoading(false); // Reset loading state
                return;
            }

            // Implement Firebase login logic
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to Home screen upon successful login
            navigation.navigate('SpeedTest1');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid email or password');
        } finally {
            setLoading(false); // Reset loading state after login attempt
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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
                    Sign In
                </Text>
            </View>
            <View style={styles.logo}>
                <Image source={require('../assets/icons/_Group_.png')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { marginBottom: 10 }]}
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
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Sign In</Text>
                )}
            </TouchableOpacity>
            <Text style={styles.signUpText}>
                Need an account?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signUpLink}>Sign Up</Text>
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
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#1a1f36',
        borderRadius: 10,
        padding: 10,
        color: '#fff',
    },
    passwordContainer: {
        position: 'relative',
    },
    togglePasswordVisibility: {
        position: 'absolute',
        top: 12,
        right: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        backgroundColor: '#6a1b9a',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
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

export default LoginScreen;
