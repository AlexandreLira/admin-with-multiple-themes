import React, { useState } from "react";
import "./table.css";

const Table = (props) => {
    const initDataShow =
        props.limit && props.bodyData
            ? props.bodyData.slice(0, Number(props.limit))
            : props.bodyData;

    const [dataShow, setDataShow] = useState(initDataShow);

    let pages = 1;

    let range = [];

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit));
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()]
        
    }

    const [currentPage, setCurrentPage] = useState(1);

    const selectPage = page => {
        const { limit , bodyData } = props
        const start = Number(limit) * page
        const end   = start + Number(limit)

        setDataShow(bodyData.slice(start, end))
        setCurrentPage(page)
    }

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {props.headData && props.renderHead && (
                        <thead>
                            <tr>
                                {props.headData.map((item, index) =>
                                    props.renderHead(item, index)
                                )}
                            </tr>
                        </thead>
                    )}
                    {props.bodyData && props.renderBody && (
                        <tbody>
                            {dataShow.map((item, index) => props.renderBody(item, index))}
                        </tbody>
                    )}
                </table>
            </div>
            {
                pages > 1 && (
                    <div className="table_pagination">
                        {
                            range.map((item, index) => {
                                const active = currentPage === index && 'active'
                                return (
                                    <button 
                                        className={`table_pagination-item ${active}`} key={index}
                                        onClick={() => selectPage(index)}
                                    >
                                        {item + 1}
                                    </button>
                                )
                                }
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Table;
