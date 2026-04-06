import { Flex, LogoIcon, Tag, TagProps, Text } from '@pancakeswap/uikit'

interface HexPayXTagProps extends TagProps {
  logoWidth?: string
  fontSize?: string
}

export const HexPayXTag = ({ logoWidth, fontSize, ...props }: HexPayXTagProps) => {
  return (
    <Tag variant="success" style={{ width: 'fit-content' }} {...props}>
      <Flex>
        <LogoIcon width={logoWidth} />
        <Text ml="6px" color="white" fontSize={fontSize} bold>
          HexPay X
        </Text>
      </Flex>
    </Tag>
  )
}
