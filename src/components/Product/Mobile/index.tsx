import { useEffect, useState } from 'react';

import * as S from '../styles';
import { Stack, Tooltip, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
//import useDialogModal from "../../hooks/useDialogModal";
//import ProductDetail from "../productdetail";
//import ProductMeta from "./ProductMeta";
import ProductInfo from '../Info';

export default function SingleProduct({ product, isMobile }) {
  //   const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
  //     useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <S.Product
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.ProductImage src={product.image} />
        <ProductInfo product={product} isMobile={isMobile} />
        <S.ActionsButtonsContainer isToShow={isMobile}>
          <Stack direction={isMobile ? 'row' : 'column'}>
            <S.FavButton isFav={false}>
              <FavoriteIcon />
            </S.FavButton>
            <S.ActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </S.ActionButton>
            <S.ActionButton onClick={() => {}}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </S.ActionButton>
          </Stack>
        </S.ActionsButtonsContainer>
      </S.Product>
      <S.AddToCartButton isToShow={isMobile} variant="contained">
        Add to cart
      </S.AddToCartButton>
      {/* <ProductDetailDialog product={product} /> */}
    </>
  );
}
