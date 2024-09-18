import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";


export default function Index() {
  return(
    <View style={styles.containerPrincipal}>
        <View style={styles.containerInfo}>
            <View>
              <Image style= {styles.logo} source={require('../assets/images/nubank-logo-branco.png')}>
              </Image>
            </View>
            <View style={styles.containerTexto}>
              <Text style={styles.texto}>Olá, Felipe Melo</Text>
              <TextInput placeholder="Procurar..." placeholderTextColor={"#FFF"} style={styles.input}/>
            </View>
            <View style={styles.containerCartao}>
              <Text style={styles.textoCartao}>Cartaão de crédito</Text>
              <Text>Fatura</Text>
              <Text style={styles.textoFatura}>R$ 1.500,00</Text>
              <TouchableOpacity style={styles.btnFatura}> 
                <Text>
                  Pagar fatura
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerCartao}>
              <Text style={styles.textoCartao}>Conta</Text>
              <Text>Saldo disponível</Text>
              <Text style={styles.textoSaldo}>R$ 300,00</Text>
              <TouchableOpacity style={styles.btnFatura}> 
                <Text>
                  Transferir
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.btnCartoes}> 
                <Text style={styles.textoMeuCartao}>
                  Meus cartões
                </Text>
              </TouchableOpacity>
            </View>
        </View>
  </View>
  )
}

const styles = StyleSheet.create({
  containerPrincipal:{
    flex: 1,
    padding: 5,
    paddingLeft:6, 
    backgroundColor: '#FFF',
    marginTop: 30,
  },
  containerInfo:{
    flex:1,
    backgroundColor:'#8B03BB',
    padding: 20
  },
  logo:{
    width:120,
    height:50,
    margin:'auto',
    marginTop: 30
  },
  containerTexto:{
    marginTop: 30,
  },
  texto:{
    color:'#FFF',
    fontSize: 15
  },
  input:{
    borderWidth:1,
    padding: 8,
    paddingLeft:20,
    borderRadius:10,
    fontSize: 14,
    marginTop: 20,
    color:'#FFF',
    borderColor:'#FFF',
  },
  containerCartao:{
    marginTop: 20,
    borderRadius: 10,
    backgroundColor:'#FFF',
    padding: 10,
    height: 150
  },
  textoCartao:{
    fontSize: 15,
    fontWeight:'bold'
  },
  textoFatura:{
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    color: '#0099CC'
  },
  btnFatura:{
    borderWidth:1,
    width:120,
    padding: 4,
    borderRadius: 20,
    alignItems:'center'
  },
  textoSaldo:{
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    fontWeight:'bold'
  },
  btnCartoes:{
    borderWidth:1,
    padding: 10,
    borderRadius: 20,
    alignItems:'center',
    marginTop: 20,
    backgroundColor:'#0099CC',
  },
  textoMeuCartao:{
    fontSize:16,
    color:'#FFF',
  }
});