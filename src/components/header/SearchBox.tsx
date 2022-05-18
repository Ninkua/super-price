
import * as React from "react";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";
import Router from "next/router"
import encodeQueryData from "../../utils/encodeURL";


type searchFormData = {
    gtin: string;
}

export function SearchBox() {

    const { register, handleSubmit, formState } = useForm();

    const handleSearch: SubmitHandler<searchFormData> = async (value) => {
        const urlEncoded = encodeQueryData(value);
        Router.push(`/prices/${urlEncoded}`)
    }

    return (
        <Flex
            as="form"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
            onSubmit={handleSubmit(handleSearch)}
        >

            <Input
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar Produto"
                _placeholder={{ color: "gray.400" }}
                {...register("gtin")}
            />

            <Icon as={RiSearchLine} fontSize="26" color="gray.200" />
        </Flex>
    )
}