import './index.less';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import SessionStore from '../../stores/sessionStore';
import Board from 'react-trello';

interface DashboardProps {
    sessionStore?: SessionStore;
}
const Dashboard: React.FC<DashboardProps> = ({ sessionStore }) => {

    const [loadingState, setLoadingState] = React.useState({
        cardLoading: true,
        lineChartLoading: true,
        barChartLoading: true,
        pieChartLoading: true,
    });
    const data = {
        lanes: [
          {
            id: 'lane1',
            title: 'Planned Tasks',
            label: '2/2',
            cards: [
              {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: true},
              {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
            ]
          },
          {
            id: 'lane2',
            title: 'Active Tasks',
            label: '0/0',
            cards: []
          },
          {
            id: 'lane3',
            title: 'Completed',
            label: '0/0',
            cards: [
                {id: 'Card3', title: 'Complate', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'},draggable: false}
            ]
          }
        ]
      }

    React.useEffect(() => {
        const fetchData = () => {
            setTimeout(() => setLoadingState((prevState) => ({ ...prevState, cardLoading: false })), 1000);
            setTimeout(() => setLoadingState((prevState) => ({ ...prevState, lineChartLoading: false })), 1500);
            setTimeout(() => setLoadingState((prevState) => ({ ...prevState, barChartLoading: false })), 2000);
            setTimeout(() => setLoadingState((prevState) => ({ ...prevState, pieChartLoading: false })), 1000);
        };
        fetchData();
    }, []);


    return <React.Fragment>
      
      {/* <Board onCardClick={() => {
            console.log('card clicked');
      }} data={data} /> */}
Dashboard
    </React.Fragment>;
};

export default inject(Stores.SessionStore)(observer(Dashboard));