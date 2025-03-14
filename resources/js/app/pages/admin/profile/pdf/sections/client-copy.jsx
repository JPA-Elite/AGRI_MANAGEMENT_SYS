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

export default function ClientCopy() {
    return (
        <View
            style={{
                borderTop:
                    "2px dashed black" /* 2px width, dashed style, black color */,
                marginTop: "15px",
            }}
        >
            <Text
                style={{
                    marginTop: 10,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 11,
                }}
            >
                Register System for Basic Sector in Agriculture (RSBSA)
            </Text>
            <Text
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 12,
                    marginBottom:5,
                }}
            >
                ENROLLMENT CLIENT'S COPY
            </Text>
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 5,
                        marginBottom:5,
                        justifyContent: "space-evenly",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 11,
                            width: "20%",
                        }}
                    >
                        Reference Number:
                    </Text>
                    <View
                        style={{
                            borderBottom: "1px solid back",
                            width: "75%",
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
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginBottom:5,
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ fontSize: 11 }}>aaaa</Text>
                        <View
                            style={{
                                borderTop: "1px solid back",
                                width: "268px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 2,
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
                        <Text style={{ fontSize: 11 }}>aaaa</Text>
                        <View
                            style={{
                                borderTop: "1px solid back",
                                width: "268px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 2,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>FIRST NAME</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ fontSize: 11 }}>aaaa</Text>
                        <View
                            style={{
                                borderTop: "1px solid back",
                                width: "268px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 2,
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
                        <Text style={{ fontSize: 11 }}>aaaa</Text>
                        <View
                            style={{
                                borderTop: "1px solid back",
                                width: "268px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 2,
                            }}
                        >
                            <Text style={{ fontSize: 9 }}>EXTENSION NAME</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
