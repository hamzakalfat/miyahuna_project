import "../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis,YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';
const Chart = () => {
    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 6 },
        { x: 2, y: 5 },
        { x: 3, y: 4 },
        { x: 4, y: 2 },
        { x: 5, y: 15 },
        { x: 6, y: 4 },
        { x: 7, y: 7 },
        { x: 17, y: 1 },
    
    ]
    return (
        <div style={{ marginTop: '15px'}}>
            <XYPlot height={300} width={500}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="purple" />
                <LineSeries data={data} color="yellow" />

            </XYPlot>

        </div>

    )
}
export default Chart;