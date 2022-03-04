import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet, TextInput, View, Text, Dimensions, Button, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import DataService from '../services/serviceData'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('window')

export default function AddPlantScreen() {

    const initialState = {
        id: null,
        TypeofPlant: "",
        Phase: "",
        Days: 0,
        TempMin: 0,
        TempMax: 0,
        HumMin: 0,
        HumMax: 0,
        AirConMin: 0,
        AirConMax: 0,
        Photoperiod: 0,
        Start: 0,
        End: 0,
        TdsMin: 0,
        TdsMax: 0,
        PhMin: 0,
        PhMax: 0
      
      };
    
      useEffect(()=> {
        
      }, [])
   
      const [plant, setPlant] = useState(initialState);
      const [submitted, setSubmitted] = useState(false);

      const [hour, setHour] = useState(new Date())
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(false);

      const [TypeofPlant, setType] = useState('')
      const [Phase, setPhase] = useState('')
      const [Days, setDay] = useState(null)
      const [TempMin, setTempMin] = useState(null)
      const [TempMax, setTempMax] = useState(null)
      const [HumMin, setHumMin] = useState(null)
      const [HumMax, setHumMax] = useState(null)
      const [AirConMin, setAirConMin] = useState(null)
      const [AirConMax, setAirConMax] = useState(null)
      const [Photoperiod, setPhotoperiod] = useState(null)
      const [Start, setStart] = useState(0)
      const [End, setEnd] = useState(0)
      const [TdsMin, setTdsMin] = useState(null)
      const [TdsMax, setTdsMax] = useState(null)
      const [PhMin, setPhMin] = useState(null)
      const [PhMax, setPhMax] = useState(null)
    

     
    const handleSubmit = async (e) => {

        e.preventDefault()
    
        /*setType(...TypeofPlant)
        setPhase(...Phase)
        setDay(...Days)
        setTempMin(...TempMin)
        setTempMax(...TempMax)
        setHumMin(...HumMin)
        setHumMax(...HumMax)
        setAirConMin(...AirConMin)
        setAirConMax(...AirConMax)
        setPhotoperiod(...Photoperiod)
        setStart(Start)
        setEnd(End)
        setTdsMin(...TdsMin)
        setTdsMax(...TdsMax)
        setPhMin(...PhMin)
        setPhMax(...PhMax)
*/
      
       
        setPlant({...plant, 
            TypeofPlant: TypeofPlant,
            Phase: Phase,
            Days: Days,
            TempMin: TempMin,
            TempMax: TempMax,
            HumMin: HumMin,
            HumMax: HumMax,
            AirConMin: AirConMin,
            AirConMax: AirConMax,
            Photoperiod: Photoperiod,
            Start: Start,
            End: End,
            TdsMin: TdsMin,
            TdsMax: TdsMax,
            PhMin: PhMin,
            PhMax: PhMax
       
        
        })
       
        console.log(plant)
     
        DataService.addNewPlant(plant).then(() => {
       
         
            },
                (error) => {
                    console.log(error)
                }
            );
            
           
    }

      const newPlant =()=> {
        setPlant({
       
        id: null,
        TypeofPlant: "",
        Phase: "",
        Days: 0,
        TempMin: 0,
        TempMax: 0,
        HumMin: 0,
        HumMax: 0,
        AirConMin: 0,
        AirConMax: 0,
        Photoperiod: 0,
        Start: 0,
        End: 0,
        TdsMin: 0,
        TdsMax: 0,
        PhMin: 0,
        PhMax: 0
  
        });
        setSubmitted(false)
      }

      const onChange = (event, selectedHour) => {

        const currentHour = selectedHour || hour;
        setShow(Platform.OS === 'ios');
        setHour(event.nativeEvent.timestamp.toLocaleTimeString());

        setStart(event.nativeEvent.timestamp.toLocaleTimeString())
        setEnd(event.nativeEvent.timestamp.toLocaleTimeString())

        
      };

      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };
    
    
    
      const showTimepicker = () => {
        showMode('time');
      };
    
    return (
        <ScrollView style={styles.root}>
            <View style={styles.header}>
                <Icon
                    name="leaf"
                    color='white'
                    style={styles.icon}
                    size={120}
                />
            </View>
            {submitted ? (
        <View>
          <Text>You submitted successfully!</Text>
          <TouchableOpacity
                    style={styles.buttonInput}
                    onPress={newPlant}
                >
                    <Text style={styles.textButton}>AJOUTER</Text>
                </TouchableOpacity>
        </View>
      ) : (
            <View style={styles.container}>
   

                <Text style={styles.title}>Ajouter une nouvelle plante</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setType(text)}
                    placeholder="Type de plante"
                    value={TypeofPlant}
                    name="TypeofPlant"


                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPhase(text)}
                    placeholder="Type de plante"
                    value={Phase}
                    name="Phase"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setDay(text)}
                    keyboardType='numeric'
                    placeholder="Nombre de jours"
                    value={Days}
                    name="Days"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setTempMin(text)}
                    keyboardType='numeric'
                    placeholder="T° Min"
                    value={TempMin}
                    name="TempMin"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setTempMax(text)}
                    keyboardType='numeric'
                    placeholder="T° Max"
                    value={TempMax}
                    name="TempMax"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setHumMin(text)}
                    keyboardType='numeric'
                    placeholder="Humidité Min"
                    value={HumMin}
                    name="HumMin"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setHumMax(text)}
                    keyboardType='numeric'
                    placeholder="Humidité Max"
                    value={HumMax}
                    name="HumMax"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setAirConMin(text)}
                    keyboardType='numeric'
                    placeholder="Co2 Min"
                    value={AirConMin}
                    name="AirConMin"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setAirConMax(text)}
                    keyboardType='numeric'
                    placeholder="Co2 Max"
                    value={AirConMax}
                    name="AirConMax"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPhotoperiod(text)}
                    keyboardType='numeric'
                    placeholder="Photopériode"
                    value={Photoperiod}
                    name="Photoperiod"

                />
     
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setTdsMin(text)}
                    keyboardType='numeric'
                    placeholder="Tds Min"
                    value={TdsMin}
                    name="TdsMin"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setTdsMax(text)}
                    keyboardType='numeric'
                    placeholder="Tds Max"
                    value={TdsMax}
                    name="TdsMax"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPhMin(text)}
                    keyboardType='numeric'
                    placeholder="Ph Min"
                    value={PhMin}
                    name="PhMin"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPhMax(text)}
                    keyboardType='numeric'
                    placeholder="Ph Max"
                    value={PhMax}
                    name="PhMax"
                />
                  <Button onPress={showTimepicker} title="Heure de début"></Button>
                {show && (   <DateTimePicker 
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={hour}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}/>
                    )}
                <TouchableOpacity
                    style={styles.buttonInput}
                    onPress={handleSubmit}
                >
                    <Text style={styles.textButton}>AJOUTER</Text>
                </TouchableOpacity>

            </View>
 )}
   
    
        </ScrollView>
    )

}

const styles = StyleSheet.create({

    root: {
        backgroundColor: 'white'
    },
    container: {
        width: width * 0.9,
        marginTop: - height * 0.04,
        marginHorizontal: width * 0.05,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.08,
        backgroundColor: '#f2f2f2',
        borderRadius: 25

    },
    title: {
        fontSize: 18,
        marginBottom: height * 0.04,
        marginHorizontal: width * 0.09
    },
    input: {
        marginBottom: height * 0.02,
        backgroundColor: '#fff',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.01,
        borderRadius: 10

    },
    buttonInput: {
        width: width * 0.4,
        paddingVertical: height * 0.015,
        backgroundColor: '#0B6B00',
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: width * 0.2,
        marginTop: height * 0.05

    },
    header: {
        width: width,
        height: height * 0.2,
        backgroundColor: '#27941B'
    },
    icon: {
        marginLeft: width * 0.65,
        marginTop: height * 0.03,
        opacity: 0.7
    },
    textButton: {
        color: 'white',

    }
})