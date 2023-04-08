import { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Switch,
    Button,
    Alert
    } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';

const ReservationScreen = () => {
    const [campers, setCampers] = useState(1);
    const [hikeIn, setHikeIn] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const handleReservation = () => {
        console.log('campers:', campers);
        console.log('hikeIn:', hikeIn);
        console.log('date:', date);
        
    
       // const message = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}`;
       const title = "Begin Search?";
       const message = `Number of Campers: ${campers}
       \nHike-In?: ${hikeIn}
       \nDate: ${date.toLocaleDateString("en-US")}`
        Alert.alert(
          title, message,
          [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            {
                text: "OK",
                onPress: () => console.log("OK Pressed"),
    },
          ],
          { cancelable: true }
            
        );
      };
      
      {/*const resetForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setGuests('');
        setDate('');
        setTime(''); 

    };*/}

    const resetForm = () => {
        setCampers(1);
        setHikeIn(false);
        setDate(new Date());
        setShowCalendar(false);
        {/*added from above code */}
        setName('');
        setPhone('');
        setEmail('');
        setGuests('');
        setDate('');
        setTime(''); 
    };

    return (
        <ScrollView>
            <Animatable.View animation="zoomInUp"
                duration={2000}
                delay={1000}   
            >
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Number of Campers:</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={campers}
                    onValueChange={(itemValue) => setCampers(itemValue)}
                >
                    <Picker.Item label='1' value={1} />
                    <Picker.Item label='2' value={2} />
                    <Picker.Item label='3' value={3} />
                    <Picker.Item label='4' value={4} />
                    <Picker.Item label='5' value={5} />
                    <Picker.Item label='6' value={6} />
                </Picker>
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Hike In?</Text>
                <Switch
                    style={styles.formItem}
                    value={hikeIn}
                    trackColor={{ true: '#5637DD', false: null }}
                    onValueChange={(value) => setHikeIn(value)}
                />
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Date:</Text>
                <Button
                    onPress={() => setShowCalendar(!showCalendar)}
                    title={date.toLocaleDateString('en-US')}
                    color='#5637DD'
                    accessibilityLabel='Tap me to select a reservation date'
                />
            </View>
            {showCalendar && (
                <DateTimePicker
                    style={styles.formItem}
                    value={date}
                    mode='date'
                    display='default'
                    onChange={onDateChange}
                />
            )}
            <View style={styles.formRow}>
                <Button
                    onPress={() => handleReservation()}
                    title='Search Availability'
                    color='#5637DD'
                    accessibilityLabel='Tap me to search for available campsites to reserve'
                />
            </View>
            </Animatable.View>
        {/*old modal here*/}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default ReservationScreen;