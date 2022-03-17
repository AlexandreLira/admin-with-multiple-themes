import React from 'react';
import './table.css';


const Table = props => {
    return (
        <div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        {
                            props.headData && props.renderHead && (
                                <thead>
                                    <tr>
                                        { props.headData.map((item, index) => props.renderHead(item, index)) }
                                    </tr>
                                </thead>
                            )
                        }
                        {
                            props.bodyData && props.renderBody && (
                                <tbody>
                                    { props.bodyData.map((item, index) => props.renderBody(item, index)) }
                                </tbody>
                            )
                        }
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Table;