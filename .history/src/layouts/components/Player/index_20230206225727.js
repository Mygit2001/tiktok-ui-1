function Player() {
   return (
    <header className={cx('wrapper')}>
    <div className={cx('inner')}>
       <div>
          
       </div>
       
       <div className={cx('actions')}>
          {currentUser ? (
             
          ) : (
             <>
                <Button Text>Tải lên</Button>
                <Button primary>Đăng nhập</Button>
             </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
             {currentUser ? (
                <Image
                   src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/115cca71265c94522079ac7e93a0274b.jpeg?x-expires=1659920400&x-signature=bSa%2BgJvMHBq6HA2yZSe9MTZ04fA%3D"
                   className={cx('user-avatar')}
                   alt="Sy le"
                />
             ) : (
                <button className={cx('more-btn')}>
                   <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
             )}
          </Menu>
       </div>
    </div>
 </header>
   );
}

export default Player;
