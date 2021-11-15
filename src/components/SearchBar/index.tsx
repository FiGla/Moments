import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';

const WAIT_TIME = 2000;
type SearchBarComponentProps = {
  loadData: (search: string) => {};
  fetchOriginalData: () => {};
};
const SearchBarComponent = ({
  loadData,
  fetchOriginalData,
}: SearchBarComponentProps) => {
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
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
    />
  );
};

export default SearchBarComponent;
