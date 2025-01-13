import React from 'react'
import AdminLayout from '../layout'

const stats = [
  { name: 'Total No. of Farmers as of today', value: '405' },
  { name: 'Total No. of Farmworkers/Laborer as of today', value: '3.65', unit: 'mins' },
  { name: 'Total No. of Fisherfolk as of today', value: '3' },
  { name: 'Total No. of Agri Youth as of today', value: '98.5%' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-green-700/40 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8 border-b border-white/50 rounded-md">
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="flex-none rounded-full bg-green-400/10 p-1 text-blue-900">
                      <div className="size-2 rounded-full bg-current" />
                    </div>
                    <h1 className="flex gap-x-3 text-base/7">
                      <span className="font-semibold text-blue-900">Planetaria</span>
                      <span className="text-blue-900">/</span>
                      <span className="font-semibold text-blue-900">mobile-api</span>
                    </h1>
                  </div>
                  <p className="mt-2 text-xs/6 text-blue-900">Deploys from GitHub via main branch</p>
                </div>
                <div className="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none">
                  Production
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 bg-green-700/40 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/50 rounded-md">
                {stats.map((stat, statIdx) => (
                  <div
                    key={stat.name}
                    className={classNames(
                      statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                      'border-t border-white/50 px-4 py-6 sm:px-6 lg:px-8',
                    )}
                  >
                    <p className="text-sm/6 font-medium text-blue-900">{stat.name}</p>
                    <p className="mt-2 flex items-baseline gap-x-2">
                      <span className="text-4xl font-semibold tracking-tight text-blue-900">{stat.value}</span>
                      {stat.unit ? <span className="text-sm text-blue-900">{stat.unit}</span> : null}
                    </p>
                  </div>
                ))}
              </div>
    </AdminLayout>
  )
}
