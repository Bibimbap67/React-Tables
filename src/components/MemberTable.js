import { useState } from 'react';
import { Table, Tag } from 'antd';
import MemberPhotoCell from './MemberPhotoCell.js';

function MemberTable({ members }) {
  const [hoveredId, setHoveredId] = useState(null);

  const columns = [
    {
      title: 'Photo',
      dataIndex: 'image',
      key: 'image',
      width: 90,
      render: (src, record) => (
        <MemberPhotoCell
          src={src}
          video={record.video}
          alt={record.stageName}
          onMouseEnter={() => setHoveredId(record.id)}
        />
      ),
    },
    {
      title: 'Stage Name',
      dataIndex: 'stageName',
      key: 'stageName',
      render: (value) => <Tag className="member-tag">{value}</Tag>,
    },
    {
      title: 'Birth Name',
      dataIndex: 'name',
      key: 'name',
      render: (value) => <Tag className="member-tag">{value}</Tag>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (value) => <Tag className="member-tag">{value}</Tag>,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      render: (value) => <Tag className="member-tag">{value}</Tag>,
    },
  ];

  return (
    <Table
      dataSource={members}
      columns={columns}
      rowKey="id"
      pagination={false}
      className={`member-table${hoveredId ? ' member-table-active' : ''}`}
      onRow={(record) => ({
        className: hoveredId === record.id ? 'member-row-popped' : '',
        onMouseLeave: () => setHoveredId(null),
      })}
    />
  );
}

export default MemberTable;