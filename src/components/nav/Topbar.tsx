'use client'

import React from 'react';
import { Menu, Select } from 'antd';
import { Input } from 'antd';
import { Typography } from 'antd';
import { category, country } from '@/lib/constant';
import { useSearch } from '@/context/SearchContext';
import { useCountry } from '@/context/CountryContext';
import { useCategory } from '@/context/CategoryContext';

const { Title } = Typography;
const { Search } = Input;

export default function Topbar() {
  const { searchValue, setSearchvalue } = useSearch() as any;
  const { countryValue, setCountryValue } = useCountry() as any;
  const { categoryValue, setCategoryValue } = useCategory() as any;

  return (
    <Menu mode="horizontal" className="pt-3 sticky top-0 z-10">
      <Menu.Item key={'news'}>
        <Title level={2}>NEWS</Title>
      </Menu.Item>
      <Menu.Item key={'search'}>
        <Search
          placeholder="Search News"
          className="pt-1"
          onChange={(e) => setSearchvalue(e.target.value)}
        />
      </Menu.Item>
      <Menu.Item key={'country'}>
        <div className="flex gap-2 items-center">
          <Title level={5} className="pt-1">
            Country
          </Title>
          <Select
            options={country.map((data: string, index: number) => ({
              value: data,
            }))}
            defaultValue={'id'}
            value={countryValue}
            onChange={(e) => setCountryValue(e)}
          />
        </div>
      </Menu.Item>
      <Menu.Item key={'category'}>
        <div className="flex gap-2 items-center">
          <Title level={5} className="pt-1">
            Category
          </Title>
          <Select
            defaultValue={'general'}
            options={category.map((data: string, index: number) => ({
              value: data,
            }))}
            value={categoryValue}
            onChange={(e) => setCategoryValue(e)}
          />
        </div>
      </Menu.Item>
    </Menu>
  );
}
