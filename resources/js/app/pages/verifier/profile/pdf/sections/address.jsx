import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer,
    Image,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontFamily: "Helvetica",
    },
    section: {
        // marginBottom: 10,
        // padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: "#ddd",
        paddingBottom: 10,
        marginBottom: 10,
    },
    image: {
        width: 80,
        height: 80,
        padding: 10,
    },
    profileInfo: {
        textAlign: "center",
    },
    checkbox: {
        fontSize: 14,
        marginRight: 5,
    },
});

export default function Address({data}) {
    return (
        <>
            <View style={styles.section}>
                <View
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: 3,
                        fontWeight: "bold",
                    }}
                >
                    <Text style={{ fontSize: 11 }}>Current Address</Text>
                </View>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row", // Ensures items are in a row (default)
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: "1rem",
                        width: "100%",
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                border: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "3px",
                                width: "100%",
                            }}
                        >
                            <Text style={{ fontSize: 9 }}> {data?.personal_info?.street_address ?? ""}</Text>
                        </View>
                        <Text style={{ fontSize: 9, textAlign: "center" }}>
                            HOUSE/LOT/BLDG. NO/PUROK
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                border: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "3px",
                                width: "100%",
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>  {data?.personal_info?.street_address_2 ?? ""}</Text>
                        </View>
                        <Text style={{ fontSize: 9, textAlign: "center" }}>
                           STREET/SITIO/SUBDV
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                border: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "3px",
                                width: "100%",
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>  {data?.personal_info?.barangay ?? ""}</Text>
                        </View>
                        <Text style={{ fontSize: 9, textAlign: "center" }}>
                          BARANGAY
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row", // Ensures items are in a row (default)
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: "1rem",
                        width: "100%",
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                border: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "3px",
                                width: "100%",
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>
                            {data?.personal_info?.city ?? ""}
                            </Text>
                        </View>
                        <Text style={{ fontSize: 9, textAlign: "center" }}>
                            MUNICIPALITY/CITY
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                border: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "3px",
                                width: "100%",
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>  {data?.personal_info?.province ?? ""}</Text>
                        </View>
                        <Text style={{ fontSize: 9, textAlign: "center" }}>
                            PROVINCE
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                border: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "3px",
                                width: "100%",
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>  {data?.personal_info?.region ?? ""}</Text>
                        </View>
                        <Text style={{ fontSize: 9, textAlign: "center" }}>
                            REGION
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}
