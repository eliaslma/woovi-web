import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function SelectInputOptions({quotes, quote_value, total_number}: {quotes: number, quote_value: string, total_number: number}) {

    const [option, setOption] = React.useState(String(quotes - 1));

    const handleChange = (event: SelectChangeEvent) => {
        setOption(event.target.value as string);
    };

    const formatQuota = (multiplier: number) => {

        const total = total_number / multiplier;

        const formattedValue = total.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });

        return formattedValue;
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={option}
                label="Parcelas"
                onChange={handleChange}>
                    {Array.from({ length: quotes - 1 }, (_, index) => (
                        <MenuItem key={index} value={index + 1}>{index + 1}x de R$ {formatQuota(index + 1)}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}