import React from 'react';
import {useSelector} from "react-redux";
import TableRow from "./TableRow";

const Table = () => {
    const table = useSelector(state => state.table.table)

    return (
        <div className="table">
            {table.map(r =>
                <TableRow key={r.id} {...r} />
            )}
        </div>
    );
};

export default Table;