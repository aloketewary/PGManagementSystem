import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryPGService implements InMemoryDbService {
    createDb() {
        let Users = [
            { id: 1, username: 'amrita', password: '123456' }
        ];

        const DashboardOvData = [
            {
                id: 1,
                title: 'Total Candidates',
                mainData: '25',
                belowMainDataPara: 'Out of 45',
                footerTitle: 'Must be',
                footerTitleData: '32'
            },
            {
                id: 1,
                title: 'Total Rent Collected',
                mainData: '25094',
                belowMainDataPara: 'Out of 45345',
                footerTitle: 'Last Date',
                footerTitleData: '12/02/2018'
            },
            {
                id: 1,
                title: 'Total Candidates',
                mainData: '25',
                belowMainDataPara: 'Out of 45',
                footerTitle: 'Must be',
                footerTitleData: '32'
            },
            {
                id: 1,
                title: 'Total Candidates',
                mainData: '25',
                belowMainDataPara: 'Out of 45',
                footerTitle: 'Must be',
                footerTitleData: '32'
            }
        ];
        return { users: Users, dashboard_ov_data: DashboardOvData };
    }
}