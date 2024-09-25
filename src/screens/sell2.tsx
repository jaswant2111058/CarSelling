import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';

interface OfferType {
    id: string;
    label: string;
    value: string;
    icon: any; // You can use ImageSourcePropType if you want a more specific type
}

const OfferTypes: OfferType[] = [
    { id: '1', label: 'Sale', value: 'sale', icon: require('./icons/sale.png') },
    { id: '2', label: 'Rent', value: 'rent', icon: require('./icons/rent.png') },
    { id: '3', label: 'Wanted', value: 'wanted', icon: require('./icons/wanted.png') }
];

interface OfferButtonProps {
    label: string;
    icon: any;
    selected: boolean;
    onPress: () => void;
}

const OfferButton: React.FC<OfferButtonProps> = ({ label, icon, selected, onPress }) => (
    <TouchableOpacity style={selected ? styles.selectedButton : styles.offerButton} onPress={onPress}>
        <Image source={icon} style={styles.offerIcon} />
        <Text style={selected ? styles.selectedButtonText : styles.buttonText}>{label}</Text>
    </TouchableOpacity>
);

const Sell2: React.FC = () => {
    const [vehicleNumber, setVehicleNumber] = useState<string>('');
    const [condition, setCondition] = useState<string>('new');
    const [selectedOfferType, setSelectedOfferType] = useState<string | null>(null);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Enter Your Vehicle Number</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setVehicleNumber}
                value={vehicleNumber}
                placeholder="Enter Your Vehicle Registration No"
            />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Condition</Text>
                <RadioButton
                    radioButtons={[
                        { id: '1', label: 'New', value: 'new', selected: condition === 'new' },
                        { id: '2', label: 'Used', value: 'used', selected: condition === 'used' }
                    ]}
                    layout="row"
                    onPress={(radioButtons: any) => {
                        let selectedButton = radioButtons.find((r: any) => r.selected);
                        if (selectedButton) {
                            setCondition(selectedButton.value);
                        }
                    }}
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Select Offer Type</Text>
                <View style={styles.grid}>
                    {OfferTypes.map(offer => (
                        <OfferButton
                            key={offer.id}
                            label={offer.label}
                            icon={offer.icon}
                            selected={selectedOfferType === offer.value}
                            onPress={() => setSelectedOfferType(offer.value)}
                        />
                    ))}
                </View>
            </View>
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    offerButton: {
        alignItems: 'center',
        padding: 10,
    },
    selectedButton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#007bff',
    },
    offerIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    buttonText: {
        fontSize: 16,
    },
    selectedButtonText: {
        fontSize: 16,
        color: '#fff',
    },
    nextButton: {
        padding: 15,
        backgroundColor: '#007bff',
        alignItems: 'center',
        borderRadius: 5,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default Sell2;
