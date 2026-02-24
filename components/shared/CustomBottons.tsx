import React from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface Props extends PressableProps {
  children: string
  color?: 'primary' | 'secondary' | 'tertiary'
  variant?: 'contained' | 'text-only'
  className?: string
}

const CustomButtons = React.forwardRef<View, Props>(
  ({ children, color = 'primary', variant = 'contained', onPress, className }, ref) => {

    const btnColor = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
    }[color]

    const textColor = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
    }[color]

    if (variant === 'text-only') {
      return (
        <Pressable ref={ref} className={`p-3 ${className}`} onPress={onPress}>
          <Text className={`text-center ${textColor} font-work-light`}>{children}</Text>
        </Pressable>
      )
    }

    return (
      <Pressable
        ref={ref}
        className={`p-3 rounded-md ${btnColor} mb-5 ${className}`}
        onPress={onPress}
      >
        <Text className="text-white text-center">{children}</Text>
      </Pressable>
    )
  }
)

export default CustomButtons