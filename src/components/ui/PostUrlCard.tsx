import { useContext } from "react"
import { URLContext } from "../../context/context"
import Button from "./Button"
import useFetch from "../../hooks/useFetch"

const PostUrlCard = () => {
    const urlContext = useContext(URLContext)

    if (!urlContext) {
        throw new Error("PostFetcherCard must be used within URLContext.Provider")
    }

    const { submittedUrl, setSubmittedUrl } = urlContext

    function handleSubmit(formData: FormData) {
        const url = formData.get("url")
        if (typeof url !== "string") return

        const nextUrl = url.trim()
        if (!nextUrl) return

        setSubmittedUrl(nextUrl)
    }

    const { isLoading, retry } = useFetch(submittedUrl)

    return (
        <div className="rounded-2xl px-8 py-14 border-2 border-gray-300 space-y-4">
            <section>
                <h1 className="font-bold text-xl">Fetch Posts</h1>
                <h1>Enter the API endpoint URL to fetch the post from</h1>
            </section>
            <form action={handleSubmit} className="flex gap-2">
                <input type="text" name="url" placeholder='Enter url....' className="w-full bg-white border-2 rounded-xl border-[#d1d5db] py-1.5 px-2.5" />
                <button className="bg-[#141413] px-6 py-2 text-[#fafaf8] font-medium rounded-lg cursor-pointer">{isLoading ? "Fetching..." : "Fetch"}</button>
                {retry ? <Button text={isLoading && retry === true ? "Retrying..." :"Retry"} color="border-[#d1d5db]" handleClick={() => handleSubmit}/> : null}
            </form>
        </div>
    )
}

export default PostUrlCard