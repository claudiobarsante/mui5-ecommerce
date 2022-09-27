import useIsMobile from 'hooks/use-IsMobile';
import AppbarDesktop from './AppbarDesktop';
import AppbarMobile from './AppbarMobile';

export default function Appbar() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <AppbarMobile isMobile={isMobile} />
      ) : (
        <AppbarDesktop isMobile={isMobile} />
      )}
    </>
  );
}
