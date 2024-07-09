import React, {useEffect, useState} from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', // Color de las líneas de la rejilla del eje X
          },
          ticks: {
            color: 'rgba(255, 255, 255, 1)', // Color de las etiquetas del eje X
          },
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.1)', // Color de las líneas de la rejilla del eje Y
          },
          ticks: {
            color: 'rgba(255, 255, 255, 1)', // Color de las etiquetas del eje Y
          },
        },
    },
  };
  const labels = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [325, 678, 123, 789, 456, 700, 800],
        
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
      }
    ],
  };
  
function BarChart() {
    const [windowWidth, setWindowWidth] = useState(1);




useEffect(() => {

  
  options.maintainAspectRatio = false;

  const handleResize = () => {
    

        console.log(window.innerWidth);
        if (window.innerWidth >= 1040) {
          options.maintainAspectRatio = false;
          setWindowWidth(1)
        }else{
        options.maintainAspectRatio = true;
        setWindowWidth(0)
        }
      
  };

  window.addEventListener('resize', handleResize);

  // Limpiar el evento al desmontar el componente
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <div    className={` flex flex-col w-full h-full items-center justify-center`}>
        <Bar   className='bg-black' key={windowWidth} options={options} data={data} />
    </div>
  )
}

export default BarChart