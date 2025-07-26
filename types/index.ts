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

export interface OldInfo {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
}

export interface SEO {
    defaultMeta: string[];
    description: string;
    keywords: string[];
    schema: string[];
    title: string;
}

export type Section =
    | SectionCourseLayout
    | SectionInstructor
    | SectionPointers
    | SectionExclusiveFeatures
    | SectionCourseDetails;

export interface CourseData {
    slug: string;
    id: number;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    old_info: OldInfo;
    start_at: string;
    media: Media[];
    checklist: Checklist[];
    seo: SEO;
    cta_text: CtaText;
    sections: Section[];
    is_cohort_based_course: boolean;
    secondary_cta_group: unknown[];
    delivery_method: string;
}

export interface SeoMeta {
    content: string;
    type: string;
    value: string;
}

export interface SeoSchema {
    meta_name: string;
    meta_value: string;
    type: string;
}

export interface SeoData {
    defaultMeta: SeoMeta[];
    description: string;
    keywords: string[];
    schema: SeoSchema[];
    title: string;
}

export interface DefaultMeta {
    type: string;
    value: string;
    content: string;
}
