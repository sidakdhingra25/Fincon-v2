"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  expandedDescription: string
}

const ServiceCard = ({
  service,
  index,
  isExpanded,
  toggleCard,
}: {
  service: Service
  index: number
  isExpanded: boolean
  toggleCard: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl p-6 relative group transition-all duration-300 overflow-hidden border border-gray-100 min-h-[280px] ${
        isExpanded ? "mb-8" : ""
      }`}
    >
      <motion.div
        className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="mb-5">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
            className="p-3 bg-primary/10 rounded-xl text-primary inline-flex mb-4"
          >
            {service.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>

        <div className="mt-auto pt-4">
          <div className="h-12 flex items-center">
            <Button
              variant="outline"
              className="btn w-full justify-between bg-white hover:bg-blue-950 hover:text-white transition-colors duration-300 border-gray-200"
              onClick={toggleCard}
            >
              <span>Know More</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: {
                  height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                  opacity: { duration: 0.3, ease: "easeInOut" },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: 0.4, ease: [0.33, 0.1, 0.79, 1] },
                  opacity: { duration: 0.2, ease: "easeOut" },
                },
              }}
              className="overflow-hidden mt-4"
            >
              <div className="pt-4 border-t h-auto border-gray-200 mt-2">
                <p className="text-gray-700">{service.expandedDescription}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ServiceCard
