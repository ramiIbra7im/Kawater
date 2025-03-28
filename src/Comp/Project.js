import Footer from "./Footer";
import Posts from "./Posts";
import ScrollToTop from "./ScrollToTop";


function Project() {
    return (
        <>
            <div className="container row m-auto p-4">

              
                <Posts />
                            <ScrollToTop /> {/* ✅ إضافة الزر داخل التطبيق */}

                <Footer/>
            </div>
        
        </>
    )
}
export default Project;