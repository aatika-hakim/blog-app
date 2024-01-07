'use client'
import React, { useState, useEffect } from 'react';
import BlogsPage from '@/app/blogs/page';
//import BlogDetails from '@/app/blogs/blogDetail';
import Loading from '@/app/loading';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []); 

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
            {loading ? <Loading /> : <BlogsPage />}
        </main>
    );
}
