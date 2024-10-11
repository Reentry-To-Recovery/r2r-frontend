import { ReactNode } from "react";

export interface TableActionCellProps {
    children: ReactNode
}

const TableActionCell = (props: TableActionCellProps) => {
    const { children } = props;

    return (
        <div className="flex">
            {children}
        </div>
    )
}

export default TableActionCell;
