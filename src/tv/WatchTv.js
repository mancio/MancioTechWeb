import ButtonTemplate from "../menu/ButtonTemplate";
import {getMenuItemByTag} from "../menu/MenuHandler";
import {getParsedTvList} from "./ParsingHandler";
import {useEffect, useState} from "react";
import './WatchTv.css';

export default function WatchTv(){

    const back = getMenuItemByTag('back');
    const [tvList,setTvList] = useState([]);
    useEffect(() => {
        console.log(getParsedTvList());
        setTvList(getParsedTvList());
    },[])

    let id = -1;

    return(
        <div>
            <div className='tv-frame'>
                <table className='channel-list'>
                    <tbody>
                        {tvList.map(el => {
                            id++;
                            return(
                                <tr id={id} key={id}>
                                    <td>
                                        <p>{el.name}</p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ButtonTemplate
                key={back.id}
                id={back.id}
                width={back.width}
                height={back.height}
                svgColor={back.svgColor}
                textColor={back.textColor}
                textField={back.textField}
                icon={back.icon}
                iconColor={back.iconColor}
                tag='tv'
            />
        </div>
    )
}