import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({
    tags,
    children,
    className,
    ...props
}: {
    tags: string
    children?: any
    className?: string
}) => (
    <Link
        to={`/search?tags=${encodeURIComponent(tags)}`}
        className={className}
        {...props}
    >
        {children || tags}
    </Link>
)

export default Links
