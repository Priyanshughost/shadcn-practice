import React from 'react'
import Chart from './Chart'
import Areachart from './Areachart'
import { ChartPieInteractive } from './PieChart'
import ItemList from './ItemList'
import Products from './Products'

function Home() {
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
    <div className='col-span-1 sm:col-span-2 border-2 h-fit'>
      <Chart/>
    </div>
    <div className='sm:col-span-1 overflow-scroll'>
      <ItemList/>
    </div>
    <div>
      <ChartPieInteractive/>
    </div>
    <div className='my-10 w-full sm:col-span-2 flex justify-center items-center'>
      <Products/>
    </div>
    <div className='sm:col-span-2'>
      <Areachart/>
    </div>
    </div>
  )
}

export default Home