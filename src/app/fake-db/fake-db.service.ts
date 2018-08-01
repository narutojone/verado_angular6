import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ChatFakeDb } from './chat';

export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Chat
            'chat-contacts': ChatFakeDb.contacts,
            'chat-chats'   : ChatFakeDb.chats,
            'chat-user'    : ChatFakeDb.user,
        };
    }
}
