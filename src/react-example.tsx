import { ReactNode } from 'react'
import { Button, Slider, ProgressCircle, Select, Input } from './directive-react'

// This is just another React component
export function ReactExample(): ReactNode {
    function onClick() {
        window.alert('Button Clicked!')
    }

    function onBlur() {
        window.alert('Field Blur!')
    }

    return (
        <div style={containerStyles}>
            {/* These are Directus Vue components */}

            <span>Button</span>
            <Button secondary onClick={onClick}>
                Click Me
            </Button>

            <span>Input</span>
            <Input modelValue='This is a Directus input' placeholder='Type here' onBlur={onBlur} />

            <span>Slider</span>
            <Slider min={0} max={100}></Slider>

            <span>ProgressCircle</span>
            <ProgressCircle indeterminate></ProgressCircle>

            <span>Select</span>
            <Select
                items={[
                    {
                        text: 'Item 1',
                        value: 'item-1',
                    },
                    {
                        text: 'Item 2',
                        value: 'item-2',
                    },
                ]}
            />
        </div>
    )
}

const containerStyles = {
    maxWidth: '400px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as any,
    gap: '20px',
}
