import { useState, useEffect } from "react";

/**
 * Fetches a repo's star count from the GitHub API.
 * The API is rate-limited to 60 requests/hr per IP for unauthenticated
 * requests, so `fallback` is rendered instead of an error or a '?' when the
 * request fails - keep it at or just below the real count.
 */
function useStars(repo, fallback) {
    const [stars, setStars] = useState(fallback);

    useEffect(() => {
        fetch(`https://api.github.com/repos/jopo86/${repo}`)
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => {
                if (typeof data.stargazers_count === "number") setStars(data.stargazers_count);
            })
            .catch(e => console.log("Error fetching: ", e));
    }, [repo]);

    return stars;
}

export default useStars;
