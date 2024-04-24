import AddNewTaskComponent from '@/components/AddNewTaskComponent'
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import ListTodoComponent from '@/components/ListTodoComponent'
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import React from 'react'

const listPage = () => {
  return (
    <main>
        <div className='w-full flex '>
            <div className='w-[20%]'>
                <SidebarComponent/>
            </div>
            <div className='w-full pl-10'>
                <NavbarComponent/>
                <div className='px-4 mt-5 flex gap-10'>
                  <div className='w-[700px]'>
                          <ListBoardComponentHeader/>
                          <div className='mt-10'>
                              <ListTodoComponent/>
                          </div>
                  </div>
                  <div >
                    <MonthlyStatisticsComponent/>
                  </div>
                    
                </div>
                
            </div>
        </div>
        
    </main>
  )
}

export default listPage