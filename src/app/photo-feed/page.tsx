import Link from "next/link"
import wonderImages from "./wonders"
import Image from "next/image"

const Home = () => {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                Wonders of world
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    wonderImages.map(({id, src, name}) => {
                        return (
                            <Link key={id} href={`/photo-feed/${id}`}>
                                <Image
                                    alt={name}
                                    src={src}
                                    priority={true}
                                    className="w-full object-cover aspect-square"
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Home;