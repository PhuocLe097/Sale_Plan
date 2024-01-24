import { GetCurrentLoginInformations } from './dto/getCurrentLoginInformations';
import http from '../httpService';

declare var abp: any;

class SessionService {
    public async getCurrentLoginInformations(): Promise<GetCurrentLoginInformations> {
        let result = await http.get('inside-service'+'/api/Session/GetCurrentLoginInformations', {
            headers: {
                // 'Abp.TenantId': abp.multiTenancy.getTenantIdCookie(),
            },
        });
        return result.data.data;
    }
}

export default new SessionService();
