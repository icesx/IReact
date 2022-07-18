import { Link } from "react-router-dom"
import NoUseMemo from "./noUseMemo"
import UseMemo from "./useMemo"

export default function MemoIndex() {
    return (
        <div>
            <div>
                <Link to='/no_usememo'>NoUseMemo</Link>
            </div>
            <div>
                <Link to='/usememo'>UseMemo</Link>
            </div>
        </div>
    )
}