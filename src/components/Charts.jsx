import React from 'react'
import './charts.scss'
import { Pie, defaults, PolarArea, Radar, Bar } from 'react-chartjs-2'




export default function Charts() {


  return (
    <div className='charts'>
      <div className="container">
      <PolarArea
        data={{
          labels: ['Espiritualidade', 'Saúde', 'Desv. intelectual', 'Propósito', 'Finanças', 'Familia',
           'Relacionamento', 'Social', 'Lazer'],
          datasets: [
            {
              label: '# of votes',
              data: [7, 10, 5.5, 2, 8, 9, 10, 5, 1, 10],
              backgroundColor: [
                'rgba(199, 29, 29, 0.911)',
                'rgba(36, 80, 146, 0.925)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 4, 0.2)',
              ],
              borderColor: [
                'transparent',
                'transparent',
                'transparent',
                'transparent',
                'transparent',
                'transparent',
              ],
              borderWidth: 3,
            },
          ],
        }}
        height={700}
        width={800}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          scales: {
            r: {
              pointLabels: {
                display: true,
                centerPointLabels: false,
                font: {
                  size: 18
                }
              }
            }
          },
          animation: {
              animateRotate: true,
          },
          legend:
         {
            labels: {
              fontSize: 30,
              fontColor: 'rgb(255, 99, 132)'
            },
          },
        }}
      />
      </div>
      
    </div>
  )
}
