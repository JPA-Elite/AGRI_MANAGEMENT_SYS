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

export default function PersonalASection({ data }) {
    return (
        <>
            <View style={styles.section}>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row", // Ensures items are in a row (default)
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: ".5rem",
                        width: "100%",
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 9,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            MOBILE NUMBER:
                        </Text>
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
                                {data?.personal_info?.mobile ?? ""}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 9,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            LANDLINE NUMBER
                        </Text>
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
                                {data?.personal_info?.landline ?? ""}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row", // Ensures items are in a row (default)
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: ".5rem",
                        width: "100%",
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 9,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            DATE OF BIRTH:
                        </Text>
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
                                {data?.personal_info?.dob ?? ""}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 9,
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            PLACE OF BIRTH
                        </Text>
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
                                {data?.personal_info?.pob ?? ""}
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column", // Ensures items are in a row (default)
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: ".5rem",
                        width: "100%",
                        borderTop: 2,
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Text style={{ fontSize: 11 }}>
                            {data?.personal_info?.religion ?? ""}
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
                            <Text style={{ fontSize: 9 }}>RELIGION</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Text style={{ fontSize: 11 }}>
                            {data?.personal_info?.civil ?? ""}
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
                            <Text style={{ fontSize: 9 }}>CIVIL STATUS</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Text style={{ fontSize: 11 }}>
                            {data?.personal_info?.spouse ?? ""}
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
                            <Text style={{ fontSize: 9 }}>NAME OF SPOUSE</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column", // Ensures items are in a row (default)
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: ".5rem",
                        width: "100%",
                        borderTop: 2,
                        padding: 10,
                        marginTop: 14,
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Text style={{ fontSize: 11 }}>
                            {data?.personal_info?.mothers_maiden ?? ""}
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
                                MOTHERS MAIDEN NAME
                            </Text>
                        </View>
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
                                fontWeight: "bold",
                                width: "100%",
                            }}
                        >
                            HOUSEHOLD HEAD?
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>
                                {" "}
                                {data?.household?.household_head ?? ""}
                            </Text>
                        </View>
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
                                fontSize: 8,
                                width: "100%",
                            }}
                        >
                            If No, name of household head:
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>
                                {data?.household?.household_head_name ?? ""}
                            </Text>
                        </View>
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
                                fontSize: 8,
                                width: "100%",
                            }}
                        >
                            Relationship
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}></Text>
                        </View>
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
                                fontSize: 8,
                                width: "100%",
                            }}
                        >
                            No. of living household members?
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>
                                {data?.household?.household_members ?? ""}
                            </Text>
                        </View>
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
                                    width: "100%",
                                }}
                            >
                                No. of male:
                            </Text>
                            <View
                                style={{
                                    borderBottom: "1px solid back",
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text style={{ fontSize: 9 }}>
                                    {data?.household?.male_members ?? ""}
                                </Text>
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
                                    width: "100%",
                                }}
                            >
                                No. of female:
                            </Text>
                            <View
                                style={{
                                    borderBottom: "1px solid back",
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text style={{ fontSize: 9 }}>
                                    {data?.household?.female_members ?? ""}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
