import { useState } from "react";

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // إخفاء الرسالة بعد 2 ثانية
            })
            .catch(err => console.error("فشل النسخ:", err));
    };

    return (
        <div>
            {copied && <span className="text-white ms-2"> ! تم النسخ </span>}
        <button type="button" className="buttonCopy  border-0 p-2 fw-bold " onClick={handleCopy}>نسخ</button>

        </div>
    );
}

export default CopyButton;
