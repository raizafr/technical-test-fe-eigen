'use client';

import Cards from '@/components/card/Card';
import { useCategory } from '@/context/CategoryContext';
import { useCountry } from '@/context/CountryContext';
import { useSearch } from '@/context/SearchContext';
import { topHeadlines } from '@/service/api';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export default function Home() {
  const { countryValue } = useCountry() as any;
  const { searchValue } = useSearch() as any;
  const { categoryValue } = useCategory() as any;
  const [articles, setArticles] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchHeadLines = async () => {
      setIsLoading(true);
      const result: any = await topHeadlines(
        countryValue,
        searchValue,
        categoryValue
      );
      setArticles(result?.data?.articles);
      setIsLoading(false);
    };
    fetchHeadLines();
  }, [countryValue, searchValue, categoryValue]);

  if (isLoading) return <Title className="text-center pt-5">loading...</Title>;
  if (articles.length == 0)
    return <Title className="text-center pt-5">Data not found</Title>;

  return (
    <section className="mt-5 container mx-auto">
      <Row justify="space-evenly" align="bottom" gutter={[0, 16]}>
        {articles?.map((data: any, index: number) => (
          <Col className="flex" key={index}>
            <Cards
              author={data?.author}
              title={data?.title}
              url={data?.url}
              urlToImage={data?.urlToImage}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}
