export default function SideBySide({left, right, lcolor='white', rcolor='white', height='83vh'}){

    return (
        <div className="side-by-side-main" style={{backgroundColor:lcolor, height:height}}>
            <div className="side-left">
                {left}
            </div>
            <div className="side-right" style={{backgroundColor:rcolor}}>
                {right}
            </div>
        </div>
    )
}