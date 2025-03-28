import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CopyButton from "./CopyButton";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQPgIXj2IPz7Ij2RwjooBO8jld4WeUeASExFQqFVkkeFOfB9VwJv-3nokOnH6CWDvBmJqxF5MMogEkp/pub?output=csv");
                const textData = await response.text();

                const rows = textData.split("\n").map(row => row.replace(/"/g, "").trim()).filter(row => row);
                const dataRows = rows.slice(1);

                const postsData = dataRows.map(row => {
                    const columns = row.split(",");
                    const title = columns[0] || "بدون عنوان";
                    const text = columns[1] || "بدون نص";
                    let date = columns[2] ? columns[2].trim() : "تاريخ غير متوفر";

                    if (date && !isNaN(Date.parse(date))) {
                        date = new Date(date).toLocaleDateString("ar-EG");
                    }

                    return { title, text, date };
                }).reverse(); // عرض الأحدث أولًا

                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching data:", error);
                setPosts([{ title: "خطأ", text: "حدث خطأ في جلب البيانات!", date: "غير متوفر" }]);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <motion.div 
                    className="text-center fs-4 fw-bold p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    ⏳ جاري تحميل الخواطر...
                </motion.div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {posts.map((post, index) => (
                        <motion.div 
                            key={index} 
                            className="post p-3 col-lg-8 m-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="title row p-3 d-flex align-items-center">
                                <div className="col text-end fw-bold fs-3">{post.title}</div>
                                <div className="col-auto">
                                    <i className="bi bi-person-heart fs-2"></i>
                                </div>
                            </div>
                            <div className="content fs-5 pt-3 pb-3 text-end" id="content">
                                {post.text}
                            </div>
                            <div className="text-muted text-end fs-6">📅 تاريخ النشر: {post.date}</div>
                            <CopyButton text={post.text} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default Posts;
