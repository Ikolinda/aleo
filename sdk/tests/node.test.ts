import {Account, Block, AleoNetworkClient, Transaction} from "../src";
jest.retryTimes(3);

describe('NodeConnection', () => {
    let connection: AleoNetworkClient;

    beforeEach(() => {
        connection = new AleoNetworkClient("https://vm.aleo.org/api");
    });

    describe('setAccount', () => {
        it('should set the account property', () => {
            const account = new Account();
            connection.setAccount(account);
            expect(connection.getAccount()).toEqual(account);
        }, 60000);
    });

    describe('getBlock', () => {
        it('should return a Block object', async () => {
            const block = await connection.getBlock(1);
            expect((block as Block).block_hash).toEqual("ab128sn9ju8r9fp3sc8px9l6m6ceruzzy4ahpnp05rzluygdqn6cqqs4jsf2q");
        }, 60000);

        it('should throw an error if the request fails', async () => {
            await expect(connection.getBlock(99999999)).rejects.toThrow('Error fetching block.');
        }, 60000);
    });

    describe('getBlockRange', () => {
        it('should return an array of Block objects', async () => {
            const blockRange = await connection.getBlockRange(1, 3);
            expect(Array.isArray(blockRange)).toBe(true);
            expect((blockRange as Block[]).length).toBe(2);
            expect(((blockRange as Block[])[0] as Block).block_hash).toBe("ab128sn9ju8r9fp3sc8px9l6m6ceruzzy4ahpnp05rzluygdqn6cqqs4jsf2q");
            expect(((blockRange as Block[])[1] as Block).block_hash).toBe("ab10jhvxr4hx9488kkv4wz6vt0cu6gnjupk9rcg7djcvw0tsxgdggzq3h4s5j");

        }, 60000);

        it('should throw an error if the request fails', async () => {
            await expect(connection.getBlockRange(999999999, 1000000000)).rejects.toThrow('Error fetching blocks between 999999999 and 1000000000.');
        }, 60000);
    });

    describe('getProgram', () => {
        it('should return a string', async () => {
            const program = await connection.getProgram('credits.aleo');
            expect(typeof program).toBe('string');
        }, 60000);

        it('should throw an error if the request fails', async () => {
            const program_id = "a" + (Math.random()).toString(32).substring(2) + ".aleo";
            await expect(connection.getProgram(program_id)).rejects.toThrow('Error fetching program');
        }, 60000);
    });

    describe('getLatestBlock', () => {
        it('should return a Block object', async () => {
            const latestBlock = await connection.getLatestBlock();
            expect(typeof (latestBlock as Block).block_hash).toBe('string');
        }, 60000);
    });

    describe('getLatestHash', () => {
        it('should return a string', async () => {
            const latestHash = await connection.getLatestHash();
            expect(typeof latestHash).toBe('string');
        }, 60000);
    });

    describe('getLatestHeight', () => {
        it('should return a number', async () => {
            const latestHeight = await connection.getLatestHeight();
            expect(typeof latestHeight).toBe('number');
        }, 60000);
    });


    describe('getStateRoot', () => {
        it('should return a string', async () => {
            const stateRoot = await connection.getStateRoot();
            expect(typeof stateRoot).toBe('string');
        }, 60000);
    });

    describe('getTransaction', () => {
        it('should return a Transaction object', async () => {
            const transaction = await connection.getTransaction('at1z4sgvtmc7mhd3qw2tdzc8mqyg60gx2qgtdzcg6e6k673d3pfz5psfhe3kd');
            expect((transaction as Transaction).type).toBe("execute");
        }, 60000);

        it('should throw an error if the request fails', async () => {
            await expect(connection.getTransaction('nonexistentid')).rejects.toThrow('Error fetching transaction.');
        }, 60000);
    });

    describe('getTransactions', () => {
        it('should return an array of Transaction objects', async () => {
            const transactions = await connection.getTransactions(1);
            expect(Array.isArray(transactions)).toBe(true);
            expect((transactions as Transaction[]).length).toBeGreaterThan(0);
        }, 60000);

        it('should throw an error if the request fails', async () => {
            await expect(connection.getTransactions(999999999)).rejects.toThrow('Error fetching transactions.');
        }, 60000);
    });

    describe('getTransition', () => {
        it('should return a transition id', async () => {
            const transition = await connection.getTransition('2429232855236830926144356377868449890830704336664550203176918782554219952323field')
            expect(typeof transition).toBe('string');
        }, 60000);

        it('should throw an error if the request fails', async () => {
            await expect(connection.getTransition("garbage")).rejects.toThrow('Error fetching transition.');
        }, 60000);
    });
});