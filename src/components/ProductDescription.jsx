import React from 'react'

const ProductDescription = () => {
  return (
   <div>
    <div className='flex gap-3 mt-4 mb-4 ml-6'>
      <button className='btn-dark rounded-full !text-xs !py-[6px] w-36'>Description</button>
      <button className='btn-white  rounded-full !text-xs !py-[6px] w-36'>Care Guide</button>
      <button className='btn-white rounded-full !text-xs !py-[6px] w-36'>Size Guide</button>
    </div>
    <div className='flex flex-col pb-8'>
      <p className='text-sm ml-6 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam adipisci repudiandae numquam! At, quos. Obcaecati in omnis esse nisi culpa eum quo molestias sapiente aperiam quis optio, enim quas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloribus aspernatur id quidem amet obcaecati tempore voluptatem consectetur error quod est, quaerat iure dolore tenetur commodi saepe? Eaque, recusandae tenetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis doloribus aspernatur id quidem amet obcaecati tempore voluptatem consectetur error quod est, quaerat iure dolore tenetur commodi saepe? Eaque, recusandae tenetur!</p>
    </div>
   </div>
  )
}

export default ProductDescription;