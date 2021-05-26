import ButtonTemplate from "../menu/ButtonTemplate";
import React from "react";
import {getMenuItemByTag} from "../menu/MenuHandler";

export default function EnterLink(){
    const back = getMenuItemByTag('back');
    return(
        <div>
            <h1> Welcome in the media player </h1>
            <p> Here you can play your media </p>
            <p> Just add the link or file and push the button </p>
            <p> Supported format: .m3u</p>
            <form>
                <label>Enter link</label>
                <input type="url" name="url" required/>
                <input type="submit" value="Play" />
            </form>
            <form>
                <label>Enter file</label>
                <input type="file" name="file" required/>
                <input type="submit" value="Play" />
            </form>
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
                tag='menu'
            />
        </div>
    )
}