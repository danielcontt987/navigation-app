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
      primary: 'bg-blue-500',
      secondary: 'bg-green-500',
      tertiary: 'bg-gray-500',
    }[color]

    const textColor = {
      primary: 'text-blue-500',
      secondary: 'text-green-500',
      tertiary: 'text-gray-500',
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