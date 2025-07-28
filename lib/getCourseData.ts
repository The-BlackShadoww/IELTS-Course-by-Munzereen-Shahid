// `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,

export const getCourseData = async (lang: string) => {
    const baseUrl =
        "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course";

    const res = await fetch(`${baseUrl}?lang=${lang}`, {
        headers: {
            "X-TENMS-SOURCE-PLATFORM": "web",
            accept: "application/json",
        },
    });

    if (!res.ok) throw new Error("Failed to fetch course data");
    return res.json();
};
