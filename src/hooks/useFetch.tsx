import { useState, useEffect} from "react"
import type { Post } from "../types/types"

const useFetch = (url: string) => {
    const [data, setData] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [retry, setRetry] = useState(false)
    
    useEffect(() => {
        const controller = new AbortController()

        async function fetchPosts() {
            if(!url) {
                setData([])
                setError(null)
                setRetry(false)
                setIsLoading(false)
                return;
            }

            try {
                setError(null)
                setIsLoading(true);
                setRetry(false)
                const response = await fetch(url,{signal: controller.signal});
                if (!response.ok) {
                    throw new Error(`Error fetching post status ${response.status}`)
                }
                const post: Post[] = await response.json();
                setData(post)

            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    return
                }

                if (error instanceof Error) {
                    setError(error.message)
                    setRetry(true)
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchPosts()

        return () => {
            controller.abort()
        }
    }, [url])

    return { data, isLoading, error, retry}
}

export default useFetch