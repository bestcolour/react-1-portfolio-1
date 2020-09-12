import React from "react";
import { Link } from "react-router-dom";
export default function AltLink(props)
{
    const { linkName, link, openInNewTab, style} = props;

    const shouldUseA = link.includes(window.location.hostname);

    const finalJSX = openInNewTab ?
        <a href={link} target="_blank">{linkName}</a>
        :
        shouldUseA?
        <Link to = {link}>{linkName}</Link>
        :
        <a href={link}>{linkName}</a>;

    return (
        finalJSX
    );
}