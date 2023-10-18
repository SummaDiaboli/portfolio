import React from "react"
import ReactPDF, {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
    PDFDownloadLink,
} from "@react-pdf/renderer"
import {
    usePDF,
    PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs"
// import { theme } from "../../tailwind.config.cjs"
import { createTw } from "react-pdf-tailwind"
import { profileData } from "../utils/profileData"
import { format } from "date-fns"
import defaultTheme from "tailwindcss/defaultTheme"

const tw = createTw({
    theme: {
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
})

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "white",
        height: "100vh",
    },
    view: {
        height: "100vh",
        backgroundColor: "blue",
    },
    text: {
        color: "#ff0022",
    },
})

const MyPDF = () => {
    const formatDate = (value: Date | string) => {
        if (typeof value === "string") {
            return value
        } else {
            return format(value, "MMM yyy")
        }
    }

    const MyDoc = (
        <Document
            title="Resume"
            author="Salim Hussaini"
            creator="Salim Hussaini"
        >
            <Page size="A4" style={tw("bg-gray-100")}>
                <View style={tw("bg-gray-100 flex flex-row")}>
                    <View style={tw("flex flex-col w-[90%] py-5 px-10")}>
                        <View style={tw("flex flex-col w-[85%] mb-[5rem]")}>
                            <Text
                                style={tw(
                                    "text-[#1d4ed8] text-5xl font-bold leading-tight tracking-tighter"
                                )}
                            >
                                {profileData.personalDetails.name}
                            </Text>
                            <Text style={tw("text-slate-500 text-sm")}>
                                {profileData.personalDetails.brief}
                            </Text>
                        </View>

                        <View>
                            <Text
                                style={tw(
                                    "text-[#1d4ed8] font-bold tracking-tighter leading-tight text-xl"
                                )}
                            >
                                Relevant Experience
                            </Text>
                            <View style={tw("flex flex-col gap-6")}>
                                {profileData.resume.map((job) => (
                                    <>
                                        <View
                                            style={tw(
                                                "flex flex-row gap-x-1 items-baseline flex-wrap text-xs"
                                            )}
                                        >
                                            <Text>{job.role}</Text>
                                            <Text>•</Text>
                                            <Text style={tw("font-bold")}>
                                                {job.company}
                                            </Text>
                                            <Text style={tw("text-slate-500")}>
                                                {formatDate(job.duration.from)}{" "}
                                                - {formatDate(job.duration.to)}
                                            </Text>
                                        </View>
                                        <View
                                            style={tw(
                                                "flex flex-col text-slate-500 pl-2 gap-y-1 text-xs"
                                            )}
                                        >
                                            {job.bulletPoints.map((bullet) => (
                                                <Text>• {bullet}</Text>
                                            ))}
                                        </View>
                                    </>
                                ))}
                            </View>
                        </View>
                    </View>

                    <View style={tw("flex flex-col p-5")}>
                        <View
                            style={tw(
                                "flex flex-col text-slate-500 text-xs mb-[7.5rem]"
                            )}
                        >
                            <Text>{profileData.personalDetails.email}</Text>
                            <Text>{profileData.personalDetails.phone}</Text>
                            <Text>
                                {profileData.personalDetails.githubLink}
                            </Text>
                            <Text>
                                {profileData.personalDetails.portfolioLink}
                            </Text>
                        </View>

                        <View style={tw("flex flex-col gap-y-8 text-xs")}>
                            <View style={tw("flex flex-col")}>
                                <Text
                                    style={tw(
                                        "text-[#1d4ed8] font-bold tracking-tighter leading-tight text-xl"
                                    )}
                                >
                                    Skills
                                </Text>

                                <View style={tw("flex flex-col gap-y-3")}>
                                    <View>
                                        <Text style={tw("font-bold pb-1")}>
                                            Programming Languages
                                        </Text>
                                        <View
                                            style={tw(
                                                "flex flex-wrap flex-row gap-x-1 text-slate-500"
                                            )}
                                        >
                                            {profileData.skills.programmingLanguages.map(
                                                (language, index) =>
                                                    index !==
                                                    profileData.skills
                                                        .programmingLanguages
                                                        .length -
                                                        1 ? (
                                                        <Text>{language},</Text>
                                                    ) : (
                                                        <Text>{language}</Text>
                                                    )
                                            )}
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={tw("font-bold pb-1")}>
                                            Libraries and Frameworks
                                        </Text>
                                        <View
                                            style={tw(
                                                "flex flex-wrap flex-row gap-x-1 text-slate-500"
                                            )}
                                        >
                                            {profileData.skills.libraries.map(
                                                (library, index) =>
                                                    index !==
                                                    profileData.skills.libraries
                                                        .length -
                                                        1 ? (
                                                        <Text>{library},</Text>
                                                    ) : (
                                                        <Text>{library}</Text>
                                                    )
                                            )}
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={tw("font-bold pb-1")}>
                                            Tools and Platforms
                                        </Text>
                                        <View
                                            style={tw(
                                                "flex flex-wrap flex-row gap-x-1 text-slate-500"
                                            )}
                                        >
                                            {profileData.skills.tools.map(
                                                (tool, index) =>
                                                    index !==
                                                    profileData.skills.tools
                                                        .length -
                                                        1 ? (
                                                        <Text>{tool},</Text>
                                                    ) : (
                                                        <Text>{tool}</Text>
                                                    )
                                            )}
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={tw("flex flex-col")}>
                                <Text
                                    style={tw(
                                        "text-[#1d4ed8] font-bold tracking-tighter leading-tight text-xl"
                                    )}
                                >
                                    Education
                                </Text>

                                <Text style={tw("font-bold")}>
                                    {profileData.education.name}
                                </Text>
                                <Text style={tw("text-slate-500")}>
                                    {profileData.education.major}
                                </Text>
                            </View>

                            <View style={tw("flex flex-col")}>
                                <Text
                                    style={tw(
                                        "text-[#1d4ed8] font-bold tracking-tighter leading-tight text-xl"
                                    )}
                                >
                                    Interests
                                </Text>

                                <View
                                    style={tw(
                                        "text-slate-500 flex flex-row flex-wrap gap-x-1"
                                    )}
                                >
                                    {profileData.interests.map(
                                        (interest, index) =>
                                            index !==
                                            profileData.interests.length - 1 ? (
                                                <Text>{interest},</Text>
                                            ) : (
                                                <Text>{interest}</Text>
                                            )
                                    )}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )

    const [document, updateDocument] = usePDF({ document: MyDoc })
    if (document.loading) return <div>Loading...</div>
    if (document.error) return <div>Something went wrong: {document.error}</div>

    return (
        // <PDFViewer>
        <a href={document.url!} download={"Resume - Salim Hussaini.pdf"} className="group-hover:underline group-hover:decoration-green-400 group-hover:underline-offset-4">
            View Full Resume
        </a>
        // <div className="flex h-screen w-full">
        // <PDFViewer style={tw("h-screen w-screen")}>{MyDoc}</PDFViewer>
        // </div>
        // </PDFViewer>
    )
}

export default MyPDF
