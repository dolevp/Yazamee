import { I18nManager } from 'react-native';

if(I18nManager.isRTL){

  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
  Expo.Util.Reload()

}

import Main from './src/containers/Main/Main';

export default Main;
