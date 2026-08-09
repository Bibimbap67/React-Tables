import './App.css';
import { Card, Table, Tag } from 'antd';
import MemberData from './components/MemberData.js';
import { Analytics } from '@vercel/analytics'

function App() {  

  return (
    <div className="App app-container">
      <div className="page-dim-overlay" />
      <div className="app-inner">
      <h1>My Bias Archieve</h1>
      <hr className="app-divider"/>

        {MemberData.theirGroups.map((group) => (
          <Card
            key={group.groupName}
            title={<span className="group-title">{group.groupName}</span>}
            extra={<Tag color={group.color} className="group-tag"><span className="group-tag-text">{group.fandomName}</span></Tag>}
            className="group-card"
            style={{ '--card-bg': `url(${MemberData.getGroupCardBackground(group)})` }}
          >

            <p> <span style={{color: 'white'}}>{group.aboutThisGroup}</span> </p>
            <p className="favorite-label"> Favorite Member: </p>
 
            <Table
              dataSource={group.member}
              columns={MemberData.columns}
              rowKey="id"
              pagination={false}
              className="member-table"
            />
          </Card>
        ))}
        <Analytics/>
      </div>
    </div>
  );
}

export default App;