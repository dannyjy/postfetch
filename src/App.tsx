import { useState } from "react"
import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import { URLContext } from "./context/context"

const App = () => {
    const [submittedUrl, setSubmittedUrl] = useState("")

    return (
        <URLContext.Provider value={{ submittedUrl, setSubmittedUrl }}>
            <div className="text-gray-800 px-4 sm:px-10 md:px-20 lg:px-30 xl:px-50 2xl:px-60 py-4 space-y-8">
                <Header />
                <Main />
            </div>
        </URLContext.Provider>
    )
}

export default App