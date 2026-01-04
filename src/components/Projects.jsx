'use client'

import React from 'react'

const Projects = () => {
  return (
    <>
      {/* Section Title */}
      <div className="absolute top-[1160px] left-20 font-mango-grotesque font-semibold italic text-variable-collection-black text-8xl tracking-[0] leading-normal whitespace-nowrap">
        What I make
      </div>

      {/* SiMO Project Card */}
      <div className="flex flex-col w-[857px] h-[580px] items-start justify-center gap-[22px] px-0 py-[46px] absolute top-[1280px] left-[981px] rounded-[60px]">
        <div className="relative w-fit font-nohemi font-normal text-variable-collection-black text-5xl tracking-[0] leading-[48.5px] whitespace-nowrap">
          SiMO
        </div>

        <p className="relative w-fit font-nohemi font-normal text-variable-collection-black text-[32px] tracking-[0] leading-[32.3px] whitespace-nowrap">
          SiMple mockup generator for designers
        </p>

        <div className="relative w-[517px] font-nohemi font-normal text-variable-collection-black text-2xl tracking-[0] leading-[24.3px]">
          2025.10~2025.12
        </div>

        <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="flex w-[163px] items-center justify-center gap-2.5 pt-4 pb-3.5 px-[22px] relative bg-variable-collection-black rounded-[40px]">
              <div className="relative w-fit mt-[-1.00px] font-nohemi font-medium text-variable-collection-white text-xl tracking-[0] leading-normal whitespace-nowrap">
                UX research
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="flex w-[163px] items-center justify-center gap-2.5 pt-4 pb-3.5 px-[22px] relative bg-variable-collection-black rounded-[40px]">
              <div className="relative w-fit mt-[-1.00px] font-nohemi font-medium text-variable-collection-white text-xl tracking-[0] leading-normal whitespace-nowrap">
                UI Design
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="flex w-[163px] items-center justify-center gap-2.5 pt-4 pb-3.5 px-[22px] relative bg-variable-collection-black rounded-[40px]">
              <div className="relative w-fit mt-[-1.00px] ml-[-3.50px] mr-[-3.50px] font-nohemi font-medium text-variable-collection-white text-xl tracking-[0] leading-normal whitespace-nowrap">
                Development
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col h-[83px] items-start justify-end gap-2.5 relative">
          <div className="flex w-44 h-[83px] items-center justify-center gap-2.5 pt-3 pb-2 px-3.5 relative bg-variable-collection-white rounded-[20px]">
            {/* Temporary placeholder for Visit component */}
            <div className="relative w-[29px] h-[29px] aspect-[1] bg-variable-collection-black rounded-sm" />
            <div className="relative w-fit font-nohemi font-medium text-variable-collection-black text-2xl tracking-[0] leading-normal whitespace-nowrap">
              Visit site
            </div>
          </div>
        </div>
      </div>

      {/* Project Placeholder Cards */}
      <div className="absolute top-[1880px] left-[78px] w-[870px] h-[580px] bg-variable-collection-white rounded-[60px] aspect-[1.5]" />
      <div className="absolute top-[1880px] left-[970px] w-[868px] h-[580px] bg-variable-collection-white rounded-[60px] aspect-[1.5]" />
      <div className="absolute top-[2480px] left-[81px] w-[869px] h-[580px] bg-variable-collection-white rounded-[60px] aspect-[1.5]" />
      <div className="absolute top-[2480px] left-[972px] w-[868px] h-[580px] bg-variable-collection-white rounded-[60px] aspect-[1.5]" />
      <div className="absolute top-[3080px] left-20 w-[868px] h-[580px] bg-variable-collection-white rounded-[60px] aspect-[1.5]" />
      <div className="absolute top-[3080px] left-[970px] w-[868px] h-[580px] bg-variable-collection-white rounded-[60px] aspect-[1.5]" />
    </>
  )
}

export default Projects
