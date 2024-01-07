import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import dayjs from "dayjs";

interface Blog {
    id: number;
    photo_url: string;
    title: string;
    description: string;
    category: string;
    created_at: string;
}

const getBlogs = async (): Promise<{ blogs: Blog[] }> => {
    const res = await fetch(
        "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=30"
    );
    if (!res.ok) {
        throw new Error("Sorry! Something went Wrong.");
    }
    return await res.json();
};

function BlogsPage() {
    const [blogsData, setBlogsData] = useState<{ blogs: Blog[] }>({ blogs: [] });
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlogs();
                setBlogsData(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once on mount

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredBlogs =
        selectedCategory === "all"
            ? blogsData.blogs
            : blogsData.blogs.filter((blog) => blog.category === selectedCategory);

    return (
        <div className="p-4 mx-auto flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold mb-2">
                Explore Blogs Based on Your Interests!
            </h1>
            <p className="text-gray-600 mb-4">
                Select a category below to discover blogs tailored to your preferences.
            </p>
            <div className="flex gap-5 mb-10">
                <button onClick={() => handleCategoryChange("all")}>All</button>
                <button onClick={() => handleCategoryChange("love")}>Love</button>
                <button onClick={() => handleCategoryChange("math")}>Math</button>
                <button onClick={() => handleCategoryChange("programming")}>
                    Programming
                </button>
                <button onClick={() => handleCategoryChange("gaming")}>Gaming</button>
            </div>
            {filteredBlogs.length > 0 ? (
                <div className="flex gap-5 flex-wrap">
                    {filteredBlogs.map((post: Blog) => (
                        <Link href={`/blogs/${post.id}`} key={post.id}>
                            <Card>
                                <CardContent className="max-w-xs flex flex-col gap-1 p-4">
                                    <Image
                                        src={post.photo_url}
                                        alt={post.title}
                                        width={300}
                                        height={300}
                                        className=" object-fill rounded-sm"
                                    />
                                    <CardTitle>{post.title}</CardTitle>
                                    <CardDescription>{post.description}</CardDescription>
                                    <div className="flex justify-between items-center">
                                        <Badge className="capitalize " variant="default">{post.category}</Badge>
                                        <CardFooter className="font-semibold">
                                            Posted:{dayjs(post.created_at).format("DD-MMM-YYYY")}
                                        </CardFooter>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            ) : (
                <div>No Blog Found</div>
            )}
        </div>
    );
}

export default BlogsPage;
