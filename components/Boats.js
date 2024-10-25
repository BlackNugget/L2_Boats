import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const Boats = ({ icon_name, name, description, picture }) => {
    return (
        <View style={styles.boatCard}>
            {/* Header Row with Icon and Boat Name */}
            <View style={styles.headerRow}>
                <Icon name={icon_name} size={60} color="#B23B23" style={styles.icon} />
                <Text style={styles.boatName}>{name}</Text>
            </View>

            {/* Description */}
            <Text style={styles.description}>{description}</Text>

            {/* Image */}
            <Image source={picture} style={styles.image} />
        </View>
    );
};


const AllBoats = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text></Text>
            <Text style={styles.appTitle}>GetABoat - For Sale</Text>

            {/* List of Boats */}
            <Boats
                icon_name="sailboat"
                name="Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away"
                picture={require('../img/sea_ray.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Four WInns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others"
                picture={require('../img/four_winns.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Flipper 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic"
                picture={require('../img/flipper.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Princess V48"
                description="An open design with a full-length cockpit and sunroof or the enclosed deck saloon with climate control"
                picture={require('../img/princess.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Bayliner 175 Bowrider"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance"
                picture={require('../img/bayliner.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Fairline Targa 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit"
                picture={require('../img/fairline.jpg')}
            />
        </ScrollView>
    );
};

// Styling
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5', // Light background
        padding: 20,
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1E3050', // Dark blue color
        marginBottom: 20,
        textAlign: 'center',
    },
    boatCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4, // Shadow for Android
        marginVertical: 10,
        padding: 15,
        width: '90%',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    boatName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginTop: 10,
    },
});

export default AllBoats;
