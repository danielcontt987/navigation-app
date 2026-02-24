import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps{
  children: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

const CustomBottons = ({children, color, onPress}: Props) => {
  const btnColor = {
    primary: 'bg-blue-500',
    secondary: 'bg-green-500',
    tertiary: 'bg-gray-500',
  }[color];
  return (
    <Pressable className={`p-3 rounded-md ${btnColor} mb-5 active:opacity-90`} onPress={onPress}>
      <Text className='text-white text-center'>{children}</Text>
    </Pressable>
  )
}

export default CustomBottons