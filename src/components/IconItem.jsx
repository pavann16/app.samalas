export default function CustomIcon (props){

    const {src, } =props;


    const MuiSrc = src;
    return (<>
        {typeof(src) === 'object' ? <span>
            <MuiSrc></MuiSrc>
        </span>:<img src={src}></img>}
    
    </>)

}