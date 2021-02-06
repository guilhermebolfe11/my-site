import React, { useState } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Language: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ) => {
    setLanguage(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };
  return (
    <FormControl>
      <Select value={language} onChange={e => handleChange(e)} color="primary">
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="ptBr">PT-BR</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Language;
