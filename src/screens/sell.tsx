import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const VehicleCategories = [
    { id: '1', title: 'Car', icon: require('./icons/car.png') },
    { id: '2', title: 'Motorbikes', icon: require('./icons/motorbike.png') },
    { id: '3', title: 'Lorry', icon: require('./icons/lorry.png') },
    { id: '4', title: 'Van', icon: require('./icons/van.png') },
    { id: '5', title: 'Threewheeler', icon: require('./icons/threewheeler.png') },
    { id: '6', title: 'Bicycle', icon: require('./icons/bicycle.png') },
    { id: '7', title: 'Tractor', icon: require('./icons/tractor.png') },
    { id: '8', title: 'HeavyDuty', icon: require('./icons/heavyduty.png') },
    { id: '9', title: 'Boats', icon: require('./icons/boat.png') },
    { id: '10', title: 'Bus', icon: require('./icons/bus.png') },
    { id: '11', title: 'Automotive', icon: require('./icons/automotive.png') },
    { id: '12', title: 'Parts', icon: require('./icons/parts.png') },
];

const CategoryButton = ({ title, icon, onPress }: any) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const Sell = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Selling Made Easy and Simple</Text>
            </View>
            <ScrollView contentContainerStyle={styles.grid}>
                {VehicleCategories.map(category => (
                    <CategoryButton
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        onPress={() => console.log('Selected: ' + category.title)}
                    />
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    grid: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    button: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    icon: {
        width: 50,
        height: 50,
    },
    buttonText: {
        marginTop: 8,
        fontSize: 14,
        color: '#333',
    },
    nextButton: {
        padding: 15,
        backgroundColor: '#007bff',
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default Sell;
