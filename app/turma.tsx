import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Link } from 'expo-router';
export default function Turmas() {

    return (
        <View style={styles.container}>
            
              <View style={styles.header}>
                <Image source={require('~/assets/Logo.png')} />
                <Text style={styles.headerText}>Turmas</Text>
                <Text style={styles.subHeaderText}>jogue com a sua turma</Text>
              </View>
              <View style={styles.inputContainer}>
               
                <View style={styles.inputBox}>
                  <Text style={styles.inputText}>Nome da turma</Text>
                </View>
                <View style={styles.inputBox}>
                  <Text style={styles.inputText}>Nome da turma</Text>
                </View>
              </View>
              
              <Link href="/" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Criar nova turma</Text>
                </TouchableOpacity>
              </Link>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1c1c1c',
      padding: 20,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#00b894',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText: {
      fontSize: 32,
      color: '#fff',
      fontWeight: 'bold',
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 24,
      color: '#fff',
    },
    subHeaderText: {
      color: '#aaa',
    },
    inputContainer: {
      marginBottom: 20,
    },
    inputBox: {
      backgroundColor: '#333',
      padding: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    inputText: {
      color: '#888',
    },
    button: {
      backgroundColor: '#00b894',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 390
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });