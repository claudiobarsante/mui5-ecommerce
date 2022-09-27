import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// -- Types
import { AppbarProps } from './types';
// -- Styles
import * as S from './styles';
// -- Icons
import SearchIcon from '@mui/icons-material/Search';
import Actions from './Actions';

export default function AppbarDesktop({ isMobile }: AppbarProps) {
  return (
    <S.AppbarContainer>
      <S.AppbarHeader>MyBags</S.AppbarHeader>
      <S.MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </S.MyList>
      <Actions isMobile={isMobile} />
    </S.AppbarContainer>
  );
}
