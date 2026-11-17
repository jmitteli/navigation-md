import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, Button } from 'react-native'

type Props = NativeStackScreenProps<any>

const HomeScreen = ({navigation}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})
export default HomeScreen