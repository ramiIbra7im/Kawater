import { useState, useEffect } from "react";
import CopyButton from "./CopyButton";

function Posts() {
    const [posts, setPosts] = useState([{ title: "جاري التحميل...", text: "جاري تحميل الخواطر...", date: "..." }]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQPgIXj2IPz7Ij2RwjooBO8jld4WeUeASExFQqFVkkeFOfB9VwJv-3nokOnH6CWDvBmJqxF5MMogEkp/pub?output=csv");
                const textData = await response.text();

                const rows = textData.split("\n").map(row => row.replace(/"/g, "").trim()).filter(row => row);

                // **تجاهل الصف الأول (عناوين الأعمدة)**
                const dataRows = rows.slice(1);

                // تحويل البيانات إلى كائنات { title, text, date }
                const postsData = dataRows.map(row => {
                    const columns = row.split(",");

                    const title = columns[0] || "بدون عنوان";
                    const text = columns[1] || "بدون نص";
                    let date = columns[2] ? columns[2].trim() : "تاريخ غير متوفر"; // استخدام التاريخ كما هو

                    // التأكد من أن التاريخ لا يظهر كـ "Invalid Date"
                    if (date && !isNaN(Date.parse(date))) {
                        date = new Date(date).toLocaleDateString("ar-EG");
                    }

                    return { title, text, date };
                });

                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching data:", error);
                setPosts([{ title: "خطأ", text: "حدث خطأ في جلب البيانات!", date: "غير متوفر" }]);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            {posts.map((post, index) => (
                <div key={index} className="post p-3 col-lg-8 m-3">
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
                </div>
            ))}
        </div>
    );
}

export default Posts;
