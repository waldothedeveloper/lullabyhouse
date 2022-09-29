import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { ComparisonSlider } from 'react-comparison-slider'
import Image from 'next/future/image'
import img1 from '@/images/cleaning_tired_couple.jpeg'
import img2 from '@/images/happy_couple.jpeg'

//
export const SliderBeforeAfter = ({ aspectRatio, orientation, value }) => {
  return (
    <ComparisonSlider
      // onlyHandleDraggable
      orientation={orientation}
      defaultValue={value}
      itemOne={
        <Image
          src={img1}
          layout="fill"
          className="slatescale w-full object-cover"
          priority
          alt="tired couple cleaning their home before knowing about Lullaby House cleaning crew"
        />
      }
      itemTwo={
        <Image
          layout="fill"
          src={img2}
          className="w-full object-cover"
          priority
          alt="happy couple smiling for not having to clean because they hired the Lullaby House cleaning crew"
        />
      }
      aspectRatio={aspectRatio}
      handleBefore={
        <div className="h-full w-1 bg-gradient-to-r from-white to-transparent"></div>
      }
      handleAfter={
        <div className="h-full w-1 bg-gradient-to-r from-white to-transparent"></div>
      }
      handle={({ isFocused }) => {
        return (
          <div
            className={[
              'flex h-8 w-8 items-center justify-center rounded-full bg-white text-white',
              { ring: isFocused },
            ]}
          >
            <ChevronLeftIcon className="h-6 w-6 text-slate-400" />
            <ChevronRightIcon className="h-6 w-6 text-slate-400" />
          </div>
        )
      }}
    />
  )
}
