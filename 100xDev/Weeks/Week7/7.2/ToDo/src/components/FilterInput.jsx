import { useRecoilState } from 'recoil';
import { filterTextAtom } from '../store/atoms/filterTextAtom';

export const FilterInput = () => {
    const [filterText, setFilterText] = useRecoilState(filterTextAtom)
    return ( 
        <div>
            <input 
            type="text" 
            value = {filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder='Filter'/>
        </div>
    )
}