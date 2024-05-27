import { FaArrowRightLong }  from 'react-icons/fa6'
import { Link }  from 'react-router-dom'

const Item = ({id, name, image, old_price, description}) => {
  return (
    <div className='overflow-hidden p-3 rounded-3xl bg-white ring-1 ring-slate-900/5 '>
        <div className='relative flexCenter overflow-hidden transition-all duration-100 rounded-3xl '>
            <img src={image} alt="product image" className='w-full block object-cover transition-all duration-1000 ' />
        </div>
        <div className='px-5 pt-3'>
            <h4 className='medium-18 line-clamp-1'>{name}</h4>
            <p className='my-2'>{description}</p>
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