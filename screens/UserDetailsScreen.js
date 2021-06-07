import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,TextInput,ScrollView,Button, ActivityIndicator} from 'react-native'
import firebase from '../database/firebase'

const UserDetailsScreen = (props) => {
    
    const [user,setUser] = useState({
        id:'',
        name:'',
        email:'',
        phone: ''
    })

    const [loading,setLoading] = useState(true)

    const getUserById = async(id) =>{
      const dbRef = firebase.db.collection('users').doc(id)
      const doc = await dbRef.get();
      const user = doc.data();
      setUser({
          ...user,
          id:doc.id,
      });
      setLoading(false);
    }

    useEffect(() =>{
        getUserById(props.route.params.userId)
    },[])
    
    const handleChangeText = (name,value) =>{
        setUser({...user, [name]:value})
    }

    //ELIMINAR USUARIO
    const deleteUser = async () =>{
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
        await dbRef.delete();
        props.navigation.navigate('UsersList')
    }

    //ACTUALIZAR 
    const openConfimationAlert= () => {
        Alert
    }

    if(loading){
        return(
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"/>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Name User" 
            value={user.name}
            onChangeText={(value) => handleChangeText('name',value)}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Email User"
            value={user.email}
            onChangeText={(value) => handleChangeText('email',value)}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Phone  User"
            value={user.phone}
            onChangeText={(value) => handleChangeText('phone',value)}
            />
        </View>
        <View>
            <Button 
            color="#19AC52"
            title="Update User"/>          
        </View>
        <View>
            <Button 
            color="#E37399"
            title="Delete User"
            onPress={() => deleteUser()}
            />
        </View>
    </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        padding:35
    },
    inputGroup: {
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    }
})

export default UserDetailsScreen
