import Button from "./Button"
import type { PagerProp } from "../../types/types"

const Pager = ({ postLength, currentPage, itemsPerPage, nextItems, previousItem }: PagerProp) => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className="font-bold text-2xl ">Post({postLength})</h1>
        <section className='flex justify-center items-center gap-3'>
        <Button text="Previous" handleClick={previousItem} color="border-[#d1d5db]"/>
            <p>Page {currentPage} of {itemsPerPage}</p>
            <Button text="Next" handleClick={nextItems} color={`border-[#d1d5db]`} />
        </section>
    </div>
  )
}

export default Pager