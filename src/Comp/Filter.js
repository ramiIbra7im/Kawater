function Filter({ posts, selectedTitle, setSelectedTitle }) {
    const uniqueTitles = [...new Set(posts.map(post => post.title))];

    return (
        <select className="form-select my-3 border-0 text-white text-end" value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}>
            <option value="" > النوع  </option>
            {uniqueTitles.map((title, index) => (
                <option className="op fw-bold" key={index} value={title}>{title}</option>
            ))}
        </select>
    );
}

export default Filter;
