import * as React from 'react';
import * as moment from 'moment';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Utils from './utils/utils';
import abpUserConfigurationService from './services/abpUserConfigurationService';
import initializeStores from './stores/storeInitializer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

declare var abp: any;
Utils.setLocalization();
abpUserConfigurationService.getAll().then(data => {
    Utils.extend(true, abp, data.data);
    abp.clock.provider = Utils.getCurrentClockProvider(data.data.clock.provider);
    moment.locale(abp.localization.currentLanguage.name);
    if (abp.clock.provider.supportsMultipleTimezone) {
        moment.default(abp.timing.timeZoneInfo.iana.timeZoneId);
    }

    const stores = initializeStores();
    const container = document.getElementById('root');
    const root = createRoot(container!);
    root.render(<Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>)

    registerServiceWorker();
});
