import { getCourseData } from "@/lib/getCourseData";
import { getServerLanguage } from "@/lib/language";
import CourseLayout from "@/components/sections/home/CourseLayout";
import LearningFromCourse from "@/components/sections/home/LearningFromCourse";
import ExclusiveFeatures from "@/components/sections/home/ExclusiveFeatures";
import CourseDetails from "@/components/sections/home/CourseDetails";
import SideBar from "@/components/sections/home/SideBar";
import Instructor from "@/components/sections/home/Instructor";
import {
    CourseData,
    SectionCourseDetails,
    SectionCourseLayout,
    SectionExclusiveFeatures,
    SectionInstructor,
    SectionPointers,
    SeoMeta,
    SeoSchema,
} from "@/types";
import Seo from "@/components/Seo";
import type { Metadata } from "next";
import Head from "next/head";

interface DefaultMeta {
    type: string;
    value: string;
    content: string;
}

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
    console.log(courseData.seo);

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
            <Head>
                {seo?.schema?.map((item: SeoSchema, index: number) => {
                    if (item.type === "ld-json" && item.meta_value) {
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
            </Head>

            <main>
                <section className="">
                    <div className="wrapper relative flex gap-8 border">
                        <div className="max-w-[820px] w-full">
                            <h1>{courseData?.title}</h1>
                            <div
                                className="tenms__description"
                                dangerouslySetInnerHTML={{
                                    __html: courseData?.description,
                                }}
                            />
                            {instructor && <Instructor {...instructor} />}
                            {courseLayout && <CourseLayout {...courseLayout} />}
                            {pointers && <LearningFromCourse {...pointers} />}
                            {exclusiveFeatures && (
                                <ExclusiveFeatures {...exclusiveFeatures} />
                            )}
                            {courseDetails && (
                                <CourseDetails {...courseDetails} />
                            )}
                        </div>

                        {media && cta && checklist.length > 0 && (
                            <SideBar
                                media={media}
                                cta={cta}
                                checklist={checklist}
                            />
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}

//! without seo
// import { getCourseData } from "@/lib/getCourseData";
// import { getServerLanguage } from "@/lib/language";
// import CourseLayout from "@/components/sections/home/CourseLayout";
// import LearningFromCourse from "@/components/sections/home/LearningFromCourse";
// import ExclusiveFeatures from "@/components/sections/home/ExclusiveFeatures";
// import CourseDetails from "@/components/sections/home/CourseDetails";
// import SideBar from "@/components/sections/home/SideBar";
// import Instructor from "@/components/sections/home/Instructor";
// import {
//     CourseData,
//     SectionCourseDetails,
//     SectionCourseLayout,
//     SectionExclusiveFeatures,
//     SectionInstructor,
//     SectionPointers,
// } from "@/types";

// export default async function Home() {
//     const language = await getServerLanguage();

//     const response = await getCourseData(language);
//     const courseData = response?.data;
//     console.log(courseData.seo);

//     const instructor = courseData?.sections?.find(
//         (section: CourseData) => section.type === "instructors"
//     ) as SectionInstructor | undefined;

//     const courseLayout = courseData?.sections?.find(
//         (section: CourseData) => section.type === "features"
//     ) as SectionCourseLayout | undefined;

//     const pointers = courseData?.sections?.find(
//         (section: CourseData) => section.type === "pointers"
//     ) as SectionPointers | undefined;

//     const exclusiveFeatures = courseData?.sections?.find(
//         (section: CourseData) => section.type === "feature_explanations"
//     ) as SectionExclusiveFeatures | undefined;

//     const courseDetails = courseData?.sections?.find(
//         (section: CourseData) => section.type === "about"
//     ) as SectionCourseDetails | undefined;

//     const media = courseData?.media;
//     const cta = courseData?.cta_text;
//     const checklist = courseData?.checklist || [];

//     return (
//         <main>
//             <section className="">
//                 <div className="wrapper relative flex gap-8 border">
//                     <div className="max-w-[820px] w-full">
//                         <h1>{courseData?.title}</h1>
//                         <div
//                             className="tenms__description"
//                             dangerouslySetInnerHTML={{
//                                 __html: courseData?.description,
//                             }}
//                         />
//                         {instructor && <Instructor {...instructor} />}
//                         {courseLayout && <CourseLayout {...courseLayout} />}
//                         {pointers && <LearningFromCourse {...pointers} />}
//                         {exclusiveFeatures && (
//                             <ExclusiveFeatures {...exclusiveFeatures} />
//                         )}
//                         {courseDetails && <CourseDetails {...courseDetails} />}
//                     </div>

//                     {media && cta && checklist.length > 0 && (
//                         <SideBar
//                             media={media}
//                             cta={cta}
//                             checklist={checklist}
//                         />
//                     )}
//                 </div>
//             </section>
//         </main>
//     );
// }
