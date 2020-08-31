import React from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export const DLCList = (props) => {
    var data = props.dlc;
    return (
        <div className='content-container'>
            <ReactTable
                data={data}
                columns={[
                    {
                    Header: 'DLC',
                    columns: [
                        {
                        Header: 'Artist Name',
                        accessor: 'artist'
                        },
                        {
                            Header: 'Song Name',
                            accessor: 'name'
                        },
                        {
                            Header: 'Lead',
                            accessor: 'leadTuning'
                        },
                        {
                            Header: 'Rhythm',
                            accessor: 'rhythmTuning'
                        },
                        {
                            Header: 'Bass',
                            accessor: 'bassTuning'
                        }
                    ]
                    }
                ]}
                defaultPageSize={10}
                className='-striped -highlight'
                />
        </div>
    )
};

const mapStateToProps = (state, props)=>{
    return {
        dlc: state
    };
}

export default connect(mapStateToProps)(DLCList);