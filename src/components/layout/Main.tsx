import { useContext, useState } from "react"
import Pager from "../ui/Pager"
import { URLContext } from "../../context/context"
import useFetch from "../../hooks/useFetch"
import PostsFetched from "./PostsFetched"

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const urlContext = useContext(URLContext)

    if (!urlContext) {
        throw new Error("Main must be used within URLContext.Provider")
    }

    const { submittedUrl } = urlContext
    const { data, error } = useFetch(submittedUrl)

    if(error) return <div className="text-center font-bold text-xl">Error: {error}</div>
    
    // if (isLoading) return <div className="text-center font-bold text-xl">Loading...</div>

    const itemsPerPage = 10

    const lastIndex = currentPage * itemsPerPage;
    const firsPage = lastIndex - itemsPerPage;

    const currentData = data.slice(firsPage, lastIndex)

    function nextItems() {
        if(currentPage === itemsPerPage) return;
        setCurrentPage(prev => prev + 1)
    }

    function previousItems() {
        if(currentPage === 1) return
        setCurrentPage(prev => prev - 1)

    }

    if (!data.length) return <div className="text-center font-bold text-xl">No posts found.</div>

    return (
        <>
            <Pager postLength={data.length} nextItems={nextItems} previousItem={previousItems} currentPage={currentPage} itemsPerPage={itemsPerPage}/>
            <PostsFetched data={currentData} />
        </>
    )
}

export default Main