// import React from "react";
// import ButtonTemplate from "../menu/ButtonTemplate";
// import {getMenuItemByTag} from "../menu/MenuHandler";
// import {isMobile} from 'react-device-detect';
// import NoGame from "./NoGame";
//
// class MetalSlug extends React.Component{
//     render() {
//         const item = getMenuItemByTag('back');
//         if (isMobile) return <NoGame/>
//         return (
//             <div>
//                 <iframe title='Metal Slug' src="https://www.retrogames.cc/embed/9157-metal-slug-super-vehicle-001.html" width="600"
//                         height="450" frameBorder="no" allowFullScreen="true" webkitallowfullscreen="true"
//                         mozallowfullscreen="true" scrolling="no">
//                 </iframe>
//                 <ButtonTemplate
//                     key={item.id}
//                     id={item.id}
//                     width={item.width}
//                     height={item.height}
//                     svgColor={item.svgColor}
//                     textColor={item.textColor}
//                     textField={item.textField}
//                     icon={item.icon}
//                     iconColor={item.iconColor}
//                     tag={item.tag}
//                     returnState={this.props.returnState}
//                 />
//             </div>
//         )
//     }
// }
//
// export default MetalSlug;