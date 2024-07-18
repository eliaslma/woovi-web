import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { formatCPF, formatExpirationDate, formatCVV, formatCreditCardNumber } from '@/utils/formUtils';

interface CustomTextFieldProps {
    name: string;
    control: any;
    label: string;
    rules?: any;
    formatType?: 'cpf' | 'expirationDate' | 'cvv' | 'cardType';
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ name, control, label, rules, formatType }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let formattedValue = event.target.value;

        switch (formatType) {
            case 'cpf':
                formattedValue = formatCPF(formattedValue);
                break;
            case 'expirationDate':
                formattedValue = formatExpirationDate(formattedValue);
                break;
            case 'cvv':
                formattedValue = formatCVV(formattedValue);
                break;
            case 'cardType': formattedValue = formatCreditCardNumber(formattedValue);
                break;
        }

        if (event.target instanceof HTMLInputElement) {
            event.target.value = formattedValue;
        }

        return event;
    };


    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    onChange={(event) => field.onChange(handleChange(event))}
                    label={label}
                    variant="outlined"
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{
                        width: '100%',
                        '& .MuiInputLabel-outlined': {
                            color: '#4D4D4D',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#E5E5E5',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#03D69D',
                            },
                        },
                    }}

                />
            )}
        />
    );
};

export default CustomTextField;
