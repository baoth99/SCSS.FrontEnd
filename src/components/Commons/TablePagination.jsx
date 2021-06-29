import React from 'react';
import {PAGING} from '../../utils/constants/CommonConstants'
import {
    Pagination,
    PaginationItem,
    PaginationLink,
    CardFooter
  } from "reactstrap";

import {useSelector ,useDispatch} from 'react-redux';


const TablePagination = ({total, dataState, action, formAction}) => {
    const data = useSelector(dataState);
    const dispatch = useDispatch();

    if (total <= 0) {
        return null;
    }
    let paging = Math.floor(total/PAGING);

    console.log(data.page);

    const renderPaginationItem = () => {
        let result = [];
        for (let i = 1; i <= paging; i++) {
            result[i] = (
                <PaginationItem key={i} className={data.page === i ? "active" : ""}>
                        <PaginationLink
                            onClick={() => PagingTable(i)}
                        >
                            {i}
                        </PaginationLink>
                </PaginationItem>
            )        
        }
        return result;
    }

    const PagingTable = (i) => {
        dispatch(formAction({
            ...data,
            page: i
        }));
        
        dispatch(action({
            ...data,
            page: i
        }));
        //console.log(dataForm);
    }

    const ChangePage = (page, status ) => {
        if (status) {
            page = page + 1;
        } else {
            page = page - 1;
        }

        dispatch(formAction({
            ...data,
            page: page
        }));
        
        dispatch(action({
            ...data,
            page: page
        }));
    }
    
    return (
        <CardFooter className="py-4">
            <nav aria-label="...">
            <Pagination
                className="pagination justify-content-end mb-0"
                listClassName="justify-content-end mb-0"
            >
                <PaginationItem className={data.page === 1 ? "disabled" : ""}>
                <PaginationLink
                    onClick={() => ChangePage(data.page, false)}
                    tabIndex="-1"
                >
                    <i className="fas fa-angle-left" />
                    <span className="sr-only">Previous</span>
                </PaginationLink>
                </PaginationItem>

                {renderPaginationItem()}


                <PaginationItem className={data.page === paging ? "disabled" : ""}>
                <PaginationLink
                    onClick={() => ChangePage(data.page, true)}
                >
                    <i className="fas fa-angle-right" />
                    <span className="sr-only">Next</span>
                </PaginationLink>
                </PaginationItem>
            </Pagination>
            </nav>
        </CardFooter>
    );
}

export default TablePagination;
