import { Box, Text } from "@chakra-ui/react";


interface ProductInfoProps {
    name: string;
    price: number
}

export function ProductInfo(props: ProductInfoProps) {
    return (
        <Box
            w="55%"
            p="2"
        >
            <Text
                fontSize={["xs", "1rem"]}
                lineHeight="1.1"
                textAlign="left"
                fontWeight="bold"
            >
                {props.name}
            </Text>

            <Text
                mt={["2", "15"]}
                fontSize={["lg", "2xl"]}
                fontWeight="bold"
            >
                {props.price}
            </Text>

        </Box>
    )
}