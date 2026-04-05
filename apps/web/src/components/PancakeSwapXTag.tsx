import { Flex, LogoIcon, Tag, TagProps, Text } from '@pancakeswap/uikit'

interface VeiluxPayXTagProps extends TagProps {
  logoWidth?: string
  fontSize?: string
}

export const VeiluxPayXTag = ({ logoWidth, fontSize, ...props }: VeiluxPayXTagProps) => {
  return (
    <Tag variant="success" style={{ width: 'fit-content' }} {...props}>
      <Flex>
        <LogoIcon width={logoWidth} />
        <Text ml="6px" color="white" fontSize={fontSize} bold>
          VeiluxPay X
        </Text>
      </Flex>
    </Tag>
  )
}
