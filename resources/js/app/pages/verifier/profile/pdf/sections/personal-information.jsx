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
import { useSelector } from "react-redux";
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

export default function PersonalInformation({ data }) {
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
                    <Text style={{ fontSize: 11 }}>
                        Part 1: Personal Information
                    </Text>
                </View>
            </View>
            <View
                style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row", // Ensures items are in a row (default)
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    gap: "1rem",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontSize: 11 }}>
                        {data?.personal_info?.lastname ?? ""}
                    </Text>
                    <View
                        style={{
                            borderTop: "1px solid back",
                            width: "268px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 5,
                        }}
                    >
                        <Text style={{ fontSize: 9 }}>SURNAME</Text>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontSize: 11 }}>{data?.personal_info?.firstname ?? ""}</Text>
                    <View
                        style={{
                            borderTop: "1px solid back",
                            width: "268px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 5,
                        }}
                    >
                        <Text style={{ fontSize: 9 }}>FIRST NAME</Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row", // Ensures items are in a row (default)
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    gap: "1rem",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontSize: 11 }}>{data?.personal_info?.middlename ?? ""}</Text>
                    <View
                        style={{
                            borderTop: "1px solid back",
                            width: "268px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 5,
                        }}
                    >
                        <Text style={{ fontSize: 9 }}>MIDDLE NAME</Text>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "row",
                        width: "268px",
                        gap: "1rem",
                    }}
                >
                    <View style={{ width: "40%" }}>
                        <Text
                            style={{
                                fontSize: 11,
                                textAlign: "center",
                            }}
                        >
                            {data?.personal_info?.suffix ?? ""}
                        </Text>
                        <View
                            style={{
                                borderTop: "1px solid back",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>EXTENSION NAME</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "60%",
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                            borderLeft: "1px",
                            borderTop: "1px",
                            padding: "9px",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 11,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            SEX:
                        </Text>
                        <Text
                            style={{
                                fontSize: 11,
                                textAlign: "center",
                                textTransform:'capitalize'
                            }}
                        >
                            {data?.personal_info?.gender ?? ""}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}
