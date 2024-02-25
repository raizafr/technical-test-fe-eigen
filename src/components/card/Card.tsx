'use client';

import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import { cardType } from '@/type/cardType';
import Link from 'next/link';

const { Meta } = Card;

export default function Cards({ author, title, url, urlToImage }: cardType) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt={title || 'default'}
            src={urlToImage || '/images/not-found-image.png'}
            width={100}
            height={0}
            loading='lazy'
          />
        }
      >
        <Meta
          title={title}
          description={`author : ${author}`}
          className="truncate"
        />
      </Card>
    </Link>
  );
}
