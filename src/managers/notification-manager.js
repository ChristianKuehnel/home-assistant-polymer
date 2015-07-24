import { notificationGetters } from 'home-assistant-js';

import Polymer from '../polymer';
import nuclearObserver from '../util/bound-nuclear-behavior';

export default Polymer({
  is: 'notification-manager',

  behaviors: [nuclearObserver],

  properties: {
    text: {
      type: String,
      bindNuclear: notificationGetters.lastNotificationMessage,
      observer: 'showNotification',
    },
  },

  showNotification(newText) {
    if (newText) {
      this.$.toast.show();
    }
  }
});