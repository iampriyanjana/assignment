import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('')
      .then(response => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataTableComponent rows={data} columns={[{ field: 'column1', headerName: 'Column 1' }, { field: 'column2', headerName: 'Column 2' }]} pageSize={5} loading={loading} />
    </div>
  );
};

export default DataTableComponent;
