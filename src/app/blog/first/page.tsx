import React from "react";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: {
        absolute: 'First Blog'
    }
}

const FirstBlog: React.FC = (): JSX.Element => {
    return (
        <h2>
            First Blog
        </h2>
    )
}

export default FirstBlog;