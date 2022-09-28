import { styled, Theme } from '@mui/material/styles';
import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { slideInBottom, slideInRight } from '../../animation';
import { Colors } from 'styles/theme/colors';

export const Product = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    position: 'relative'
  }
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '100%',
  background: Colors.light_gray,
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    padding: '24px'
  }
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4
}));

type ProductFavButtonProps = {
  isFav: boolean;
  theme: Theme;
};

export const ProductFavButton = styled(ProductActionButton)(
  ({ isFav, theme }: ProductFavButtonProps) => ({
    color: isFav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      right: 0,
      top: 0
    }
  })
);

type ButtonAddToCartProps = {
  isToShow: boolean;
  theme: Theme;
};
export const ButtonAddToCart = styled(Button)(
  ({ isToShow, theme }: ButtonAddToCartProps) => ({
    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      bottom: '2%',
      width: '300px',
      padding: '10px 5px',
      animation:
        isToShow &&
        `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
    },
    background: Colors.secondary,
    opacity: 0.9
  })
);

export const ProductInfoContainer = styled(Box)(() => ({
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

type ActionsButtonsContainerProps = ButtonAddToCartProps;
export const ActionsButtonsContainer = styled(Box)(
  ({ isToShow, theme }: ActionsButtonsContainerProps) => ({
    [theme.breakpoints.up('md')]: {
      display: isToShow ? 'visible' : 'none',
      position: 'absolute',
      right: 0,
      top: '20%',
      animation:
        isToShow &&
        `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
    }
  })
);
