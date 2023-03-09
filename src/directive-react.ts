import { applyPureReactInVue, applyPureVueInReact } from 'veaury'
import { h, resolveComponent } from 'vue'

/**
 * This wraps a React component with Directus `PrivateView` Vue component, so that it can be loaded as a module.
 * The `PrivateVue` wraps the component with Directus header, navigation, etc.
 * @param title - The title of the Directus module
 * @param component - A React component which is wrapped by a Vue `PrivateView` component
 * @param props - Any default props passed to the component
 * @see: https://github.com/directus/directus/tree/main/app/src/views/private
 */
export function createPrivateModule(title: string, component: Function, props?: any) {
    const ReactComponent = applyPureReactInVue(component)
    return {
        components: {
            ReactComponent,
        },
        setup: function () {
            const PrivateView = resolveComponent('PrivateView')
            return () => h(PrivateView, { title }, [h(ReactComponent, props)])
        },
    }
}

/**
 * Given a Vue component name, created a React component.
 * @param name - The Vue register name of the component.   Example: 'VButton'.
 * @param includeSlot - Allows child components or text to be added to this component.
 */
export function createReactComponent(name: string, includeSlot = true) {
    return applyPureVueInReact({
        setup: function (props: any, { slots }: any) {
            const component = resolveComponent(name)
            return () => h(component, props, includeSlot ? slots.default : null)
        },
    })
}

// TODO: Implement additional directus components
// https://github.com/directus/directus/wiki/app-components

export const Button = createReactComponent('VButton')
export const Input = createReactComponent('VInput')
export const Slider = createReactComponent('VSlider')
export const ProgressCircle = createReactComponent('VProgressCircular')
export const Select = createReactComponent('VSelect')
