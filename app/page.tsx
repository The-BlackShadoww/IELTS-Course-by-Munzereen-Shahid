import {
    SectionCourseDetails,
    SectionCourseLayout,
    SectionExclusiveFeatures,
    SectionInstructor,
    SectionPointers,
} from "@/types";
import CourseLayout from "@/components/sections/home/CourseLayout";
import LearningFromCourse from "@/components/sections/home/LearningFromCourse";
import ExclusiveFeatures from "@/components/sections/home/ExclusiveFeatures";
import CourseDetails from "@/components/sections/home/CourseDetails";
import SideBar from "@/components/sections/home/SideBar";
import Instructor from "@/components/sections/home/Instructor";

export default async function Home() {
    const lang = "en";
    const res = await fetch(
        `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
        {
            headers: {
                "X-TENMS-SOURCE-PLATFORM": "web",
            },
        }
    );

    const course = await res.json();
    const data = course.data;

    const instructor = data?.sections?.find(
        (section: SectionInstructor) => section.type === "instructors"
    );
    const courseLayout = data?.sections?.find(
        (section: SectionCourseLayout) => section.type === "features"
    );
    const pointers = data?.sections?.find(
        (section: SectionPointers) => section.type === "pointers"
    );
    const exclusiveFeatures = data?.sections?.find(
        (section: SectionExclusiveFeatures) =>
            section.type === "feature_explanations"
    );
    const courseDetails = data?.sections?.find(
        (section: SectionCourseDetails) => section.type === "about"
    );

    const media = data?.media;
    const cta = data?.cta_text;
    const checklist = data?.checklist || [];
    // console.log(course.data.sections);
    // console.log("instructor", instructor);
    // console.log("courseLayout", courseLayout);
    // console.log("pointers", pointers);
    // console.log("exclusiveFeatures", exclusiveFeatures);
    // console.log("courseDetails", courseDetails);
    console.log("CHECKLIST", data.checklist);

    return (
        <main>
            <section className="">
                <div className="max-w-[1200px] w-full mx-auto relative flex gap-8 border">
                    {/* content */}
                    <div className="max-w-[820px] w-full">
                        <h1>{data?.title}</h1>
                        <div
                            className="tenms__description"
                            dangerouslySetInnerHTML={{
                                __html: data?.description,
                            }}
                        />
                        <Instructor {...instructor} />
                        {courseLayout && <CourseLayout {...courseLayout} />}
                        <LearningFromCourse {...pointers} />
                        <ExclusiveFeatures {...exclusiveFeatures} />
                        <CourseDetails {...courseDetails} />
                    </div>

                    <SideBar media={media} cta={cta} checklist={checklist} />
                </div>
            </section>
        </main>
    );
}

// import {
//     SectionCourseDetails,
//     SectionCourseLayout,
//     SectionExclusiveFeatures,
//     SectionInstructor,
//     SectionPointers,
// } from "@/types";
// import CourseLayout from "@/components/sections/home/CourseLayout";
// import LearningFromCourse from "@/components/sections/home/LearningFromCourse";
// import ExclusiveFeatures from "@/components/sections/home/ExclusiveFeatures";
// import CourseDetails from "@/components/sections/home/CourseDetails";
// import SideBar from "@/components/sections/home/SideBar";
// import Instructor from "@/components/sections/home/Instructor";

// export default async function Home() {
//     const lang = "en";
//     const res = await fetch(
//         `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
//         {
//             headers: {
//                 "X-TENMS-SOURCE-PLATFORM": "web",
//             },
//         }
//     );

//     const course = await res.json();
//     const data = course.data;

//     const instructor = data?.sections?.find(
//         (section: SectionInstructor) => section.type === "instructors"
//     );
//     const courseLayout = data?.sections?.find(
//         (section: SectionCourseLayout) => section.type === "features"
//     );
//     const pointers = data?.sections?.find(
//         (section: SectionPointers) => section.type === "pointers"
//     );
//     const exclusiveFeatures = data?.sections?.find(
//         (section: SectionExclusiveFeatures) =>
//             section.type === "feature_explanations"
//     );
//     const courseDetails = data?.sections?.find(
//         (section: SectionCourseDetails) => section.type === "about"
//     );

//     const media = data?.media;
//     const cta = data?.cta_text;
//     const checklist = data?.checklist || [];
//     // console.log(course.data.sections);
//     // console.log("instructor", instructor);
//     // console.log("courseLayout", courseLayout);
//     // console.log("pointers", pointers);
//     // console.log("exclusiveFeatures", exclusiveFeatures);
//     // console.log("courseDetails", courseDetails);
//     console.log("CHECKLIST", data.checklist);

//     return (
//         <main>
//             <section className="">
//                 <div className="max-w-[1200px] w-full mx-auto relative border">
//                     <SideBar media={media} cta={cta} checklist={checklist} />

//                     {/* content */}
//                     <div className="max-w-[820px] w-full pr-5">
//                         <h1>{data?.title}</h1>
//                         <div
//                             className="tenms__description"
//                             dangerouslySetInnerHTML={{
//                                 __html: data?.description,
//                             }}
//                         />
//                         <Instructor {...instructor} />
//                         {courseLayout && <CourseLayout {...courseLayout} />}
//                         <LearningFromCourse {...pointers} />
//                         <ExclusiveFeatures {...exclusiveFeatures} />
//                         <CourseDetails {...courseDetails} />
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }
