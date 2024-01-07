import { Badge } from "@/components/ui/badge";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";

const getBlogData = async (id: number) => {
    const res = await fetch(
        `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
    );
    if (!res.ok) {
        throw new Error("Could not retrieve blog posts");
    }
    return await res.json();
};
async function BlogDetail({ params }: any) {
    const { blog } = await getBlogData(params.id);

    return (
        <div className="p-24 flex flex-col gap-1 flex-wrap">
            <CardTitle className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                {blog.title}
            </CardTitle>
            <CardHeader className="flex">
            <Image
                src={blog.photo_url}
                alt={blog.title}
                width={400}
                height={300}
                className=" rounded-sm items-center pb-4"
            />
            <CardDescription>{blog.description}</CardDescription>
                                        <Badge className="capitalize w-32 text-center justify-center" variant="default">{blog.category}</Badge>
                                        <CardFooter className="font-semibold">
                                            Posted:{dayjs(blog.created_at).format("DD-MMM-YYYY")}
                                        </CardFooter>
            </CardHeader>
            <CardContent>{`${blog.content_text}`}</CardContent>
        </div>
    );
}

export default BlogDetail;