import { useState, useEffect} from "react"
import type { Post } from "../types/types"

const useFetch = (url: string) => {
    const [data, setData] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [retry, setRetry] = useState(false)
    
    useEffect(() => {
        async function fetchPosts() {
            if(!url) {
                setData([])
                setError(null)
                setRetry(false)
                setIsLoading(false)
            }

            try {
                setError(null)
                setIsLoading(true);
                setRetry(false)
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error fetching post status ${response.status}`)
                }
                const post = await response.json();
                setData(post)

            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                    setRetry(true)
                }
            } finally {
                setIsLoading(false)
            }
        }
        fetchPosts()
    }, [url])

    return { data, isLoading, error, retry}
}

export default useFetch