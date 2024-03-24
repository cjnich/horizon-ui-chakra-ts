import { Input } from '@chakra-ui/react';

const FormInputComponent = (props: {
    isRequired: boolean;
    value: string;
    type: string;
    name: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    const { isRequired, value, type, name, placeholder, onChange } = props;

    return (
            <Input
                isRequired={isRequired}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type={type}
                placeholder={value || placeholder}
                mb='24px'
                fontWeight='500'
                size='lg'
                name={name}
                onChange={onChange}
            />
    )
}

export default FormInputComponent;