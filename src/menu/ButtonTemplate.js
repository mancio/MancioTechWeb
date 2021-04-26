import './ButtonTemplate.css';
import SelectIcon from "./icon/SelectIcon";

const ButtonTemplate = (props) => {
    const width = props.width;
    const height = props.height;
    const svgColor = props.svgColor;
    const textColor = props.textColor;
    const textField = props.textField;
    const icon = props.icon;
    const iconColor = props.iconColor;

    return(
        <div className='list'>
            <SelectIcon name={icon} iconColor={iconColor}/>

            <svg className='design-button' xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
                <rect width={width} height={height} rx="27.5" fill={svgColor}/>
                <text  x="50%" y="60%" className='button-text' dominantBaseline="middle" textAnchor="middle" fill={textColor} stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="25" letterSpacing="0.04em">{textField}</text>
            </svg>
        </div>
    )
}

export default ButtonTemplate;