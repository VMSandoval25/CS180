import React, { createContext, useContext } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

const AuthContext = createContext({});

const config = {
    clientId: ['41577106775-9418p4dekdo0kjh8dd32nij19thdr4du.apps.googleusercontent.com, 41577106775-bn5r985hf366brpc3tko3uruun3advn7.apps.googleusercontent.com'],
    redirectUri: Platform.OS === 'web'
        ? `${window.location.origin}/auth`
        : AuthSession.getRedirectUrl(),
    scopes: ["profile", "email", 'public_profile', 'gender', 'location'],

};
  

export const AuthProvider = ({children}) => {
    const signInWithGoogle = async() => {
        const {type, params } = await AuthSession.startAsync({
            authUrl:
            `https://accounts.google.com/o/oauth2/v2/auth?` +
                `&client_id=${encodeURIComponent(config.clientId)}` +
                `&redirect_uri=${encodeURIComponent(config.redirectUri)}` +
                `&response_type=code` +
                `&scope=${encodeURIComponent(config.scopes.join(' '))}`,
        });
        if(type === 'success'){
            // login..
        }
    }

  return (
    <AuthContext.Provider 
        value={{
            user: null,
            signInWithGoogle
    }}>
        {children}
    </AuthContext.Provider>
  );
};

export default function useAuth(){
    return useContext(AuthContext);
}