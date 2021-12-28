import Vue, { PropOptions } from 'vue'
import { createDecorator } from 'vue-class-component-practice'
import { Constructor } from 'vue/types/options'
import { applyMetadata }  from '../helpers/metadata'

export function Model(
  event?: string,
  options: PropOptions | Constructor[] | Constructor = {}
) {
  return (target: Vue, key: string) => {
    applyMetadata(options, target, key)
    createDecorator((componentOptions, k) => {
      ;(componentOptions.props || ((componentOptions.props = {}) as any))[
        k
      ] = options
      componentOptions.model = { prop: k, event: event || k }
    })(target, key)
  }
}
