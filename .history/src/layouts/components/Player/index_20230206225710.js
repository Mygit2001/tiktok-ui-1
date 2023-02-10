function Player() {
   return (
    <header className={cx('wrapper')}>
    <div className={cx('inner')}>
       <div>
          <Link to={config.routes.home} className={cx('logo-head')}>
             <img
                src="https://site-images.similarcdn.com/image?url=discogs.com&t=2&s=1&h=c6bf2cb30ff0ccba1331a88416e78887c0a99ee61cba27e25eb83427d75dd8ad"
                alt="logo tiktok"
             />
          </Link>
       </div>
       {<Search />}
       <div className={cx('actions')}>
          {currentUser ? (
             <>
                <Tippy delay={[0, 200]} content="Cài đặt" placement="bottom">
                   <button className={cx('action-btn')}>
                      <FontAwesomeIcon icon={faGear} />
                   </button>
                </Tippy>
                <Tippy delay={[0, 200]} content="Message" placement="bottom">
                   <button className={cx('action-btn')}>
                      <MessageIcon />
                   </button>
                </Tippy>
                <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                   <button className={cx('action-btn')}>
                      <InboxIcon />
                      <span className={cx('badge')}>12</span>
                   </button>
                </Tippy>
             </>
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
