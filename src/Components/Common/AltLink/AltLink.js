// import React from "react";
// import { Link } from "react-router-dom";
// // import {Link as ScrollLink} from "react-scroll";
// export default function AltLink(props)
// {
//     const { linkName, link, openInNewTab } = props;

//     const shouldUseA = link.includes(window.location.hostname);

//     // const finalJSX;

//     // switch (linkType)
//     // {
//     //     case "a":
//     //         finalJSX = <a href={link} >{linkName}</a>
//     //         break;
//     //     case "a-newTab":
//     //         <a href={link} target="_blank">{linkName}</a>
//     //         break;
//     //     case "routerLink":
//     //         <Link to={link}>{linkName}</Link>
//     //         break;
//     //     case "scrollLink":
//     //         <ScrollLink>
//     //             {linkName}
//     //         </ScrollLink>
//     //         break;
//     // }
//     const finalJSX = openInNewTab ?
//     <a href={link} target="_blank">{linkName}</a>
//     :
//     shouldUseA?
//     <Link to = {link}>{linkName}</Link>
//     :
//     <a href={link}>{linkName}</a>;


//     return (
//         finalJSX
//     );
// }