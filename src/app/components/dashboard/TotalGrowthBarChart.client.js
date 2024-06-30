import { useEffect } from 'react';


// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// chart data
import chartData from './chart-data/total-growth-bar-chart';

// types
import PropTypes from 'prop-types';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
    const theme = useTheme();
   

   
    const { primary,secondary } = theme.palette.text;
   
    const grey200 = theme.palette.grey[200];
    const grey500 = theme.palette.grey[500];

    const primary200 = theme.palette.primary[200];
   

    useEffect(() => {
        const newChartData = {
            ...chartData.options,
           
            stacked: true,
            xaxis: {
                labels: {
                  style: {
                    colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
                  }
                }
              },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`donut`, 'updateOptions', newChartData);
        }
    }, [ primary200, primary, grey200, isLoading, grey500,secondary]);

    return (
        <>
            <Chart {...chartData} />
        </>
    );
};

TotalGrowthBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
