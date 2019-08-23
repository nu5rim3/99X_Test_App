/* eslint-disable prettier/prettier */
import { responsiveHeight as HP, responsiveWidth as WP, responsiveFontSize as RF } from "react-native-responsive-dimensions";

const PRIMARY = "#f47e47";
const DARK = "#333";
const GRAY = "#7B7A7A";
const WHITE = "#FAFAFA";
const OFF_WHITE = "#F8F8F8";

export default {
    br: {
        borderWidth: 1,
        borderColor: PRIMARY,
    },
    BGOW: {
        backgroundColor: OFF_WHITE
    },
    BGW: {
        backgroundColor: WHITE
    },
    BGP: {
        backgroundColor: PRIMARY
    },
    PTEXT: {
        color: PRIMARY
    },
    GTEXT: {
        color: GRAY
    },
    container: {
        flex: 1
    },
    containerWithMargin: {
        flex: 1,
        marginHorizontal: WP(5),
        marginVertical: WP(3),
    },
    listItem: {
        width: WP(100),
        height: HP(10),
        paddingHorizontal: WP(2),
        paddingVertical: HP(1),
        borderBottomColor : GRAY,
        borderBottomWidth: 1,
    },
    fullHeightWidth: {
        height: HP(100),
        width:WP(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerView: {
        justifyContent: 'center',
    },
    centerText: {
        textAlign: 'center',
    },
    H1: {
        fontSize: RF(4)
    },
    H2: {
        fontSize: RF(3)
    },
    H3: {
        fontSize: RF(2)
    },
    card: {
        backgroundColor: WHITE,
        borderRadius: WP(2),
        paddingHorizontal: WP(4),
        paddingVertical: WP(3),
        marginBottom: WP(2),
        marginTop: WP(5),
        elevation: 5,
        shadowColor: DARK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    imageFull: {
        width: "100%", 
        height: "100%", 
        resizeMode: "contain"
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: WP(42), 
        height: HP(19), 
        margin: WP(2)
    }
}