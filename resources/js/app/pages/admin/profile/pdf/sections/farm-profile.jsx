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
        borderBottomWidth: 2,
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

export default function FarmProfile({ data }) {
    let farm_profiles = "";
    if (data?.farm_profiles) {
        farm_profiles = data?.farm_profiles[0];
    }
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
                    <Text style={{ fontSize: 11 }}>FARM PROFILE</Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        gap: ".5rem",
                        width: "100%",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 10,
                            width: "30%",
                            fontWeight: "bold",
                            marginLeft: 5,
                        }}
                    >
                        MAIN LIVELIHOOD
                    </Text>
                    <View
                        style={{
                            width: "70%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 5,
                        }}
                    >
                        <Text style={{ fontSize: 9 }}>
                            {farm_profiles?.main_livelihood}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row", // Ensures items are in a row (default)
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "100%",
                        borderTop: 1,
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
                            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                                For Farmers
                            </Text>
                            <View
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: 10,
                                }}
                            >
                                <View
                                    style={{
                                        fontSize: 11,
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {farm_profiles?.main_livelihood ==
                                        "Farmers" &&
                                        data?.farm_profiles?.map((res, i) => {
                                            return (
                                                <Text key={i}>
                                                    {res.farm_activity},
                                                </Text>
                                            );
                                        })}
                                </View>
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
                                    <Text style={{ fontSize: 9 }}>
                                        FARMING ACTIVITY
                                    </Text>
                                </View>
                            </View>
                        </View>
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
                            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                                {" "}
                                For Farmworkers
                            </Text>
                            <View
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: 10,
                                }}
                            >
                                <Text style={{ fontSize: 11 }}>
                                    {farm_profiles?.main_livelihood ==
                                        "FarmWorkers" &&
                                        data?.farm_profiles?.map((res, i) => {
                                            return (
                                                <Text key={i}>
                                                    {res.farm_activity},
                                                </Text>
                                            );
                                        })}
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
                                    <Text style={{ fontSize: 9 }}>
                                        FARMING ACTIVITY
                                    </Text>
                                </View>
                            </View>
                        </View>
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
                            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                                For Fishfolk
                            </Text>
                            <View
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: 10,
                                }}
                            >
                                <Text style={{ fontSize: 11 }}>
                                    {farm_profiles?.main_livelihood ==
                                        "Fisherfolk" &&
                                        data?.farm_profiles?.map((res, i) => {
                                            return (
                                                <Text key={i}>
                                                    {res.farm_activity},
                                                </Text>
                                            );
                                        })}
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
                                    <Text style={{ fontSize: 9 }}>
                                        Type of Fishing Activity
                                    </Text>
                                </View>
                            </View>
                        </View>
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
                            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                                For Agri Youth
                            </Text>
                            <View
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: 10,
                                }}
                            >
                                <Text style={{ fontSize: 11 }}>
                                    {farm_profiles?.main_livelihood ==
                                        "Agri Youth" &&
                                        data?.farm_profiles?.map((res, i) => {
                                            return (
                                                <Text key={i}>
                                                    {res.farm_activity},
                                                </Text>
                                            );
                                        })}
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
                                    <Text style={{ fontSize: 9 }}>
                                        Type of Involvement
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        width: "100%",
                        padding: 3,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 10,
                            width: "100%",
                            fontWeight: "bold",
                        }}
                    >
                        Gross Annual Income Last Year:
                    </Text>
                    <View
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 8,
                                width: "20%",
                            }}
                        >
                            Farming:
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "80%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>aaaa</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 8,
                                width: "30%",
                            }}
                        >
                            Non-farming:
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "70%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>aaaa</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
