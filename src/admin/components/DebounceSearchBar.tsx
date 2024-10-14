import { useEffect, useState } from "react"

interface DebounceSearchBarProps {
    id: string
    onDebounce: (query: string) => void
    placeholder: string
}

const DebounceSearchBar = (props: DebounceSearchBarProps) => {
    const { id, onDebounce, placeholder } = props;
    const [query, setQuery] = useState<string>("");
    const [debouncedQuery, setDebouncedQuery] = useState<string>(query);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const delay = 500;

        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        onDebounce(debouncedQuery);
    }, [debouncedQuery, onDebounce]);

    return (
        <input
            id={id}
            type="search"
            className="search input"
            placeholder={placeholder}
            onChange={handleChange}
            value={query}
        />
    )
}

export default DebounceSearchBar;
