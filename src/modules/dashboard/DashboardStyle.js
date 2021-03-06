import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get('window');
export const style = StyleSheet.create({
    mainPageContainer: {
        flex: 1,
        backgroundColor: '#454545',
    },
    whiteHeader: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    shopName: {
        fontSize: RFValue(16),
        color: '#ffa500',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    goldImage: {
        width: width > 400 ? 70 : 60,
        height: width > 400 ? 50 : 40,
        resizeMode: 'cover',
    },
    goldPrice: {
        fontSize: RFValue(16),
        color: '#ffa500',
        fontWeight: '800',
        marginTop: width > 400 ? 0 : 10,
    },
    userIcon: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
        marginTop: width > 400 ? 0 : 10,
    },
    goldRatesContainersRow: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    smallOrangeContainer: {
        width: '20%',
        height: width > 400 ? 110 : 90,
        padding: 10,
        backgroundColor: '#e78c20',
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    currencyName: {
        color: 'white',
        fontSize: RFValue(14),
        fontWeight: 'bold',
    },
    price: {
        color: 'white',
        fontSize: RFValue(width > 400 ? 18 : 14),
        fontWeight: '800',
    },
    quantity: {
        color: 'white',
        fontSize: RFValue(12),
        fontWeight: 'bold',
    },
    smallGreenContainer: {
        width: '20%',
        height: width > 400 ? 110 : 90,
        padding: 10,
        backgroundColor: '#8da32e',
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    bigWhiteContainer: {
        width: '55%',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#00ccda',
        borderWidth: 3,
        borderStyle: 'solid',
    },
    rateRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    tableText: {
        fontSize: RFValue(14),
        fontWeight: '600',
    },
    divider: {
        width: '100%',
        height: 1,
        opacity: .1,
        backgroundColor: 'black'
    },
    lastUpdateText: {
        paddingHorizontal: 20,
        color: 'white',
        fontSize: RFValue(14),
        marginTop: 10,
        textAlign: 'center',
    },
    horizontalLineBreaker: {
        marginTop: 15,
        marginHorizontal: 20,
        height: 1,
        backgroundColor: 'white',
    },
    chargeHeading: {
        textAlign: 'center',
        color: 'white',
        fontSize: RFValue(16),
        fontWeight: "bold",
    },
    chargesBoxesRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    countryNameAndChargesContainer: {
        width: '23%',
        backgroundColor: "#d9b621",
        borderRadius: 3,
        marginTop: 15,
        paddingVertical: 5,
    },
    countryName: {
        textTransform: 'uppercase',
        fontSize: RFValue(width > 400 ? 16 : 13),
        fontWeight: '500',
        color: "black",
        textAlign: "center",
    },
    charges: {
        textTransform: 'uppercase',
        fontSize: RFValue(width > 400 ? 16 : 11),
        fontWeight: '500',
        textAlign: "center",
    },
});