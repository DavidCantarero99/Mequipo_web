import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image = "/Mequipo.svg", // Default image
    url = window.location.href,
    type = "website"
}) => {
    const siteTitle = "Mequipo | Industrial Distributor";

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description} />

            {/* Open Graph Metadata */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter Cards Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};
