import React, { useState } from 'react'

interface ServeItemProps {
  item: string
  isSelected: boolean
  onSelect: (string: string) => void
}

const ServeItem = ({ item, isSelected, onSelect }: ServeItemProps) => {
  const handleServesChange = (serves: string) => {
    onSelect(serves)
  }

  return (
    <div
      onClick={() => handleServesChange(item)}
      className={`${
        isSelected ? 'bg-[#7DDEC1]' : ''
      } h-[35px] w-[auto] flex items-center justify-center py-[10px] px-[10px] rounded-full border-[1.5px] border-solid border-[#7DDEC1] cursor-pointer`}
    >
      {item}
    </div>
  )
}

export default ServeItem
