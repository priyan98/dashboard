
import { XYPlot, LineSeries,XAxis,YAxis,VerticalGridLines, HorizontalGridLines} from 'react-vis'

const Chart =() => {

    const data = [
        {X:0, y:8},
        {X:1, y:4},
        {X:2, y:5},
        {X:3, y:9},
        {X:4, y:1},
        {X:5, y:7},
        {X:6, y:6},
        {X:7, y:3},
        {X:8, y:2},
        {X:9, y:0},
    ]
    return(
       <div style={{ marginTop:'15px'}}>

         <XYPlot height={300} width={300}>
            <VerticalGridLines/>
            <HorizontalGridLines />
            <XAxis />
            <YAxis/>
            <LineSeries data={data} color= "red" />
            <LineSeries data={data} color= "purple" />
            <LineSeries data={data} color= "yellow" />

         </XYPlot>
       </div>

    )
}

export default Chart;