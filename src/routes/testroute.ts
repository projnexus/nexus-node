import { apiRequestWithToken } from '../utils/request';
import { Client } from '../models/Client';

export const testroute = async function(this: Client): Promise<{ response: Response; status: number }> {
    if (!this) throw new Error('Client not initialized');
    return await apiRequestWithToken('test', this.token);
}
