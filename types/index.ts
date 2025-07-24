type SectionBase = {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
};

export type CourseInstructor = {
    description: string;
    has_instructor_page: boolean;
    image: string;
    name: string;
    short_description: string;
    slug: string;
};

export type CourseLayoutItem = {
    icon: string;
    id: string;
    subtitle: string;
    title: string;
};

export type CoursePointer = {
    id: string;
    icon: string;
    color: string;
    text: string;
};

export type CourseExclusiveFeature = {
    checklist: string[];
    file_type: string;
    file_url: string;
    id: string;
    title: string;
    video_thumbnail: string;
};

export type CourseDetailsType = {
    title: string;
    description: string;
    icon: string;
    id: string;
};

export type SectionCourseLayout = SectionBase & {
    values: CourseLayoutItem[];
};

export type SectionInstructor = SectionBase & {
    values: CourseInstructor[];
};

export type SectionPointers = SectionBase & {
    values: CoursePointer[];
};

export type SectionExclusiveFeatures = SectionBase & {
    values: CourseExclusiveFeature[];
};

export type SectionCourseDetails = SectionBase & {
    values: CourseDetailsType[];
};

export type Media = {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
};

export type CtaText = {
    name: string;
    value: string;
};

export type Checklist = {
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
};

// export type Sections = {
//     type: string;
//     name: string;
//     description: string;
//     bg_color: string;
//     order_idx: number;
//     values:
//         | CourseInstructor[]
//         | CourseLayoutItem[]
//         | CoursePointer[]
//         | CourseExclusiveFeature[]
//         | CourseDetails[];
// };
