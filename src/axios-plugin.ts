import _Vue from 'vue';
import Axios from 'axios';

// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
export function AxiosPlugin<AxiosPlugOptions>(Vue: typeof _Vue, options?: AxiosPluginOptions): void {
  // do stuff with options
  Vue.prototype.$http = Axios;
}

export class AxiosPluginOptions {
  // add stuff
}

import { AxiosStatic } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosStatic;
  }
}
