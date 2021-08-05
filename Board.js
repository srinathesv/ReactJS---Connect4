export default function Board(props){
    var rows = []
    for(let i = 5; i >= 0; i--){
        
        rows.push(<Row key = {i} row = {i} cells = {props.cells[i]} handleClick = {props.handleClick}/>)
    }
    return (
        <div>
            {rows}
        </div>
    )
 }
  export const Row=(props)=>
  {
    var style = 
    {
          display: "flex"
    }
    var cells = []
    for(let i = 0; i < 7; i++)
    {
        cells.push(<Cell key = {i} cell = {props.cells[i]} row = {props.row} col = {i} handleClick = {props.handleClick}/>)
    }
    return (
        <div style = {style}>
            {cells}
        </div>
    )
}
export const  Cell=(props)=>
{
  
    var style = {
        height:50,
        width:50,
        // border:"1px solid black",
        backgroundColor:""
    }
    
    return (
        <div style = {style} onClick = {() => props.handleClick(props.row,props.col)}>
            <Circle cell = {props.cell}/>
        </div>
    )
}
 export const Circle=(props)=>
 {
    var color = "white"
    if(props.cell == 1){
        color = "#004500"
    }
    else if(props.cell == 2){
        color = "#f5da1b"
    }

    var style = {
        backgroundColor:color,
        border: "1px solid black",
        borderRadius: "100%",
        paddingTop: "98%"
    }
    return (
       <div style = {style}></div>
    )
}  


