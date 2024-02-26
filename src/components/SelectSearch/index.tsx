import React from 'react';
import { Select } from 'antd';

interface SearchProps<T> {
  SearchData: T[] | undefined;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  placeHolder?: string | undefined;
  dataBack?: (data: string) => void;
}

const onSearch = (value: string) => {
  //   console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const SelectSearch: React.FC<SearchProps<any>> = ({
  SearchData,
  placeHolder = 'Tìm kiếm',
  style,
  className,
  dataBack,
}) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    if (dataBack) dataBack(value);
  };
  return (
    <Select
      showSearch
      placeholder={placeHolder}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      allowClear
      options={SearchData || []}
      style={style}
      className={className}
    />
  );
};
export default SelectSearch;
