import React from 'react';
import ReactTable from 'react-table';
import Button from 'react-bootstrap/Button';
import 'react-table/react-table.css';
import styled from 'styled-components';

const sortOptions = [{ id: 'votes', desc: true }, { id: 'createdDate', desc: true }]

const TableTemplate = ({
  filteredIdeas,
  deleteIdea,
  upVote
}) => {

  const columns = React.useMemo(
    () => [
      {
        //columns for the hackathon ideas
        columns: [
          { Header: () => <b>Id</b>, accessor: 'id', minWidth: 50, maxWidth: 60 },
          { Header: () => <b>Title</b>, accessor: 'title' },
          { Header: () => <b>Description</b>, accessor: 'description', style: { 'whiteSpace': 'unset' } },
          { Header: () => <b>Votes</b>, accessor: 'votes' },
          { Header: () => <b>created On</b>, accessor: 'createdDate', style: { 'whiteSpace': 'unset' } },
          {
            Header: () => <b>Hash Tags </b>, accessor: 'selectedtags', style: { 'whiteSpace': 'unset' }, Cell: ({ value }) => {
              let hashTagsStr = ""
              const hashTags = value.forEach((tag) => {
                hashTagsStr += "#" + tag.value + " ";
              })
              return hashTagsStr;
            }
          },
          {
            Header: () => <b>Actions</b>,
            id: 'actions',
            width: 140,
            Cell: ({ row }) => {
              return (
                <div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => upVote(row.id)}
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
