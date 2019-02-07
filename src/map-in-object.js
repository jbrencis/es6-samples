const icons = {
  feedback: {
    icon: 'Feedback',
    tooltipLabel: 'Send feedback',
    badge: false,
    badgeContent: undefined,
    onClick: () => console.log('Send feedback!')
  },
  help: {
    icon: 'Help',
    tooltipLabel: 'Help',
    badge: false,
    badgeContent: undefined,
    onClick: () => console.log('Help')
  }
};

{
  Object.values(icons).map(el => (
    <MaterialIcon
      key={el.tooltipLabel}
      icon={el.icon}
      tooltipLabel={el.tooltipLabel}
      badge={el.badge}
      badgeContent={el.badgeContent}
      onClick={el.onClick}
    />
  ));
}
