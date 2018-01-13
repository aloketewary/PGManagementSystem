import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryPGService implements InMemoryDbService {
    createDb() {
        let Users = [
            { id: 1, username: 'amrita', password: 123456 }
        ];
        return { users: Users };
    }
}