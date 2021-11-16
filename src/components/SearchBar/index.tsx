import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Searchbar} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';

const WAIT_TIME = 2000;
type SearchBarComponentProps = {
  loadData: (search: string) => {};
  fetchOriginalData: () => {};
};
const SearchBarComponent = ({
  loadData,
  fetchOriginalData,
}: SearchBarComponentProps) => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const [search, setSearch] = useState<string>('');
  const [timer, setTimer] = useState<any>();

  const updateSearch = (newSearchText: string) => {
    setSearch(newSearchText);
    if (newSearchText === '') {
      fetchOriginalData();
    } else {
      clearTimeout(timer);
      setTimer(setTimeout(() => loadData(search), WAIT_TIME));
    }
  };

  return (
    <Searchbar
      placeholder={t('searchPlaceholder')}
      onChangeText={updateSearch}
      value={search}
      style={{backgroundColor: colors.card}}
      placeholderTextColor={colors.text}
      iconColor={colors.text}
      inputStyle={{color: colors.text}}
    />
  );
};

export default SearchBarComponent;
