import { SeoData, SeoMeta, SeoSchema } from "@/types";
import Head from "next/head";

// const ldJson = (schema: SeoSchema) => {
//     return {
//         "@context": "https://schema.org",
//         "@type": schema.type,
//         [schema.meta_name]: schema.meta_value,
//     };
// };

export default function Seo({ seoData }: { seoData: SeoData }) {
    if (!seoData) return null;

    return (
        <Head>
            <title>{seoData?.title}</title>
            <meta name="description" content={seoData?.description} />
            {seoData?.keywords?.length > 0 && (
                <meta name="keywords" content={seoData.keywords.join(", ")} />
            )}
            {seoData?.defaultMeta?.map((meta: SeoMeta, index: number) => {
                if (meta.type === "property") {
                    return (
                        <meta
                            key={index}
                            property={meta.value}
                            content={meta.content}
                        />
                    );
                }
                if (meta.type === "name") {
                    return (
                        <meta
                            key={index}
                            name={meta.value}
                            content={meta.content}
                        />
                    );
                }
                return null;
            })}
            {seoData?.schema?.map((item: SeoSchema, index: number) => {
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
    );
}
