import { defineModule } from '@directus/extensions-sdk'
import { createPrivateModule } from './directive-react'
import { ReactExample } from './react-example'

export default defineModule({
    id: 'react-example',
    name: 'React Example',
    icon: 'box',
    routes: [
        {
            path: '',
            // Load a React component by converting it to a Vue component
            component: createPrivateModule('React Example', ReactExample),
        },
    ],
})
