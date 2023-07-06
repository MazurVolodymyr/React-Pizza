import React from 'react';
import ContentLoader from 'react-content-loader';
import style from './Cards.module.scss';

const Skeleton = () => (
   <ContentLoader
    className={style.card}
      speed={3}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#c6c3c3"
      foregroundColor="#ecebeb"
   >
      <circle cx="131" cy="125" r="125" />
      <rect x="0" y="280" rx="13" ry="13" width="260" height="38" />
      <rect x="0" y="330" rx="10" ry="10" width="260" height="70" />
      <rect x="0" y="420" rx="10" ry="10" width="260" height="28" />
   </ContentLoader>
);

export default Skeleton;
