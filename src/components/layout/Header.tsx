import PostUrlCard from "../ui/PostUrlCard"

const Header = () => {
    return (
        <div className="space-y-6">
            <section>
                <h1 className="text-3xl font-bold pb-3">Post Fetcher</h1>
                <h1 className="text-xl">Enter a URL to fetch and display posts</h1>
            </section>
            <PostUrlCard />
        </div>
    )
}

export default Header