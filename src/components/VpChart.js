import React from 'react';
import './VpChart.scss'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import cn from 'classnames';

import vp from '../images/vp.png'

const VpChart = ({data, handleClick}) => {
    return (
        <div className="chart_wrap">
            <div className="vp_chart">
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} onClick={handleClick}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            
            <div className="vp_table">
                <table>
                    <tr>
                        <th>턴 : 3</th>
                        <th>차례 : zz5414</th>
                    </tr>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className={cn("padding")} colSpan="2"> zz5414 </th>
                            <th className={cn("padding")} colSpan="2"> yuby0312 </th>
                            <th className={cn("padding")} colSpan="2"> seagull1205 </th>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            <td className={cn("padding")}> <img src={vp}/> </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                        </tr>
                        <tr>
                            <td className={cn('padding', "bottom")}> <img src={vp}/> </td>                            
                            <td className="bottom"> 3 </td>
                            <td className={cn('red', 'bottom')}> +1 </td>
                            <td className="bottom"> 3 </td>
                            <td className={cn('red', 'bottom')}> +1 </td>
                            <td className="bottom"> 3 </td>
                            <td className={cn('red', 'bottom')}> +1 </td>
                        </tr>

                        <tr>
                            <td> <img src={vp}/> </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                        </tr>
                        <tr>
                            <td> <img src={vp}/> </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                        </tr>
                        <tr>
                            <td className="bottom"> <img src={vp}/> </td>
                            <td className="bottom"> 3 </td>
                            <td className={cn('red', 'bottom')}> +1 </td>
                            <td className="bottom"> 3 </td>
                            <td className={cn('red', 'bottom')}> +1 </td>
                            <td className="bottom"> 3 </td>
                            <td className={cn('red', 'bottom')}> +1 </td>
                        </tr>

                        <tr>
                            <td> <img src={vp}/> </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                        </tr>
                        <tr>
                            <td> <img src={vp}/> </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                            <td> 3 </td>
                            <td className="red"> +1 </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default VpChart;