import React, { useEffect } from "react";
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
import moment from "moment";
import store from "@/app/store/store";
import { get_personal_information_by_id_thunk } from "@/app/redux/personal-information-thunk";
import PersonalInformation from "./sections/personal-information";
import Address from "./sections/address";
import PersonalASection from "./sections/personal-a-section";
import PersonalBSection from "./sections/personal-b-section";
import FarmProfile from "./sections/farm-profile";
import ClientCopy from "./sections/client-copy";

// Define styles
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

export default function ProfilePDFPage() {
    const id = window.location.pathname.split("/")[3];
    const { personal_information } = useSelector(
        (store) => store.personal_information
    );

    useEffect(() => {
        store.dispatch(get_personal_information_by_id_thunk(id));
    }, []);
console.log('personal_information',personal_information)
    return (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Document>
                <Page size="Legal" style={styles.page}>
                    <View style={{ border: "2px solid black", height: "100%" }}>
                        <View style={styles.header}>
                            {/* Left Logo */}
                            <Image src="/images/DOA.png" style={styles.image} />

                            {/* Profile Info */}
                            <View style={styles.profileInfo}>
                                <Text style={styles.title}>
                                    {personal_information?.gender === "male"
                                        ? "Mr."
                                        : "Ms./Mrs."}{" "}
                                    {
                                        personal_information?.personal_info
                                            ?.firstname
                                    }{" "}
                                    {
                                        personal_information?.personal_info
                                            ?.middlename
                                    }{" "}
                                    {
                                        personal_information?.personal_info
                                            ?.lastname
                                    }
                                </Text>
                                <Text style={styles.text}>
                                    {
                                        personal_information?.personal_info
                                            ?.register_id
                                    }
                                </Text>
                                <Text style={styles.text}>
                                    Registered since{" "}
                                    {moment(
                                        personal_information?.personal_info
                                            ?.created_at
                                    ).format("LL")}
                                </Text>
                            </View>

                            {/* Right Logo */}
                            <Image
                                src="/images/valle.png"
                                style={styles.image}
                            />
                        </View>

                        {/* Content Section */}
                        <PersonalInformation data={personal_information}/>
                        <Address data={personal_information}/>
                        <View
                            style={{
                                borderTop: 1,
                                display: "flex",
                                flexDirection: "row", // Ensures items are in a row (default)
                                alignItems: "start",
                                justifyContent: "space-between",
                            }}
                        >
                            <View style={{ borderRight: 2, width: "100%" }}>
                                <PersonalASection data={personal_information}/>
                            </View>
                            <View style={{ width: "100%" }}>
                                <PersonalBSection data={personal_information}/>
                            </View>
                        </View>
                        <FarmProfile data={personal_information} />
                        <ClientCopy 
                         data={personal_information} 
                        />
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}
