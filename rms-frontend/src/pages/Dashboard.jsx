import React from 'react'
import MainLayout from '../components/Layout/MainLayout';
import PlantSelector from '../components/PlantSelector';
import AssetLevelSelector from '../components/AssetLevelSelector';
import AssetTree from '../components/AssetTree';
import MetricCard from '../components/MetricCard';

const Dashboard = () => {
  return (
    <MainLayout>
      <PlantSelector/>
      <AssetLevelSelector/>
      <div>
        <MetricCard title="Health" value="Good" unit=""/>
        <MetricCard />
        <MetricCard title="Connection" value="Online" unit="colored-dot"/>
      </div>
      <AssetTree/>
    </MainLayout>
  )
}

export default Dashboard
