import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { mockGeographyData as data } from '../data/mockData';
import { geoFeature } from '../data/mockGeoFeature';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const GeographyChart = ({isDashboard=false}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <ResponsiveChoropleth
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.grey[100]
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            },
            tooltip:{
                container:{
                    color:colors.grey[300]
                }
            }
        }}
        data={data}
        features={geoFeature.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 50:100}
        projectionTranslation={isDashboard ? [.49,.6] : [ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        
        borderWidth={1}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            
        ]}
        legends={isDashboard?[]:[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    )
}

export default GeographyChart;