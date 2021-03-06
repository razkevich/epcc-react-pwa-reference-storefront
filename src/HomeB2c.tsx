import React from 'react';
import { ImageContainer } from './ImageContainer';
import { useTranslation } from './app-state';

import './HomeB2c.scss'

import bannerImage1 from './images/site-images/b2c-banner-1.png';
import bannerImage2 from './images/site-images/b2c-banner-2.png';
import bannerImage3 from './images/site-images/b2c-banner-3.png';
import productImage1 from './images/site-images/b2c-product-1.png';
import productImage2 from './images/site-images/b2c-product-2.png';
import productImage3 from './images/site-images/b2c-product-3.png';
import productImage4 from './images/site-images/b2c-product-4.png';
import productImage5 from './images/site-images/b2c-product-5.png';
import productImage6 from './images/site-images/b2c-product-6.png';
import productImage7 from './images/site-images/b2c-product-7.png';

const bannerFileName1 = 'b2c-banner-1';
const bannerFileName2 = 'b2c-banner-2';
const bannerFileName3 = 'b2c-banner-3';
const productFileName1 = 'b2c-product-1';
const productFileName2 = 'b2c-product-2';
const productFileName3 = 'b2c-product-3';
const productFileName4 = 'b2c-product-4';
const productFileName5 = 'b2c-product-5';
const productFileName6 = 'b2c-product-6';
const productFileName7 = 'b2c-product-7';

export const HomeB2c: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="homeb2c">
      <section className="homeb2c__banner">
        <ImageContainer imgUrl={bannerImage1} alt={bannerFileName1} imgClassName="homeb2c__bannerimage" />
        <div className="homeb2c__bannerwrap">
          <div className="container">
            <h1 className="homeb2c__bannerheading">{t('home-1-heading')}</h1>
            <div className="homeb2c__bannertxt">
              <p>{t('home-1-content')}</p>
              <button type="button" className="epbtn --secondary">{t('learn-more')}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="homeb2c__goodssection1">
        <div className="container">
          <div className="homeb2c__maingoods">
            <ul className="homeb2c__goodsgrid">
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-2-subheading')}</p>
                    <p className="homeb2c__title">{t('home-2-heading')}</p>
                    <div className="homeb2c__goodsbtns">
                      <button type="button" className="epbtn --secondary">{t('learn-more')}</button>
                    </div>
                  </div>
                  <ImageContainer imgUrl={productImage1} alt={productFileName1} imgClassName="homeb2c__goodsimage" />
                </div>
              </li>
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-3-subheading')}</p>
                    <p className="homeb2c__title">{t('home-3-heading')}</p>
                    <p className="homeb2c__description">{t('home-3-content')}</p>
                    <button type="button" className="epbtn --secondary">{t('add-to-cart')}</button>
                  </div>
                  <ImageContainer imgUrl={productImage2} alt={productFileName2} imgClassName="homeb2c__goodsimage" />
                </div>
              </li>
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-4-subheading')}</p>
                    <p className="homeb2c__title">{t('home-4-heading')}</p>
                    <p className="homeb2c__description">{t('home-4-content')}</p>
                    <button type="button" className="epbtn">{t('ice-cream-makers')}</button>
                  </div>
                  <ImageContainer imgUrl={productImage3} alt={productFileName3} imgClassName="homeb2c__goodsimage" />
                </div>
              </li>
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-5-subheading')}</p>
                    <p className="homeb2c__title">{t('home-5-heading')}</p>
                    <p className="homeb2c__description">{t('home-5-content')}</p>
                  </div>
                  <ImageContainer imgUrl={productImage4} alt={productFileName4} imgClassName="homeb2c__goodsimage" />
                </div>
              </li>
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-6-subheading')}</p>
                    <p className="homeb2c__title">{t('home-6-heading')}</p>
                  </div>
                  <ImageContainer imgUrl={productImage5} alt={productFileName5} imgClassName="homeb2c__goodsimage" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="homeb2c__banner homeb2c__banner2">
        <ImageContainer imgUrl={bannerImage2} alt={bannerFileName2} imgClassName="homeb2c__bannerimage" />
        <div className="homeb2c__bannerwrap">
          <div className="container">
            <h2 className="homeb2c__bannerheading">{t('home-7-heading')}</h2>
            <div className="homeb2c__bannertxt">
              <p>{t('home-7-content')}</p>
              <button type="button" className="epbtn --secondary">{t('learn-more')}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="homeb2c__goodssection2">
        <div className="container">
          <h2 className="homeb2c__goodstitle">{t('quality-blenders')}</h2>
          <div className="homeb2c__maingoods">
            <ul className="homeb2c__goodsgrid">
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-8-subheading')}</p>
                    <p className="homeb2c__title">{t('home-8-heading')}</p>
                    <p className="homeb2c__description">{t('home-8-content')}</p>
                  </div>
                  <ImageContainer imgUrl={productImage6} alt={productFileName6} imgClassName="homeb2c__goodsimage" />
                </div>
              </li>
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-9-subheading')}</p>
                    <p className="homeb2c__title">{t('home-9-heading')}</p>
                    <p className="homeb2c__description">{t('home-9-content')}</p>
                  </div>
                  <ImageContainer imgUrl={productImage7} alt={productFileName7} imgClassName="homeb2c__goodsimage" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="homeb2c__banner">
        <ImageContainer imgUrl={bannerImage3} alt={bannerFileName3} imgClassName="homeb2c__bannerimage" />
        <div className="homeb2c__bannerwrap">
          <div className="container">
            <h2 className="homeb2c__bannerheading">{t('home-10-heading')}</h2>
            <div className="homeb2c__bannertxt">
              <p>{t('home-10-content')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="homeb2c__goodssection3">
        <div className="container">
          <div className="homeb2c__maingoods">
            <ul className="homeb2c__goodsgrid">
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-11-subheading')}</p>
                    <p className="homeb2c__title">{t('home-11-heading')}</p>
                    <p className="homeb2c__description">{t('home-11-content-1')}</p>
                    <p className="homeb2c__description">{t('home-11-content-2')}</p>
                    <div className="homeb2c__goodsbtns">
                      <button type="button" className="epbtn --secondary">{t('bellvie-help')}</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="homeb2c__goodscell">
                <div className="homeb2c__goodswrap">
                  <div className="homeb2c__goodsinfo">
                    <p className="homeb2c__titlesmall">{t('home-12-subheading')}</p>
                    <p className="homeb2c__title">{t('home-12-heading')}</p>
                    <p className="homeb2c__description">{t('home-12-content-1')}</p>
                    <p className="homeb2c__description">{t('home-12-content-2')}</p>
                    <div className="homeb2c__goodsbtns">
                      <button type="button" className="epbtn --secondary">{t('about')}</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

