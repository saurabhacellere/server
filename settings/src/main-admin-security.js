import Vue from 'vue'

import AdminTwoFactor from './components/AdminTwoFactor.vue'
import store from './store/admin-security'

__webpack_nonce__ = btoa(OC.requestToken)

Vue.prototype.t = t;

// Not used here but required for legacy templates
window.OC = window.OC || {};
window.OC.Settings = window.OC.Settings || {};

store.replaceState(
	OCP.InitialState.loadState('settings', 'mandatory2FAState')
)

const View = Vue.extend(AdminTwoFactor)
new View({
	store
}).$mount('#two-factor-auth-settings')
