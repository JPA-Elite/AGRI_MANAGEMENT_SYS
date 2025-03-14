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

export default function PersonalBSection({data}) {
    return (
        <>
            <View style={styles.section}>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column", // Ensures items are in a row (default)
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: ".5rem",
                        width: "100%",
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
                        <Text style={{ fontSize: 11 }}>{data?.personal_info?.highest_education ?? ""}</Text>
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
                                HIGHEST FORMAT EDUCATION
                            </Text>
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
                        <Text style={{ fontSize: 11 }}>{data?.government_affiliation?.PWD ?? ""}</Text>
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
                                PERSON WITH DISABILITY(PWD)
                            </Text>
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
                        <Text style={{ fontSize: 11 }}>{data?.government_affiliation?.['4Ps'] ?? ""}</Text>
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
                                4P's Beneficiary?
                            </Text>
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
                        <Text style={{ fontSize: 11 }}>{data?.government_affiliation?.indigenous_group ?? ""}</Text>
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
                                Member of an Indigenous Group?
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
                                width: "20%",
                            }}
                        >
                            If yes,specify:
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "80%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>{data?.government_affiliation?.indigenous_group_name ?? ""}</Text>
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
                            flexDirection: "row",
                            gap: ".5rem",
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 8,
                                width: "40%",
                            }}
                        >
                            With Government ID?
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>{data?.government_affiliation?.government_id ?? ""}</Text>
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
                                width: "40%",
                            }}
                        >
                            If yes, specify ID type:
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>{data?.government_affiliation?.government_id_type ?? ""}</Text>
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
                                width: "40%",
                            }}
                        >
                            ID Number:
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>{data?.government_affiliation?.government_id_number ?? ""}</Text>
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
                            flexDirection: "row",
                            gap: ".5rem",
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 8,
                                width: "40%",
                            }}
                        >
                            Member of any farmers Association/Cooperative?
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>{data?.government_affiliation?.farmers_association ?? ""}</Text>
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
                                width: "40%",
                            }}
                        >
                            If yes, specify,
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>{data?.government_affiliation?.farmers_association_name ?? ""}</Text>
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
                            flexDirection: "row",
                            gap: ".5rem",
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 8,
                                width: "40%",
                            }}
                        >
                            PERSON TO NOTIFY IN CASE OF EMERGENCY:
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>{data?.personal_info?.contact_person ?? ""}</Text>
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
                                width: "40%",
                            }}
                        >
                            CONTACT NUMBER:
                        </Text>
                        <View
                            style={{
                                borderBottom: "1px solid back",
                                width: "60%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 5,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>{data?.personal_info?.contact_person_mobile ?? ""}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
