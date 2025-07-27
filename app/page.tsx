import { getCourseData } from "@/lib/getCourseData";
import { getServerLanguage } from "@/lib/language";
import CourseLayout from "@/components/sections/home/CourseLayout";
import LearningFromCourse from "@/components/sections/home/LearningFromCourse";
import ExclusiveFeatures from "@/components/sections/home/ExclusiveFeatures";
import CourseDetails from "@/components/sections/home/CourseDetails";
import Instructor from "@/components/sections/home/Instructor";
import {
    CourseData,
    DefaultMeta,
    SectionCourseDetails,
    SectionCourseLayout,
    SectionExclusiveFeatures,
    SectionInstructor,
    SectionPointers,
    SeoSchema,
} from "@/types";
import type { Metadata } from "next";
import CourseMedia from "@/components/sections/home/CourseMedia";
import SideBar from "@/components/sections/home/SideBar";
import CourseChecklist from "@/components/sections/home/CourseChecklist";

//! ISR - Time based
export const revalidate = 3600;

//! Metadata
export async function generateMetadata(): Promise<Metadata> {
    const language = await getServerLanguage();
    const response = await getCourseData(language);
    const seo = response?.data?.seo;

    return {
        title:
            seo?.title || "IELTS Preparation Course by Munzereen Shahid [2025]",
        description:
            seo?.description ||
            "Take Best IELTS preparation with us, This Course is one of the Best IELTS Course in Bangladesh, which includes mock tests, and a premium study book.",
        keywords: seo?.keywords,
        openGraph: {
            title: seo?.defaultMeta?.find(
                (m: DefaultMeta) => m.value === "og:title"
            )?.content,
            description: seo?.defaultMeta?.find(
                (m: DefaultMeta) => m.value === "og:description"
            )?.content,
            url: seo?.defaultMeta?.find(
                (m: DefaultMeta) => m.value === "og:url"
            )?.content,
            type:
                seo?.defaultMeta?.find(
                    (m: DefaultMeta) => m.value === "og:type"
                )?.content === "product"
                    ? "video.other"
                    : seo?.defaultMeta?.find(
                          (m: DefaultMeta) => m.value === "og:type"
                      )?.content,
            // type: "website",
            images: [
                {
                    url:
                        seo?.defaultMeta?.find(
                            (m: DefaultMeta) => m.value === "og:image"
                        )?.content || "",
                    alt: seo?.defaultMeta?.find(
                        (m: DefaultMeta) => m.value === "og:image:alt"
                    )?.content,
                    type: seo?.defaultMeta?.find(
                        (m: DefaultMeta) => m.value === "og:image:type"
                    )?.content,
                },
            ],
            locale: seo?.defaultMeta?.find(
                (m: DefaultMeta) => m.value === "og:locale"
            )?.content,
        },
        metadataBase: new URL("https://10minuteschool.com"),
    };
}

export default async function Home() {
    const language = await getServerLanguage();
    const response = await getCourseData(language);
    const courseData = response?.data;

    const instructor = courseData?.sections?.find(
        (section: CourseData) => section.type === "instructors"
    ) as SectionInstructor | undefined;

    const courseLayout = courseData?.sections?.find(
        (section: CourseData) => section.type === "features"
    ) as SectionCourseLayout | undefined;

    const pointers = courseData?.sections?.find(
        (section: CourseData) => section.type === "pointers"
    ) as SectionPointers | undefined;

    const exclusiveFeatures = courseData?.sections?.find(
        (section: CourseData) => section.type === "feature_explanations"
    ) as SectionExclusiveFeatures | undefined;

    const courseDetails = courseData?.sections?.find(
        (section: CourseData) => section.type === "about"
    ) as SectionCourseDetails | undefined;

    const media = courseData?.media;
    const cta = courseData?.cta_text;
    const checklist = courseData?.checklist || [];
    const seo = courseData?.seo;

    return (
        <>
            <main>
                {/* Schema */}
                <>
                    {seo?.schema?.map((item: SeoSchema, index: number) => {
                        if (item.type === "ld-json") {
                            return (
                                <script
                                    key={index}
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: item.meta_value,
                                    }}
                                />
                            );
                        }
                        return null;
                    })}
                </>

                {/* Content */}
                <div className="w-full md:h-[350px] mt-[68px] max-md:py-8 bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')] bg-cover bg-center">
                    <div className="wrapper h-full flex flex-col md:flex-row items-center relative text-white">
                        <div className="order-2 md:order-1 md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)] w-full max-md: mt-4">
                            <h1 className="hero_title">{courseData?.title}</h1>
                            <p
                                className="body_text mt-2 md:mt-4 text-white/70"
                                dangerouslySetInnerHTML={{
                                    __html: courseData?.description,
                                }}
                            />
                        </div>

                        {/* side bar */}
                        {media && cta && checklist.length > 0 && (
                            <SideBar
                                media={media}
                                cta={cta}
                                checklist={checklist}
                            />
                        )}

                        <div className="md:hidden block w-full order-1 md:order-2">
                            <CourseMedia media={media} />
                        </div>
                    </div>
                </div>
                <section className="md:hidden block px-5">
                    <CourseChecklist cta={cta} checklist={checklist} />
                </section>
                <div className="wrapper flex flex-col ">
                    {/* course details */}
                    <div className="md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)] w-full">
                        {instructor && <Instructor {...instructor} />}
                        {courseLayout && <CourseLayout {...courseLayout} />}
                        {pointers && <LearningFromCourse {...pointers} />}
                        {exclusiveFeatures && (
                            <ExclusiveFeatures {...exclusiveFeatures} />
                        )}
                        {courseDetails && <CourseDetails {...courseDetails} />}
                    </div>
                </div>
            </main>
        </>
    );
}
