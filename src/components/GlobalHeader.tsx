import Link from "next/link"

const GlobalHeader = () => {
    return (
        <>
            <header
                style={{
                    backgroundColor: "lightblue",
                    padding: "1rem",
                    fontSize: "30px"
                }}
            >
			    <Link href='/blog'>Blogs |</Link>
                <Link href='/products'>Products |</Link>
            </header>
        </>
    )
}

export default GlobalHeader