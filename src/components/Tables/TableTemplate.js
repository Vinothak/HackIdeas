import React from 'react';
import ReactTable,{useTable} from 'react-table';
import Button from 'react-bootstrap/Button';
import 'react-table/react-table.css';
import styled from 'styled-components';


const sortOptions= [{ id: 'votes', desc: false} ,{id:'createdDate',desc:false}]
const TableTemplate = ({
  filteredIdeas,
  deleteIdea,
  upVote
}) => {
  const columns = React.useMemo(
    () => [
      {
        // Code and Assigned will be shown in Admin page which will be implement in the future
        columns: [
          { Header: 'ID', accessor: 'id', minWidth: 50, maxWidth: 60 },
          { Header: 'Title', accessor: 'title' },
          { Header: 'Description', accessor: 'description' },
          { Header: 'votes', accessor: 'votes' },
          { Header: 'createdOn', accessor: 'createdDate'},
          {
            Header: 'Actions',
            id: 'actions',
            width: 140,
            Cell: ({ row }) => {
              return (
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={()=>upVote(row.id)}
                    >
                      UpVote
                  </Button>
                  <StyledButton
                    variant="danger"
                    size="sm"
                    onClick={() => deleteIdea(row.id)}
                  >
                    Delete
                  </StyledButton>
                </div>
              );
            },
          },
        ],
      },
    ],
    [],
  );

  return (
    <ReactTable
      className="-striped -highlight"
      sorted={sortOptions}
      data={filteredIdeas}
      columns={columns}
      defaultPageSize={10}
      style={{
        borderColor: '#a5a4a4',
        borderRadius: '5px',
        borderStyle: 'outset',
      }}
    />
  );
};

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default TableTemplate;
