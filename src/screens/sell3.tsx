import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

interface Brand {
    id: string;
    name: string;
    logo: any;  // Change the type as necessary to match the import method for images
}

const brands: Brand[] = [
    { id: '1', name: 'Jaguar', logo: require('./icons/Jaguar.png') },
    { id: '2', name: 'Mahindra', logo: require('./icons/Mahindra.png') },
    { id: '3', name: 'Hummer', logo: require('./icons/Hummer.png') },
    
];

const Sell3: React.FC = () => {
    const [selectedSegment, setSelectedSegment] = useState('Brand');

    return (
        <View style={styles.container}>
            <View style={styles.segmentControl}>
                <TouchableOpacity onPress={() => setSelectedSegment('Packages')} style={styles.segmentButton}>
                    <Text style={selectedSegment === 'Packages' ? styles.segmentTextSelected : styles.segmentText}>Packages</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedSegment('Brand')} style={styles.segmentButton}>
                    <Text style={selectedSegment === 'Brand' ? styles.segmentTextSelected : styles.segmentText}>Brand</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedSegment('Model')} style={styles.segmentButton}>
                    <Text style={selectedSegment === 'Model' ? styles.segmentTextSelected : styles.segmentText}>Model</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Select Vehicle Brand</Text>
                <TextInput style={styles.searchInput} placeholder="Search" />
                <FlatList
                    data={brands}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.brandButton}>
                            <Image source={item.logo} style={styles.logo} />
                            <Text style={styles.brandName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
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
    segmentControl: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    segmentButton: {
        padding: 10,
    },
    segmentText: {
        color: '#000',
    },
    segmentTextSelected: {
        color: '#007aff',
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    searchInput: {
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
    },
    brandButton: {
        alignItems: 'center',
        margin: 10,
    },
    logo: {
        width: 60,
        height: 60,
    },
    brandName: {
        marginTop: 5,
        fontSize: 12,
    },
    nextButton: {
        padding: 15,
        backgroundColor: '#007aff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Sell3;
