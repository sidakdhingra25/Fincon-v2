"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {TrendingUp} from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import MaxWidthWrapper from '../../../../components/MaxWidth';


const monthlyData = [
  { month: 'Jan', calls: 1000, meetings: 20 },
  { month: 'Feb', calls: 5000, meetings: 120 },
  { month: 'Mar', calls: 12000, meetings: 280 },
  { month: 'Apr', calls: 25000, meetings: 520 },
  { month: 'May', calls: 45000, meetings: 890 },
  { month: 'Jun', calls: 75000, meetings: 1450 }
];

const savingsData = [
  { month: 'Month 1', savings: 35000 },
  { month: 'Month 2', savings: 70000 },
  { month: 'Month 3', savings: 105000 },
  { month: 'Month 4', savings: 140000 },
  { month: 'Month 5', savings: 175000 },
  { month: 'Month 6', savings: 210000 }
];

const comparisonData = [
  { Month: 'Jan', house: '$30,000',you: '$10,000', Monthly: '$20,000', Cumulative: '$20,000' },
  { Month: 'Feb', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$40,000' },
  { Month: 'Mar', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative : '$60,000' },
  { Month: 'Apr', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$80,000'},
  { Month: 'May', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$100,000'},
  { Month: 'Jun', house: '$30,000', you: '$10,000', Monthly: '$20,000', Cumulative: '$120,000'}
];

export function CaseStudy() {
  return (
    <section className="py-24 relative">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-block bg-electric-blue/10 px-6 py-2 rounded-full border border-electric-blue/30 mb-6">
            <span className="text-electric-blue font-semibold">Case Study Results</span>
          </div> */}
          <h2 className="text-3xl font-bold mb-4 text-black">
            Financial Growt, <span className="text-electric-blue">Impact</span>
          </h2>
          <p className="text-black/70 max-w-3xl mx-auto">
            See how our financial strategies transformed business outcomes
          </p>
        </motion.div>
        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className=" p-6  "
          >
            <h3 className="text-xl font-bold mb-6 text-black">Growth Trajectory</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(37, 99, 235, 0.1)" />
                  <XAxis dataKey="month" stroke="#000000" />
                  <YAxis stroke="#000000" />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(37, 99, 235, 0.1)',
                      borderRadius: '8px',
                      color: '#000000'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="calls"
                    stroke="#2563eb"
                    fill="url(#callsGradient)"
                    name="Calls"
                  />
                  <Area
                    type="monotone"
                    dataKey="meetings"
                    stroke="#FFFFFF"
                    fill="rgba(255, 255, 255, 0.1)"
                    name="Meetings"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Cost Savings Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-6"
          >
            <h3 className="text-xl font-bold mb-6 text-black">Cumulative Savings</h3>
            <div className="h-[300px] ">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={savingsData}>
                  <defs>
                    <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(37, 99, 235, 0.1)" />
                  <XAxis dataKey="month" stroke="#000000" />
                  <YAxis
                    stroke="#000000"
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(37, 99, 235, 0.1)',
                      borderRadius: '8px',
                      color: '#000000'
                    }}
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Savings']}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#2563eb"
                    fill="url(#savingsGradient)"
                    name="Savings"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-electric-blue/10 overflow-hidden mb-16"
        >
          <div className="grid grid-cols-5 gap-4 p-6 font-bold text-lg border-b border-electric-blue/10">
            <div className="text-[#00008B]">Month</div>
            <div className="text-[#00008B]">Cost if in-house</div>
            <div className="text-[#00008B]">Cost with you</div>
            <div className="text-[#00008B]">Monthly Savings</div>
            <div className="text-[#00008B]">Cumulative Savings</div>
          </div>
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-5 gap-4 p-6 border-b border-electric-blue/10 last:border-0"
            >
              <div className="font-medium text-black">{row.Month}</div>
              <div className="text-black/70">{row.house}</div>
              <div className="text-electric-blue">{row.you}</div>
              <div className="flex items-center gap-2 text-electric-blue">
                <TrendingUp className="h-5 w-5" />
                {row.Monthly}</div>
              <div className="text-electric-blue flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />{row.Cumulative}</div>
            </motion.div>
          ))}
        </motion.div>
        
      </MaxWidthWrapper>
    </section>
  );
}