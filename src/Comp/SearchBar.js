function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <input
            type="text"
            placeholder=" ...ابحث في الخواطر"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control my-3 text-end"
        />
    );
}

export default SearchBar;
