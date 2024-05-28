import { FaArrowRightLong }  from 'react-icons/fa6'
import { Link }  from 'react-router-dom'

const Item = ({id, name, image, old_price, price, description}) => {
  return (
    <div className='overflow-hidden p-3 rounded-3xl bg-white ring-1 ring-slate-900/5'>
        <div className='relative flexCenter overflow-hidden transition-all duration-100 rounded-3xl transform hover:scale-110  hover:shadow-lg'>
            <img src={image} alt="product image" className='rounded-3xl w-full block object-cover transition-all duration-1000' />
        </div>
        <div className=' pt-3 '>
            <h4 className='medium-18 xl:line-clamp-1'>{name}</h4>
            <p className='my-2 line-clamp-2 md:line-clamp-3 xl:line-clamp-3 '>{description}</p>
            <div className='flexBetween'>
                <div className='xl:flex gap-3'>
                <div className='bold-16'>€{old_price}.00</div>

                </div>
                
                <Link to={`/product/${id}`} className='group' onClick={window.scrollTo(0, 0)} ><FaArrowRightLong className='bg-secondary text-white rounded-full h-10 w-10 p-3 group-hover:-rotate-45 transition-all duration-500'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Item