import React from 'react'

const AccessoriesFilterOption = () => {
  return (
    <div className='mt-10 flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Gaming Accessories Catalog</h2> 
        <h2>Comfortable gaming gears </h2>
      </div>
      <div className='flex gap-5'>
      <select className="select select-bordered w-full max-w-xs" defaultValue="default">
  <option disabled value="default">
    Accessories 
  </option>
  <option value="Keyboard">Keyboard</option>
  <option value="Mouse">Mouse</option>
  <option value="Headphone">Headphone</option>
</select>

<select className="select select-bordered w-full md:block max-w-xs hidden" defaultValue="default">
  <option disabled value="default">
   Price
  </option>
  <option value="Keyboard">Min-to-Max</option>
  <option value="Mouse">Max-to-Min</option>
</select>

      </div>
    </div>
  )
}

export default AccessoriesFilterOption