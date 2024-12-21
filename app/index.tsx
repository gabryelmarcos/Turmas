import { Stack, Link } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react'
import Bar from '~/components/BarTela'
import BarTela from '~/components/BarTela';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Nova Turma' }} />
      <View style={styles.container}>

          <BarTela />
          <View style={styles.header}>
          <Image source={require('~/assets/grupo.png')} style={{width: 50, height: 50}} />
            <Text style={styles.headerText}>Nova Turma</Text>
          </View>
          <Text style={styles.instructionText}>Crie uma turma para adicionar pessoas</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da turma"
            placeholderTextColor="#888"            
          />          
            <Link href='/turma' asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Criar</Text>
            </TouchableOpacity>
            </Link>
        </View>

    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
    justifyContent: 'center',
    marginTop: -90
  },

  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  instructionText: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00b894',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
