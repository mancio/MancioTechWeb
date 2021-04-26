import './ButtonList.css';
import ButtonTemplate from "./ButtonTemplate";


function ButtonList(){
    const menu = [
        {
            id: 0,
            width:250,
            height:55,
            svgColor:'#00ff5f',
            textColor:'#000',
            textField:'SITE DESIGN',
            icon: 'TOOLS',
            iconColor: '#00ff5f'
        },
        {
            id: 1,
            width:250,
            height:55,
            svgColor:'#00ff5f',
            textColor:'#000',
            textField:'MY STORY',
            icon: 'CHIP',
            iconColor: '#00ff5f'
        }
    ];
    return(
        <div className='buttonList'>
            {menu.map(item => {
                return <ButtonTemplate key={item.id}
                    width={item.width}
                    height={item.height}
                    svgColor={item.svgColor}
                    textColor={item.textColor}
                    textField={item.textField}
                    icon={item.icon}
                    iconColor={item.iconColor}
                />
            })}
        </div>
    )
}

export default ButtonList;