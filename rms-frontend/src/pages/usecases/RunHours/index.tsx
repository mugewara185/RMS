import React from 'react'
import MainLayout from '../../../components/Layout/MainLayout'
import RunHoursCard from '../../../components/RunHours/RunHoursCard'

const RunHoursDashBoard = () => {
  return (
    <MainLayout title={'RunHours'}>
      <div className="w-full px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RunHoursCard />
          <RunHoursCard />
          <RunHoursCard />
        </div>
      </div>
    </MainLayout>
  )
}

export default RunHoursDashBoard
